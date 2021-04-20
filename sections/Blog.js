import { List, ListItem, ListIcon, Heading, Box } from "@chakra-ui/react";
import { MdCheckCircle } from "react-icons/md";
import { Grid } from "../layout/index";
import { BlogCard, SectionContainer, CustomLink } from "../components/index";

export default function Blog() {
  return (
    <SectionContainer sectionTitle="My Blog">
      <Grid>
        <BlogCard />
        <BlogCard />
        <BlogCard />
      </Grid>

      {/* <Box mt={10}>
        <Heading as="h3" fontSize={["lg", "xl"]} mb={2}>
          My other writings
        </Heading>

        <List spacing={3}>
          <ListItem>
            <CustomLink url="http://www.google.com">
              <ListIcon as={MdCheckCircle} color="green.500" />
              Framer Motion, LogRocket
            </CustomLink>
          </ListItem>

          <ListItem>
            <CustomLink url="http://www.google.com">
              <ListIcon as={MdCheckCircle} color="green.500" />
              Dark Mode, LogRocket
            </CustomLink>
          </ListItem>

          <ListItem>
            <CustomLink url="http://www.logrocket.com">
              <ListIcon as={MdCheckCircle} color="green.500" />
              Quidem, ipsam illum quis sed voluptatum quae eum fugit earum
            </CustomLink>
          </ListItem>
        </List>
      </Box> */}
    </SectionContainer>
  );
}
