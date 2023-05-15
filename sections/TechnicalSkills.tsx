import { Box, Heading, Text } from "@chakra-ui/react";
import { SectionContainer } from "@components/index";

export default function TechnicalSkills() {
  return (
    <SectionContainer sectionTitle="Technical Skills">
      <Box>
        {/* <Heading as="h2" fontSize="35px" mb={[4, 8]}>
            Skills
          </Heading> */}
        <Box>
          <Text>
            HTML, CSS, SASS, JavaScript, Git, React, Svelte, Angular, Chakra UI,
            Material UI, Firebase, APIs (GraphQL and REST).
          </Text>
        </Box>
      </Box>
    </SectionContainer>
  );
}
