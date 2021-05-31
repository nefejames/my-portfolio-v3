import Image from "next/image";
import {
  Box,
  Heading,
  Text,
  Badge,
  Stack,
  Flex,
  Spacer,
  Link,
} from "@chakra-ui/react";
import { ExternalLinkIcon } from "@chakra-ui/icons";
import { Card } from "./index";

export default function ProjectCard({
  title,
  details,
  tags,
  year,
  githubUrl,
  liveUrl,
}) {
  return (
    <Card>
      {/* <Image
        width={200}
        height={120}
        layout="responsive"
        src="https://source.unsplash.com/random/200x150"
      /> */}

      <Box p={5}>
        <Flex>
          <Heading as="h3" fontSize="25px" pb={2} color="#00DDFF">
            {title}
          </Heading>

          <Spacer />

          <Text as="span" fontWeight="medium">
            {year}
          </Text>
        </Flex>
        <Text fontSize={["lg", "xl"]}>{details}</Text>

        <Stack direction="row" mt={4} spacing={4}>
          {tags.map((tag, index) => (
            <Badge fontSize="md" key={index}>
              {tag}
            </Badge>
          ))}
        </Stack>

        <Stack spacing={["5", "7"]} direction="row" mt={6}>
          <Link href={githubUrl} isExternal color="#00DDFF">
            Github <ExternalLinkIcon />
          </Link>
          <Link href={liveUrl} isExternal color="#00DDFF">
            Live <ExternalLinkIcon />
          </Link>
        </Stack>
      </Box>
    </Card>
  );
}
