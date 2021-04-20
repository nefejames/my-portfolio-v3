import { Box } from "@chakra-ui/react";

export default function Wrapper({ children }) {
  return (
    <Box p={[5, 10]} paddingTop={{ md: "80px" }}>
      {children}
    </Box>
  );
}
