import { Grid } from "../layout/index";
import { ProjectCard, SectionContainer } from "../components/index";

export default function Projects() {
  return (
    <SectionContainer sectionTitle="My Projects">
      <Grid>
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
      </Grid>
    </SectionContainer>
  );
}
