type DialogContentWrapperProps = {
  children: React.ReactNode;
};

export function DialogContentWrapper({children}: DialogContentWrapperProps) {
  return <div className="flex flex-col gap-y-2">{children}</div>;
}
