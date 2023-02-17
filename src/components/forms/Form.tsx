export default function Form({
  children,
  className,
  ...props
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <form {...props} className={className}>
      {children}{" "}
    </form>
  );
}
