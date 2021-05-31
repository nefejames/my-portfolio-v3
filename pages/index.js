import Head from "next/head";
import { Box, Stack } from "@chakra-ui/react";
import { Wrapper } from "../layout/index";
import { About, Skills, Blog, Projects, Footer } from "../sections/index";

export default function Home() {
  return (
    <Box>
      <Head>
        <title>Emadamerho-Atori | Frontend Web Developer</title>
      </Head>

      <Wrapper>
        <Stack spacing={["12"]}>
          <About />
          <Skills />
          <Projects />
          <Footer />
        </Stack>
      </Wrapper>
    </Box>
  );
}
