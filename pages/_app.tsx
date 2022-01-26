import { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import Theme from "../Theme";

import "@fontsource/pt-sans";
import "@fontsource/sora/500.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={Theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
