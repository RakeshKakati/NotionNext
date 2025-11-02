/* eslint-disable react/no-unknown-property */
/**
 * Medium.com inspired styles
 * Clean, minimalist typography and spacing
 */
const Style = () => {
  return <style jsx global>{`
    /* Medium.com inspired base styles */
    #theme-medium {
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif !important;
      color: rgba(0, 0, 0, 0.84) !important;
      line-height: 1.58 !important;
      letter-spacing: -0.003em !important;
      background: #ffffff !important;
    }

    #theme-medium.dark {
      color: rgba(255, 255, 255, 0.84) !important;
      background-color: #000000 !important;
    }

    /* Clean navigation bar like Medium */
    #top-nav {
      border-bottom: 1px solid rgba(0, 0, 0, 0.09);
    }

    .dark #top-nav {
      border-bottom: 1px solid rgba(255, 255, 255, 0.09);
    }

    /* Article cards with Medium styling */
    #theme-medium article,
    #theme-medium #posts-wrapper > div {
      border-bottom: 1px solid rgba(0, 0, 0, 0.09);
      padding-bottom: 2rem;
    }

    .dark #theme-medium article,
    .dark #theme-medium #posts-wrapper > div {
      border-bottom: 1px solid rgba(255, 255, 255, 0.09);
    }

    /* Clean link styles */
    #theme-medium a {
      color: rgba(0, 0, 0, 0.84);
      text-decoration: none;
      transition: opacity 0.2s;
    }

    #theme-medium a:hover {
      opacity: 0.7;
    }

    .dark #theme-medium a {
      color: rgba(255, 255, 255, 0.84);
    }

    /* Medium-style headings */
    #theme-medium h1,
    #theme-medium h2 {
      font-weight: 700;
      letter-spacing: -0.016em;
      line-height: 1.04;
    }

    #theme-medium h2 {
      font-size: 1.875rem;
      margin-top: 0;
      margin-bottom: 0.5rem;
    }

    /* Paragraph spacing */
    #theme-medium p {
      margin-bottom: 1.5rem;
    }

    /* Remove unnecessary borders and shadows */
    #theme-medium .border-b {
      border-color: rgba(0, 0, 0, 0.09) !important;
    }

    .dark #theme-medium .border-b {
      border-color: rgba(255, 255, 255, 0.09) !important;
    }

    /* Clean buttons */
    #theme-medium button {
      font-family: inherit;
    }

    /* Sidebar styling */
    #theme-medium #container-wrapper ~ div {
      border-left: 1px solid rgba(0, 0, 0, 0.09);
    }

    .dark #theme-medium #container-wrapper ~ div {
      border-left: 1px solid rgba(255, 255, 255, 0.09);
    }

    /* Footer minimal styling */
    #theme-medium footer {
      border-top: 1px solid rgba(0, 0, 0, 0.09);
      color: rgba(0, 0, 0, 0.54);
    }

    .dark #theme-medium footer {
      border-top: 1px solid rgba(255, 255, 255, 0.09);
      color: rgba(255, 255, 255, 0.54);
    }
  `}</style>
}

export { Style }
