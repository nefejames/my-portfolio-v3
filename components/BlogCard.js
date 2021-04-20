import { Box, Heading, Text } from "@chakra-ui/react";
import Link from "next/link";
import Image from "next/image";

export default function BlogCard() {
  return (
    <Link href="#">
      <a>
        <Box borderRadius={2} background="whatsapp.200" boxShadow="md">
          {/* <Image
            width={200}
            height={120}
            layout="responsive"
            src="https://source.unsplash.com/random/200x150"
          /> */}

          <Box p={5}>
            <Heading pb={2}>Blog Title</Heading>
            <Text fontSize={["lg", "xl"]}>
              A webshop with focus on storytelling and the high quality products
              created by Andersen-Andersen, a Danish work-wear clothing
              manufacturer.
            </Text>
          </Box>
        </Box>
      </a>
    </Link>
  );
}
