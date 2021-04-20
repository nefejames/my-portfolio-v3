import { Box, Heading } from "@chakra-ui/react";

export default function SectionContainer({ sectionTitle, children }) {
  return (
    <Box>
      <Heading mb={[4, 8]}> {sectionTitle} </Heading>

      <Box> {children} </Box>
    </Box>
  );
}
