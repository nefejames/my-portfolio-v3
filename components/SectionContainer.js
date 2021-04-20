import { Box, Heading } from "@chakra-ui/react";

export default function SectionContainer({ sectionTitle, children }) {
  return (
    <Box>
      <Heading> {sectionTitle} </Heading>

      <Box> {children} </Box>
    </Box>
  );
}
