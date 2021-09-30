import { Box, Heading, Text, Button } from "@chakra-ui/react";
import Link from "next/link";
import { Card } from "./index";

export default function BlogCard() {
  return (
    <Link href="https://www.google.com">
      <a>
        <Card CardForBlog>
          <Box p={5}>
            <Heading pb={2} color="#00DDFF">
              Blog Title
            </Heading>
            <Text fontSize={["lg", "xl"]}>
              A webshop with focus on storytelling and the high quality products
              created by Andersen-Andersen, a Danish work-wear clothing
              manufacturer.
            </Text>

            <Button mt="5" color="black" bg="#00DDFF" borderRadius="none">
              Read more
            </Button>
          </Box>
        </Card>
      </a>
    </Link>
  );
}
