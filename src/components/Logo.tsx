import Link from "next/link";

export default function Logo() {
  return (
    <Link href="/" className="brand" aria-label="varvell Group home">
      <span className="brand-mark" aria-hidden="true">V</span>
      <span className="brand-copy">
        <strong>varvell</strong>
        <small>GROUP</small>
      </span>
    </Link>
  );
}
