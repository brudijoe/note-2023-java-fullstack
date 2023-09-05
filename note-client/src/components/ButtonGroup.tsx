type ButtonGroupProps = {
  children?: React.ReactNode;
};

export function ButtonGroup({children}: ButtonGroupProps) {
  return <div className="flex flex-row pt-4 justify-between">{children}</div>;
}

export default ButtonGroup;
