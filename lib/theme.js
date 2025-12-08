export const theme = {
  colors: {
    // Primary colors
    primary: '#3b82f6',
    primaryDark: '#2563eb',
    primaryLight: '#60a5fa',
    
    // Accent colors
    accent: '#10b981',
    accentDark: '#059669',
    accentLight: '#34d399',
    
    // Neutral colors
    background: '#ffffff',
    backgroundAlt: '#f9fafb',
    text: '#111827',
    textSecondary: '#6b7280',
    textLight: '#9ca3af',
    
    // Borders
    border: '#e5e7eb',
    borderLight: '#f3f4f6',
    borderDark: '#d1d5db',
    
    // Status colors
    success: '#10b981',
    warning: '#f59e0b',
    error: '#dc2626',
    info: '#3b82f6',
    
    // Card colors
    cardBackground: '#ffffff',
    cardHover: 'rgba(37, 99, 235, 0.05)',
    
    // Tag colors
    tagBackground: '#eff6ff',
    tagText: '#3b82f6',
    
    // Shadow colors
    shadowSm: 'rgba(0, 0, 0, 0.1)',
    shadowMd: 'rgba(37, 99, 235, 0.15)',
    shadowLg: 'rgba(37, 99, 235, 0.1)',
  },
  
  breakpoints: {
    mobile: '768px',
    tablet: '1024px',
    desktop: '1280px',
  },
  
  spacing: {
    xs: '0.25rem',   // 4px
    sm: '0.5rem',    // 8px
    md: '1rem',      // 16px
    lg: '1.5rem',    // 24px
    xl: '2rem',      // 32px
    '2xl': '3rem',   // 48px
    '3xl': '4rem',   // 64px
  },
  
  borderRadius: {
    sm: '0.375rem',  // 6px
    md: '0.5rem',    // 8px
    lg: '0.75rem',   // 12px
    xl: '1rem',      // 16px
    full: '9999px',
  },
  
  fontSize: {
    xs: '0.75rem',   // 12px
    sm: '0.875rem',  // 14px
    base: '1rem',    // 16px
    lg: '1.125rem',  // 18px
    xl: '1.25rem',   // 20px
    '2xl': '1.5rem', // 24px
    '3xl': '1.875rem', // 30px
    '4xl': '2.25rem',  // 36px
  },
  
  fontWeight: {
    normal: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
  },
  
  transitions: {
    fast: '0.15s ease',
    base: '0.3s ease',
    slow: '0.4s cubic-bezier(0.4, 0, 0.2, 1)',
  },
  
  shadows: {
    sm: '0 1px 3px 0 rgba(0, 0, 0, 0.1)',
    md: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
    lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
    xl: '0 20px 25px -5px rgba(37, 99, 235, 0.15), 0 10px 10px -5px rgba(37, 99, 235, 0.1)',
  },
  
  zIndex: {
    dropdown: 1000,
    modal: 1050,
    popover: 1060,
    tooltip: 1070,
  },
};

// Media query helpers
export const media = {
  mobile: `@media (max-width: ${theme.breakpoints.mobile})`,
  tablet: `@media (max-width: ${theme.breakpoints.tablet})`,
  desktop: `@media (min-width: ${theme.breakpoints.desktop})`,
};

export default theme;
