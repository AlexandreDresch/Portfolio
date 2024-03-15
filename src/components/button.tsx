import ButtonSvg from "../assets/svg/button-svg";

interface ButtonProps {
  className?: string;
  href?: string;
  onClick?: () => void;
  paddingX?: string;
  white: boolean;
  children: React.ReactNode;
}

export default function Button({
  className,
  children,
  white,
  onClick,
  href,
  paddingX,
}: ButtonProps) {
  const globalClasses = `button relative inline-flex items-center justify-center 
  h-11 transition-colors hover:text-color-1 ${paddingX || "px-7"} ${
    white ? "text-n-8" : "text-n-1"
  } ${className || ""}`;

  const spanClasses = "relative z-10";

  const renderButton = () => (
    <button className={globalClasses} onClick={onClick}>
      <span className={spanClasses}>{children}</span>
      {ButtonSvg({ white })}
    </button>
  );

  const renderLink = () => (
    <a className={globalClasses} href={href}>
      <span className={spanClasses}>{children}</span>
      {ButtonSvg({ white })}
    </a>
  );

  return href ? renderLink() : renderButton();
}
