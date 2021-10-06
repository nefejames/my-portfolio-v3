import { ChakraProvider } from "@chakra-ui/react";
import Theme from "@root/Theme";

import "@fontsource/pt-sans";
import "@fontsource/sora/500.css";

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={Theme} resetCSS>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
