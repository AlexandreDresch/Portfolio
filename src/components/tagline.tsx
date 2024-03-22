import Brackets from "../assets/svg/brackets";

interface TaglineProps {
  className: string;
  children: React.ReactNode;
}

export default function Tagline({ className, children }: TaglineProps) {
  return (
    <div className={`tagline flex items-center ${className || ""}`}>
      {Brackets({ position: "left" })}
      <div className="mx-3 text-n-3">{children}</div>
      {Brackets({ position: "right" })}
    </div>
  );
}
