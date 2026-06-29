interface CTAButtonProps {
  label: string;
  href?: string;
  type?: "button" | "submit";
  onClick?: () => void;
  disabled?: boolean;
}

export function CTAButton({
  label,
  href,
  type = "button",
  onClick,
  disabled = false,
}: CTAButtonProps) {
  const className =
    "inline-block px-8 py-3 border border-text-primary/20 text-text-primary " +
    "text-sm font-normal tracking-[0.2em] uppercase " +
    "hover:border-text-primary/45 hover:bg-text-primary/[0.04] " +
    "transition-all duration-700 " +
    "focus:outline-none focus:border-text-primary " +
    "disabled:opacity-30 disabled:cursor-not-allowed disabled:hover:border-text-primary/20 disabled:hover:bg-transparent";

  if (href) {
    return (
      <a href={href} className={className}>
        {label}
      </a>
    );
  }

  return (
    <button type={type} className={className} onClick={onClick} disabled={disabled}>
      {label}
    </button>
  );
}
