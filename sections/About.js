import { Box, Heading, Text, Button, Stack } from "@chakra-ui/react";
import { EmailIcon } from "@chakra-ui/icons";

export default function About() {
  return (
    <Box maxW="600px">
      <Heading paddingBottom={2}>Hi. I'm Emadamerho Nefe</Heading>
      <Stack spacing="5">
        <Text fontSize={["lg", "xl"]}>
          I'm Frontend web developer and technical writer from Nigeria. I'm
          always learning something new. Of recent, I've been learning more
          about the React Ecosystem, Next JS, Framer Motion, Auth0, Node JS,
          Chakra UI and more.
        </Text>

        <Box>
          <Text fontSize={["lg", "xl"]}>
            My skillset and interests include:
          </Text>
          <Box>
            <Text fontSize={["lg", "xl"]}>list of tech skills</Text>
          </Box>
        </Box>
      </Stack>

      <Button
        leftIcon={<EmailIcon />}
        colorScheme="blue"
        variant="solid"
        marginTop={3}
        background="whatsapp.700"
      >
        Get in touch
      </Button>
    </Box>
  );
}
