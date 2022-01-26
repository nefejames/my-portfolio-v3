import Link from "next/link";

interface SocialLinkProps {
  children: JSX.Element;
  url: string;
}

export default function SocialLink({ children, url }: SocialLinkProps) {
  return (
    <Link href={url}>
      <a>{children}</a>
    </Link>
  );
}
