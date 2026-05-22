/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./public/**/*.html",
    "./public/*.html"
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "primary-fixed": "#ffe08f",
        "on-tertiary": "#3d2e00",
        "saffron-sacred": "#E8833A",
        "on-error": "#690005",
        "on-primary": "#3d2e00",
        "surface": "#0a0706",
        "on-secondary-fixed": "#311300",
        "surface-container-high": "#1c1210",
        "error-container": "#93000a",
        "secondary-fixed-dim": "#ffb689",
        "secondary-container": "#a34e00",
        "on-surface": "#f5f0ee",
        "on-tertiary-container": "#503d00",
        "tertiary-fixed": "#ffdf91",
        "inverse-surface": "#f5f0ee",
        "on-surface-variant": "#dccfca",
        "primary-fixed-dim": "#e6c364",
        "bg-void": "#050202",
        "surface-bright": "#3d2622",
        "outline-variant": "#4d3835",
        "white-pure": "#FAFAFA",
        "secondary-fixed": "#ffdbc7",
        "on-background": "#f5f0ee",
        "secondary": "#ffb689",
        "on-error-container": "#ffdad6",
        "on-tertiary-fixed": "#241a00",
        "inverse-on-surface": "#2d1a18",
        "on-primary-fixed": "#241a00",
        "surface-container-highest": "#2e1d1a",
        "background": "#0a0706",
        "surface-dim": "#0a0706",
        "on-tertiary-fixed-variant": "#584400",
        "gold-shimmer": "#E8C97A",
        "primary-container": "#c9a84c",
        "surface-container-low": "#140c0b",
        "tertiary-container": "#c6a95d",
        "surface-variant": "#2e1d1a",
        "on-secondary": "#512400",
        "surface-tint": "#e6c364",
        "on-primary-container": "#503d00",
        "gold-pure": "#C9A84C",
        "on-secondary-container": "#ffdecb",
        "surface-container": "#150e0d",
        "surface-container-lowest": "#050303",
        "on-primary-fixed-variant": "#584400",
        "on-secondary-fixed-variant": "#733500",
        "tertiary-fixed-dim": "#e2c375",
        "outline": "#997e7a",
        "bg-deep": "#080404",
        "inverse-primary": "#755b00",
        "primary": "#e6c364",
        "tertiary": "#e3c476",
        "error": "#ffb4ab"
      },
      borderRadius: {
        "DEFAULT": "0.25rem",
        "lg": "0.5rem",
        "xl": "0.75rem",
        "full": "9999px"
      },
      spacing: {
        "margin-mobile": "24px",
        "margin-page": "64px",
        "gutter": "32px",
        "section-gap": "128px",
        "unit": "8px"
      },
      fontFamily: {
        "headline-md": ["EB Garamond", "serif"],
        "display-lg": ["EB Garamond", "serif"],
        "headline-sm": ["EB Garamond", "serif"],
        "body-lg": ["Hanken Grotesk", "sans-serif"],
        "label-caps": ["Hanken Grotesk", "sans-serif"],
        "display-lg-mobile": ["EB Garamond", "serif"],
        "body-md": ["Hanken Grotesk", "sans-serif"]
      },
      fontSize: {
        "headline-md": ["32px", { lineHeight: "40px", fontWeight: "400" }],
        "display-lg": ["48px", { lineHeight: "56px", letterSpacing: "-0.02em", fontWeight: "400" }],
        "headline-sm": ["24px", { lineHeight: "32px", fontWeight: "500" }],
        "body-lg": ["18px", { lineHeight: "28px", letterSpacing: "0.01em", fontWeight: "400" }],
        "label-caps": ["12px", { lineHeight: "16px", letterSpacing: "0.15em", fontWeight: "600" }],
        "display-lg-mobile": ["36px", { lineHeight: "44px", letterSpacing: "-0.01em", fontWeight: "400" }],
        "body-md": ["16px", { lineHeight: "24px", fontWeight: "400" }]
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'scroll': 'scroll 40s linear infinite',
        'fade-up': 'fadeUp 1s ease-out forwards',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        scroll: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-100%)' },
        },
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(40px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        }
      }
    }
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/container-queries')
  ],
}
