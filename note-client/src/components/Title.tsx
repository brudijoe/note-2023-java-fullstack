interface TitleProps {
  title: string;
}

export function Title({title}: TitleProps) {
  return <div className="text-black dark:text-white font-bold">{title}</div>;
}
