import Head from "next/head";
import { Box, Stack } from "@chakra-ui/react";
import { Wrapper } from "../layout/index";
import {
  About,
  TechnicalSkills,
  WritingSkills,
  Blog,
  Projects,
  Footer,
} from "@sections/index";
//work on seo next
export default function Home() {
  return (
    <Box>
      <Head>
        <title>Emadamerho-Atori | Frontend Web Developer</title>
      </Head>

      <Wrapper>
        <Stack spacing={["12"]}>
          <About />
          <TechnicalSkills />
          <WritingSkills />
          <Projects />
          <Footer />
        </Stack>
      </Wrapper>
    </Box>
  );
}
