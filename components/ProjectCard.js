import Image from "next/image";
import { Box, Heading, Text, Badge, Stack } from "@chakra-ui/react";

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
          Website for a dental practice, allowing the users to quickly get an
          idea of the opening times and the working staff.
        </Text>

        <Stack direction="row" mt={4} spacing={4}>
          <Badge fontSize="md">react</Badge>
          <Badge colorScheme="green" fontSize="md">
            chakra ui
          </Badge>
          <Badge colorScheme="red" fontSize="md">
            gsap
          </Badge>
          <Badge colorScheme="purple" fontSize="md">
            vue
          </Badge>
        </Stack>
      </Box>
    </Box>
  );
}
