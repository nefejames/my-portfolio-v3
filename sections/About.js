import { Box, Heading, Text, Stack, Link } from "@chakra-ui/react";
import { EmailIcon, Icon, ExternalLinkIcon } from "@chakra-ui/icons";
import { FaGithub, FaTwitter, FaLinkedin } from "react-icons/fa";
import { SiCodesandbox } from "react-icons/si";
import { CustomLink } from "@components/index";
import WritingLink from "@components/WritingLink";
import writingData from "@data/writingData";

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
          <Text>
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
            {writingData.map((data, i) => (
              <>
                {""} <WritingLink key={i} href={data.href} label={data.label} />
                ,{""}
              </>
            ))}{" "}
            {""}
            and{" "}
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
