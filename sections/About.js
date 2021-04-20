import { Box, Heading, Text, Button, Stack } from "@chakra-ui/react";
import { EmailIcon, Icon } from "@chakra-ui/icons";
import { FaGithub, FaTwitter, FaLinkedin } from "react-icons/fa";
import { CustomLink } from "../components/index";
export default function About() {
  return (
    <Box maxW="600px">
      <Heading paddingBottom={2}>Hi. I'm Emadamerho Nefe</Heading>
      <Stack spacing="5">
        <Box>
          <Text fontSize={["lg", "xl"]}>
            I'm Frontend web developer and technical writer from Nigeria. I'm
            always learning something new. Of recent, I've been learning more
            about the React Ecosystem, Next JS, Framer Motion, Auth0, Node JS,
            Chakra UI and more.
          </Text>

          <Stack spacing={["5", "7"]} direction="row" mt={[2, 4]}>
            <CustomLink url="https://github.com/nefejames">
              <Icon as={FaGithub} w={[6, 8]} h={[6, 8]} />
            </CustomLink>

            <CustomLink url="https://twitter.com/nefe_james/">
              <Icon as={FaTwitter} w={[6, 8]} h={[6, 8]} />
            </CustomLink>

            <CustomLink url="https://www.linkedin.com/in/nefe-emadamerho-atori-a0233bb7/">
              <Icon as={FaLinkedin} w={[6, 8]} h={[6, 8]} />
            </CustomLink>
            <CustomLink url="mailto:nefejames@yahoo.com">
              <Icon as={EmailIcon} w={[6, 8]} h={[6, 8]} />
            </CustomLink>
          </Stack>
        </Box>

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
