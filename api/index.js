const express = require('express');
const fs = require('fs');
const path = require('path');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3000;

// Enable CORS and body parsing
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Ensure data directory exists (gracefully catch read-only filesystem errors in cloud/serverless environments)
const dataDir = path.join(__dirname, '..', 'data');
if (!fs.existsSync(dataDir)) {
  try {
    fs.mkdirSync(dataDir);
  } catch (err) {
    console.warn('Warning: Could not create data directory (likely read-only environment):', err.message);
  }
}

// Serve index.html as the root index page from root directory
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'index.html'));
});

// Serve the root directory static files
app.use(express.static(path.join(__dirname, '..')));

// Health check endpoint
app.get('/api/status', (req, res) => {
  res.json({ status: 'active', message: 'Sacred waters flowing.' });
});

// POST /api/subscribe - Newsletter Email Signup
app.post('/api/subscribe', (req, res) => {
  const { email } = req.body;
  
  if (!email || !email.trim()) {
    return res.status(400).json({ success: false, message: 'Please provide a valid email address.' });
  }

  // Basic email validation regex
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email.trim())) {
    return res.status(400).json({ success: false, message: 'The vessel of email is improperly formatted.' });
  }

  const filePath = path.join(dataDir, 'subscriptions.json');
  let subs = [];

  try {
    if (fs.existsSync(filePath)) {
      const content = fs.readFileSync(filePath, 'utf8');
      subs = JSON.parse(content || '[]');
    }
  } catch (err) {
    console.error('Error reading subscriptions:', err);
    subs = [];
  }

  const emailLower = email.trim().toLowerCase();
  const exists = subs.some(s => s.email.toLowerCase() === emailLower);
  
  if (exists) {
    return res.status(409).json({ 
      success: false, 
      message: 'This email is already aligned with the Circle of the Pure.' 
    });
  }

  subs.push({
    email: email.trim(),
    timestamp: new Date().toISOString()
  });

  try {
    fs.writeFileSync(filePath, JSON.stringify(subs, null, 2), 'utf8');
    return res.json({ 
      success: true, 
      message: 'Thank you. You have been welcomed into the Circle of the Pure.' 
    });
  } catch (err) {
    console.error('Error writing subscription:', err);
    return res.status(500).json({ 
      success: false, 
      message: 'An error occurred during ritual enrollment. Please try again.' 
    });
  }
});

// POST /api/acquire - Vessel booking inquiry
app.post('/api/acquire', (req, res) => {
  const { name, email, quantity, intention } = req.body;

  if (!name || !name.trim()) {
    return res.status(400).json({ success: false, message: 'Please provide your name.' });
  }

  if (!email || !email.trim()) {
    return res.status(400).json({ success: false, message: 'Please provide a contact email.' });
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email.trim())) {
    return res.status(400).json({ success: false, message: 'Please provide a valid contact email.' });
  }

  const qty = parseInt(quantity, 10);
  if (isNaN(qty) || qty <= 0) {
    return res.status(400).json({ success: false, message: 'Please specify a sacred quantity of vessels.' });
  }

  const filePath = path.join(dataDir, 'acquisitions.json');
  let acquisitions = [];

  try {
    if (fs.existsSync(filePath)) {
      const content = fs.readFileSync(filePath, 'utf8');
      acquisitions = JSON.parse(content || '[]');
    }
  } catch (err) {
    console.error('Error reading acquisitions:', err);
    acquisitions = [];
  }

  // Generate an order ID: e.g., SD-74B92
  const orderId = 'SD-' + Math.random().toString(36).substring(2, 7).toUpperCase();

  acquisitions.push({
    orderId,
    name: name.trim(),
    email: email.trim(),
    quantity: qty,
    intention: intention ? intention.trim() : '',
    timestamp: new Date().toISOString()
  });

  try {
    fs.writeFileSync(filePath, JSON.stringify(acquisitions, null, 2), 'utf8');
    return res.json({
      success: true,
      orderId,
      message: 'Your request for Shuddodaka has been received. Our concierge will contact you during the next auspicious window.'
    });
  } catch (err) {
    console.error('Error writing acquisition:', err);
    return res.status(500).json({
      success: false,
      message: 'An error occurred during booking. Please try again.'
    });
  }
});

// Start the server only if running locally (not on Vercel serverless functions)
if (!process.env.VERCEL) {
  app.listen(PORT, () => {
    console.log(`=========================================`);
    console.log(`  SHUDDODAKA SACRED WATER BACKEND ACTIVE`);
    console.log(`  Listening at: http://localhost:${PORT}`);
    console.log(`=========================================`);
  });
}

// Export Express app for Vercel serverless handler
module.exports = app;
