const DiagonalDivider = () => (
  <svg
    className="w-full h-16 md:h-24 lg:h-32"
    viewBox="0 0 100 100"
    preserveAspectRatio="none"
  >
    <polygon points="0,100 100,80 100,100" fill="url(#grad)" />
    <defs>
      <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stopColor="#0f172a" />
        <stop offset="100%" stopColor="#1e293b" />
      </linearGradient>
    </defs>
  </svg>
);

export default DiagonalDivider;
