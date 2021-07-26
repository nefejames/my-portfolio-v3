import { Grid } from "../layout/index";
import { ProjectCard, SectionContainer } from "../components/index";

const projectsData = [
  {
    id: 1,
    title: "Contentful Recipe App",
    details: "A recipe app built with Contentful CMS and Next.js",
    tags: ["Next.js", "styled-components", "CMS"],
    year: "2021",
    githubUrl: "https://github.com/nefejames/contentful-recipe-app",
    liveUrl: "https://contentful-recipe-app.vercel.app/",
  },
  {
    id: 2,
    title: "DivifyCore (WIP)",
    details: "A website built with Svelte and GSAP. Why? Because Svelte!! ",
    tags: ["Svelte", "GSAP"],
    year: "2021",
    githubUrl: "https://github.com/nefejames/divify-core",
    liveUrl: "https://stoic-carson-8ed644.netlify.app/",
  },
  {
    id: 3,
    title: "Spaces Website",
    details: "A practice site for a digital company, Spaces.",
    tags: ["Next.js", "styled-components"],
    year: "2021",
    githubUrl: "https://github.com/nefejames/spaces-website",
    liveUrl: "https://spaces-website.vercel.app/",
  },
  {
    id: 4,
    title: "Acorn & Mustard (WIP)",
    details: "A website for a legal agency in Lagos, Nigeria.",
    tags: ["Next.js", "styled-components"],
    year: "2021",
    liveUrl: "https://acorn-and-mustard.vercel.app/",
  },
  {
    id: 5,
    title: "ShipQuik Logisitcs",
    details: "A demo website for a logistics company based in Lagos.",
    tags: ["css", "js"],
    year: "2020",
    githubUrl: "https://github.com/nefejames/shiq-quik",
    liveUrl: "https://daddynefs-shipquik.netlify.app/",
  },
  {
    id: 6,
    title: "Recipe App",
    details:
      "An application to search for different recipes built using the Edamam API. ",
    tags: ["css", "react"],
    year: "2020",
    githubUrl: "https://github.com/nefejames/react-recipe-app",
    liveUrl: "https://daddynefs-recipe.netlify.app/",
  },
  {
    id: 7,
    title: "Image Search App",
    details:
      "An application to search through different pictures built using the Pixalbay API.",
    tags: ["sass", "js"],
    year: "2020",
    githubUrl: "https://github.com/nefejames/image-search-app",
    liveUrl: "https://daddynefs-image-search.netlify.app/",
  },
  {
    id: 8,
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
