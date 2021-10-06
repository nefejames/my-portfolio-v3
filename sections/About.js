import { Box, Heading, Text, Stack, Link } from "@chakra-ui/react";
import { EmailIcon, Icon, ExternalLinkIcon } from "@chakra-ui/icons";
import { FaGithub, FaTwitter, FaLinkedin } from "react-icons/fa";
import { SiCodesandbox } from "react-icons/si";
import { CustomLink } from "@components/index";

export default function About() {
  return (
    <Box maxW="850px" overflow="hidden">
      <Heading
        paddingBottom={2}
        mt={2}
        color="#00DDFF"
        fontSize={["30px", "50px"]}
      >
        Hi. I'm Nefe Emadamerho-Atori
      </Heading>
      <Stack spacing="5">
        <Box>
          <Text fontSize={["lg", "xl"]}>
            I'm a{" "}
            <Text as="span" fontWeight="bold" color="#00DDFF">
              {" "}
              Frontend Developer
            </Text>{" "}
            and{" "}
            <Text as="span" fontWeight="bold" color="#00DDFF">
              {" "}
              Technical Writer{" "}
            </Text>{" "}
            from Nigeria. You can find my articles on {""}
            <Link
              href="https://blog.logrocket.com/author/nefejames/"
              isExternal
              color="#00DDFF"
            >
              {" "}
              LogRocket
            </Link>
            ,{" "}
            <Link
              href="https://www.smashingmagazine.com/author/nefe-emadamerho-atori/"
              isExternal
              color="#00DDFF"
            >
              {""}
              Smashing Magazine
            </Link>{" "}
            {""}
            and {""}
            <Link
              href="https://hashnode.com/@nefejames"
              isExternal
              color="#00DDFF"
            >
              Hashnode
            </Link>
            .
          </Text>

          <Stack spacing={["5", "7"]} direction="row" mt={[9]}>
            <CustomLink url="https://github.com/nefejames">
              <Icon as={FaGithub} w={[6, 6]} h={[6, 6]} />
            </CustomLink>

            <CustomLink url="https://twitter.com/nefe_james/">
              <Icon as={FaTwitter} w={[6, 6]} h={[6, 6]} />
            </CustomLink>
            <CustomLink url="https://codesandbox.io/u/nefejames">
              <Icon as={SiCodesandbox} w={[6, 6]} h={[6, 6]} />
            </CustomLink>
            <CustomLink url="https://www.linkedin.com/in/nefe-emadamerho-atori-a0233bb7/">
              <Icon as={FaLinkedin} w={[6, 6]} h={[6, 6]} />
            </CustomLink>

            <CustomLink url="mailto:nefejames@yahoo.com">
              <Icon as={EmailIcon} w={[6, 6]} h={[6, 6]} />
            </CustomLink>
          </Stack>
        </Box>
      </Stack>
    </Box>
  );
}
