import { Box, Heading, Text, Stack, Link } from "@chakra-ui/react";
import { EmailIcon, Icon, ExternalLinkIcon } from "@chakra-ui/icons";
import { FaGithub, FaTwitter, FaLinkedin } from "react-icons/fa";
import { CustomLink } from "../components/index";

export default function About() {
  return (
    <Box maxW="700px" overflow="hidden">
      <Heading paddingBottom={2} color="#00DDFF" fontSize={["30px", "50px"]}>
        Hi. I'm Nefe Emadamerho-Atori
      </Heading>
      <Stack spacing="5">
        <Box>
          <Text fontSize={["lg", "xl"]}>
            I'm a Frontend web developer and technical writer from Nigeria. I
            write write technical articles for{" "}
            <Link
              href="https://blog.logrocket.com/author/nefejames/"
              isExternal
              color="#00DDFF"
            >
              LogRocket <ExternalLinkIcon />
            </Link>
            {""} and {""}
            <Link
              href="https://www.smashingmagazine.com/author/nefe-emadamerho-atori/"
              isExternal
              color="#00DDFF"
            >
              {""}
              Smashing Mag <ExternalLinkIcon />
            </Link>
          </Text>

          <Stack spacing={["5", "7"]} direction="row" mt={[12]}>
            <CustomLink url="https://github.com/nefejames">
              <Icon as={FaGithub} w={[6, 6]} h={[6, 6]} />
            </CustomLink>

            <CustomLink url="https://twitter.com/nefe_james/">
              <Icon as={FaTwitter} w={[6, 6]} h={[6, 6]} />
            </CustomLink>

            <CustomLink url="https://www.linkedin.com/in/nefe-emadamerho-atori-a0233bb7/">
              <Icon as={FaLinkedin} w={[6, 6]} h={[6, 6]} />
            </CustomLink>
            <CustomLink url="mailto:nefejames@yahoo.com">
              <Icon as={EmailIcon} w={[6, 6]} h={[6, 6]} />
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
    </Box>
  );
}
