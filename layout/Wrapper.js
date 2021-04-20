import { Box } from "@chakra-ui/react";

export default function Wrapper({ children }) {
  return (
    <Box p={[5, 10]} py={10}>
      {children}
    </Box>
  );
}
