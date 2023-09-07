type ButtonGroupProps = {
  gap?: string;
  justify?: string;
  flexDirection: string;
  children?: React.ReactNode;
};

export function ButtonGroup({justify, flexDirection, gap, children}: ButtonGroupProps) {
  return <div className={`flex ${flexDirection} ${justify} ${gap}`}>{children}</div>;
}

export default ButtonGroup;
