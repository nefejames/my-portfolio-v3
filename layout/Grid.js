import { SimpleGrid } from "@chakra-ui/react";

export default function Grid({ children }) {
  return (
    <SimpleGrid
      minChildWidth={["300px", "300px", "300px", "120px"]}
      columns={3}
      spacing="10"
    >
      {children}
    </SimpleGrid>
  );
}
