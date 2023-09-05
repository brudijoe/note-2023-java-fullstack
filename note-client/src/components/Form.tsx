type FormProps = {
  children: React.ReactNode;
};

export function Form({children}: FormProps) {
  return <form className="flex flex-col">{children}</form>;
}
