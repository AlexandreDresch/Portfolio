interface HeadingProps {
  className: string;
  title: string;
}

export default function Heading({ className, title }: HeadingProps) {
  return (
    <div className={`${className} max-w-[50rem] mx-auto mb-12 lg:mb-20`}>
      <h2 className="h2 text-center">{title}</h2>
    </div>
  );
}
