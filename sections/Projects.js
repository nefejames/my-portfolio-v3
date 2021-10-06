import { Grid } from "@layout/index";
import { ProjectCard, SectionContainer } from "@components/index";
import projectsData from "@root/projectsData";
export default function Projects() {
  return (
    <SectionContainer sectionTitle="My Projects">
      <Grid>
        {projectsData.map((project, i) => (
          <ProjectCard key={i} {...project} />
        ))}
      </Grid>
    </SectionContainer>
  );
}
