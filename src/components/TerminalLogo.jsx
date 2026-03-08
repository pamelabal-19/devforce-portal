const TerminalLogo = ({ size = 28 }) => (
  <svg width={size} height={size} viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="28" height="28" rx="6" fill="#1e1c1a"/>
    <rect x="1" y="1" width="26" height="26" rx="5" stroke="#2a2a28" strokeWidth="1"/>
    <circle cx="7" cy="8" r="2" fill="#ff5f57"/>
    <circle cx="13" cy="8" r="2" fill="#febc2e"/>
    <circle cx="19" cy="8" r="2" fill="#28c840"/>
    <path d="M6 15 L10 17.5 L6 20" stroke="#2ec47a" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <line x1="13" y1="20" x2="22" y2="20" stroke="#2ec47a" strokeWidth="1.5" strokeLinecap="round"/>
  </svg>
)

export default TerminalLogo