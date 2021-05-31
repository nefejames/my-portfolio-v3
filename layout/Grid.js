import { SimpleGrid } from "@chakra-ui/react";

export default function Grid({ children }) {
  return (
    <SimpleGrid columns={[1, 2]} spacing="10">
      {children}
    </SimpleGrid>
  );
}

Grid.defaultProps = {};
