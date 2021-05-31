import { Grid } from "../layout/index";
import { ProjectCard, SectionContainer } from "../components/index";

const projectsData = [
  {
    id: 1,
    title: "ShipQuik Logisitcs",
    details: "A demo website for a logistics company based in Lagos.",
    tags: ["css", "js"],
    year: "2020",
    githubUrl: "https://github.com/nefejames/shiq-quik",
    liveUrl: "https://daddynefs-shipquik.netlify.app/",
  },
  {
    id: 2,
    title: "Recipe App",
    details:
      "An application to search for different recipes built using the Edamam API. ",
    tags: ["css", "react"],
    year: "2020",
    githubUrl: "https://github.com/nefejames/react-recipe-app",
    liveUrl: "https://daddynefs-recipe.netlify.app/",
  },
  {
    id: 3,
    title: "Image Search App",
    details:
      "An application to search through different pictures built using the Pixalbay API.",
    tags: ["sass", "js"],
    year: "2020",
    githubUrl: "https://github.com/nefejames/image-search-app",
    liveUrl: "https://daddynefs-image-search.netlify.app/",
  },
  {
    id: 4,
    title: "Geo-search app",
    details: "A weather data built using Google Maps and Autocomplete APIs. ",
    tags: ["css", "js"],
    year: "2019",
    githubUrl: "https://github.com/nefejames/DevC-GeoSearch",
    liveUrl: "https://nefejames.github.io/DevC-GeoSearch/",
  },
];

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
