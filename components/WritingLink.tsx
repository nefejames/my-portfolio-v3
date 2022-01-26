import { Link } from "@chakra-ui/react";

interface WritingLinkProps {
  href: string;
  label: string;
}

export default function WritingLink({ label, href }: WritingLinkProps) {
  return (
    <Link href={href} isExternal color="#00DDFF">
      {label}
    </Link>
  );
}
