import { Box } from "@chakra-ui/react";

export default function Card({ children, CardForBlog }) {
  return (
    <Box
      borderRadius="md"
      background="#38383d"
      boxShadow="md"
      _hover={CardForBlog && { background: "#42414d" }}
    >
      {children}
    </Box>
  );
}
