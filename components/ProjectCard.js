import { Box, Heading, Text } from "@chakra-ui/react";
import Image from "next/image";

export default function ProjectCard() {
  return (
    <Box borderRadius={2} background="whatsapp.200" boxShadow="md">
      <Image
        width={200}
        height={120}
        layout="responsive"
        src="https://source.unsplash.com/random/200x150"
      />

      <Box p={5}>
        <Heading pb={2}>Project Title</Heading>
        <Text fontSize={["lg", "xl"]}>
          A webshop with focus on storytelling and the high quality products
          created by Andersen-Andersen, a Danish work-wear clothing
          manufacturer.
        </Text>
      </Box>
    </Box>
  );
}
