import Link from "next/link";
import { Link as ChakraLink } from "@chakra-ui/react";
export default function CustomLink({ children, url }) {
  return (
    <Link href={url}>
      <a>{children}</a>
    </Link>
  );
}
