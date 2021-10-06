import { Box, Heading, Text } from "@chakra-ui/react";
import { SectionContainer } from "@components/index";

export default function Skills() {
  return (
    <SectionContainer sectionTitle="Skills">
      <Box>
        {/* <Heading as="h2" fontSize="35px" mb={[4, 8]}>
            Skills
          </Heading> */}
        <Box>
          <Text fontSize={["lg", "xl"]}>
            HTML, CSS, SASS, JavaScript, Git, React, Redux, Svelte, Chakra UI,
            Material UI, Firebase, APIs (GraphQL and REST)
          </Text>
        </Box>
      </Box>
    </SectionContainer>
  );
}
