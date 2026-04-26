const Logo = ({ size = 24 }: { size?: number }) => (
  <img
    src="/logo.svg"
    alt="Remvy logo"
    style={{ height: `${size}px` }}
    className="block w-auto object-contain"
  />
);

export const Wordmark = ({ size = 24 }: { size?: number }) => (
  <div className={`${size >= 44 ? "gap-4" : "gap-3"} flex items-center`}>
    <Logo size={size} />
    <span
      className={`font-display font-extrabold tracking-[0.14em] text-foreground ${
        size >= 52
          ? "text-[1.72rem]"
          : size >= 44
            ? "text-[1.52rem]"
            : size >= 34
              ? "text-[1.38rem]"
              : size >= 28
                ? "text-[1.1rem]"
                : "text-base"
      }`}
    >
      REMVY
    </span>
  </div>
);

export default Logo;
