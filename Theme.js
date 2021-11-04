import { extendTheme } from "@chakra-ui/react";

const Theme = extendTheme({
  styles: {
    global: {
      "html, body": {
        background: "#222",
        color: "#CDCDD4",
        fontFamily: `'Cabin', sans-serif`,
      },
      p: {
        fontSize: "2xl",
      },
    },
  },
  colors: {
    brand: {
      100: "rgb(75, 85, 72)",
      200: " #f5f5f4",
      300: "#ACAFAD",
      400: "#e2e6e3",
      500: "rgb(43, 46, 43)",
    },
  },
});
export default Theme;
