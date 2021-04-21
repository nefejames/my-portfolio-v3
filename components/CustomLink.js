import Link from "next/link";

export default function CustomLink({ children, url }) {
  return (
    <Link href={url}>
      <a>{children}</a>
    </Link>
  );
}
