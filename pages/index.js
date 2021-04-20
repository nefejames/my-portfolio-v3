import Head from "next/head";
import { Box, Stack } from "@chakra-ui/react";
import { Wrapper } from "../layout/index";
import { About, Blog, Projects } from "../sections/index";

export default function Home() {
  return (
    <Box>
      <Head>
        <title>Emadamerho-Atori Nefe</title>
      </Head>

      <Wrapper>
        <Stack spacing={["10", "20"]}>
          <About />
          <Projects />
          <Blog />
        </Stack>
      </Wrapper>
    </Box>
  );
}
