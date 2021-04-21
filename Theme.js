import { extendTheme } from "@chakra-ui/react";

const Theme = extendTheme({
  styles: {
    global: {
      "html, body": {
        background: "#1c1b22",
        color: "#CDCDD4",
        fontFamily: `PT Sans, 'sans-serif'`,
      },
    },
  },
  fonts: {
    heading: `Sora, 'sans-serif'`,
    body: `PT Sans, 'sans-serif'`,
  },
});
export default Theme;
