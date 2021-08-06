import { Grid } from "../layout/index";
import { ProjectCard, SectionContainer } from "../components/index";
import projectsData from "../projectsData";
export default function Projects() {
  return (
    <SectionContainer sectionTitle="My Projects">
      <Grid>
        {projectsData.map((project) => (
          <ProjectCard key={project.id} {...project} />
        ))}
      </Grid>
    </SectionContainer>
  );
}
