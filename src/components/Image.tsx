type Image = {
  src: string;
  alt: string;
  width: number;
  height: number;
};
export default function Image({ ...props }: Image) {
  return <img {...props} />;
}
