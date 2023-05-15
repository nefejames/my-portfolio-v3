import { Box, Heading, Text } from "@chakra-ui/react";
import { SectionContainer } from "@components/index";

export default function WritingSkills() {
  return (
    <SectionContainer sectionTitle="Writing Skills">
      <Box>
        {/* <Heading as="h2" fontSize="35px" mb={[4, 8]}>
            Skills
          </Heading> */}
        <Box>
          <Text>
            Technical Writing, Content Writing, Content Marketing, SEO,
            Research, Social Media Marketing, Email Marketing, Newsletter
            Curation, Gated Content Development, Google Workspace Suite, Google
            Analytics, SEMRush, HubSpot, Frase, Clearscope, etc.
          </Text>
        </Box>
      </Box>
    </SectionContainer>
  );
}
