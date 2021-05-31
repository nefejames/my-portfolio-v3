import { SimpleGrid } from "@chakra-ui/react";

export default function Grid({ children }) {
  return (
    <SimpleGrid minChildWidth={["400px"]} columns={2} spacing="10">
      {children}
    </SimpleGrid>
  );
}

Grid.defaultProps = {};
