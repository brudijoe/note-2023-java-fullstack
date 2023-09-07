type FormProps = {
  children: React.ReactNode;
};

export function Form({children}: FormProps) {
  return <form className="flex flex-col gap-y-4">{children}</form>;
}
