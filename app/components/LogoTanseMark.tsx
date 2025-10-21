import Image from "next/image";

type Props = { className?: string; size?: number };

export default function LogoTanseMark({ className, size = 20 }: Props) {
  return (
    <Image
      src="/brand/tanse-mark.png?v=3"
      alt="TANSE"
      width={size}
      height={size}
      className={className ?? "h-5 w-5"}
      priority={false}
    />
  );
}