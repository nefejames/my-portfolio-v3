import { BlogCard, SectionContainer } from "../components/index";
import { Grid } from "../layout/index";
export default function Blog() {
  return (
    <SectionContainer sectionTitle="My Blog">
      <Grid>
        <BlogCard />
        <BlogCard />
        <BlogCard />
      </Grid>
    </SectionContainer>
  );
}
