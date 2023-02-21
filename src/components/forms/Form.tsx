export default function Form({
  children,
  className,
  onSubmit,
  ...props
}: {
  children: React.ReactNode;
  className?: string;
  onSubmit?: (event: React.FormEvent<HTMLFormElement>) => void;
}) {
  return (
    <form onSubmit={onSubmit} {...props} className={className}>
      {children}
    </form>
  );
}
