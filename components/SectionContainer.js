import { Box, Heading } from "@chakra-ui/react";

export default function SectionContainer({ sectionTitle, children }) {
  return (
    <Box>
      <Heading as="h2" fontSize="35px" mb={[4, 6]}>
        {" "}
        {sectionTitle}{" "}
      </Heading>

      <Box> {children} </Box>
    </Box>
  );
}
