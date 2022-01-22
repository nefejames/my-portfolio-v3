import { Box, Center } from "@chakra-ui/react";

export default function Wrapper({ children }) {
  return (
    <Center>
      <Box px={[5, 10]} py={[10, 20]} maxWidth={"1000px"}>
        {children}
      </Box>
    </Center>
  );
}
