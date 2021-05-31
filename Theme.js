import { extendTheme } from "@chakra-ui/react";
import { createBreakpoints } from "@chakra-ui/theme-tools";

export const breakpoints = createBreakpoints({
  sm: "360px",
  md: "768px",
  lg: "992px",
  xl: "1440px",
  "2xl": "1536px",
});

const Theme = extendTheme({
  styles: {
    global: {
      "html, body": {
        background: "#1c1b22",
        color: "#CDCDD4",
        fontFamily: `Inter, 'sans-serif'`,
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
