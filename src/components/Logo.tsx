
import Image from "next/image";
import Link from "next/link";

export default function Logo() {
  return (
    <Link href="/" className="brand" aria-label="Varvell Group home">
      <Image
        src="/varvell_011.png"
        alt="Varvell Group Logo"
        width={180}
        height={60}
        priority
        className="object-contain"
      />
    </Link>
  );
}
