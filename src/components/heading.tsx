import Tagline from "./tagline";

interface HeadingProps {
  className?: string;
  title?: string;
  text?: string;
  tag?: string;
}

export default function Heading({ className, title, text, tag }: HeadingProps) {
  return (
    <div className={`${className} max-w-[50rem] mx-auto mb-12 lg:mb-20`}>
      {tag && <Tagline className="mb-4 justify-center">{tag}</Tagline>}
      {title && <h2 className="h2 text-center">{title}</h2>}
      {text && <p className="body-2 mt-4 text-n-4">{text}</p>}
    </div>
  );
}
