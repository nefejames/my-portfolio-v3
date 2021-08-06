import { v4 as uuidv4 } from "uuid";

const projectsData = [
  {
    id: uuidv4(),
    title: "Acorn & Mustard (WIP)",
    details: "A website for a legal agency in Lagos, Nigeria.",
    tags: ["Next.js", "styled-components", "Contentful CMS"],
    year: "2021",
    liveUrl: "https://www.acornandmustard.com/",
  },
  {
    id: uuidv4(),
    title: "CheckVendoor",
    details:
      "Vendoor is where you go to verify vendors before you buy. Vendoor is a transparent way for customers and companies to engage and share experiences.",
    tags: ["Next.js", "styled-components"],
    year: "2021",

    liveUrl: "https://www.checkvendoor.com/",
  },
  {
    id: uuidv4(),
    title: "Cardilas",
    details: "Cardilas makes buying cars easy for Nigerians",
    tags: ["Next.js", "styled-components"],
    year: "2021",
    liveUrl: "https://ceedcap-cardilas.vercel.app/",
  },
  {
    id: uuidv4(),
    title: "Contentful Recipe App",
    details: "A recipe app built with Contentful CMS and Next.js",
    tags: ["Next.js", "styled-components", "CMS"],
    year: "2021",
    githubUrl: "https://github.com/nefejames/contentful-recipe-app",
    liveUrl: "https://contentful-recipe-app.vercel.app/",
  },
  {
    id: uuidv4(),
    title: "DivifyCore (WIP)",
    details: "A website built with Svelte and GSAP. Why? Because Svelte!! ",
    tags: ["Svelte", "GSAP"],
    year: "2021",
    githubUrl: "https://github.com/nefejames/divify-core",
    liveUrl: "https://stoic-carson-8ed644.netlify.app/",
  },
  {
    id: uuidv4(),
    title: "Spaces Website",
    details: "A practice site for a digital company, Spaces.",
    tags: ["Next.js", "styled-components"],
    year: "2021",
    githubUrl: "https://github.com/nefejames/spaces-website",
    liveUrl: "https://spaces-website.vercel.app/",
  },

  {
    id: uuidv4(),
    title: "ShipQuik Logisitcs",
    details: "A demo website for a logistics company based in Lagos.",
    tags: ["css", "js"],
    year: "2020",
    githubUrl: "https://github.com/nefejames/shiq-quik",
    liveUrl: "https://daddynefs-shipquik.netlify.app/",
  },
  {
    id: uuidv4(),
    title: "Recipe App",
    details:
      "An application to search for different recipes built using the Edamam API. ",
    tags: ["css", "react"],
    year: "2020",
    githubUrl: "https://github.com/nefejames/react-recipe-app",
    liveUrl: "https://daddynefs-recipe.netlify.app/",
  },
  {
    id: uuidv4(),
    title: "Image Search App",
    details:
      "An application to search through different pictures built using the Pixalbay API.",
    tags: ["sass", "js"],
    year: "2020",
    githubUrl: "https://github.com/nefejames/image-search-app",
    liveUrl: "https://daddynefs-image-search.netlify.app/",
  },
  {
    id: uuidv4(),
    title: "Geo-search app",
    details: "A weather data built using Google Maps and Autocomplete APIs. ",
    tags: ["css", "js"],
    year: "2019",
    githubUrl: "https://github.com/nefejames/DevC-GeoSearch",
    liveUrl: "https://nefejames.github.io/DevC-GeoSearch/",
  },
];

export default projectsData;
