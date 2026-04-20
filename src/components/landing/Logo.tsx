const Logo = ({ size = 24 }: { size?: number }) => {
  const id = "remvy-glow";
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <defs>
        <radialGradient id={id} cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="hsl(var(--accent))" stopOpacity="1" />
          <stop offset="60%" stopColor="hsl(var(--accent))" stopOpacity="0.4" />
          <stop offset="100%" stopColor="hsl(var(--accent))" stopOpacity="0" />
        </radialGradient>
        <linearGradient id={`${id}-trail`} x1="0" y1="1" x2="0" y2="0">
          <stop offset="0%" stopColor="hsl(var(--accent))" stopOpacity="0" />
          <stop offset="100%" stopColor="hsl(var(--accent))" stopOpacity="0.9" />
        </linearGradient>
      </defs>
      {/* Trail */}
      <rect x="15" y="14" width="2" height="14" rx="1" fill={`url(#${id}-trail)`} />
      {/* Ring */}
      <circle cx="16" cy="18" r="6" stroke="hsl(var(--accent))" strokeWidth="1.5" opacity="0.8" />
      {/* Glow halo */}
      <circle cx="16" cy="6" r="8" fill={`url(#${id})`} />
      {/* Luminous dot breaking free above */}
      <circle cx="16" cy="6" r="2.5" fill="hsl(var(--accent))" />
      <circle cx="16" cy="6" r="1.2" fill="white" />
    </svg>
  );
};

export const Wordmark = ({ size = 24 }: { size?: number }) => (
  <div className="flex items-center gap-2.5">
    <Logo size={size} />
    <span className="font-display text-lg font-extrabold tracking-tight text-foreground">Remvy</span>
  </div>
);

export default Logo;