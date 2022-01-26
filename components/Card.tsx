import { Box } from "@chakra-ui/react";

interface CardProps {
  CardForBlog?: boolean;
  children: JSX.Element;
}

export default function Card({ children, CardForBlog = false }: CardProps) {
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
