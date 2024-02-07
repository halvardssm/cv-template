import { EducationLine } from "./sections/Education";
import { ExperienceLine } from "./sections/Experience";
import { HeaderElement } from "./sections/Header";
import { SkillSection } from "./sections/Skills";

export const name = "Name";

export const headerElements: HeaderElement[] = [
  {
    text: "Someplace, Europe",
    icon: "map-pin",
  },
  {
    text: "example.com",
    icon: "globe",
    link: "https://example.com",
  },
  {
    text: "work@example.com",
    icon: "mail",
    link: "mailto:work@example.com",
  },
  {
    text: "linkedin",
    icon: "linkedin",
    link: "https://www.linkedin.com/in",
  },
  {
    text: "github",
    icon: "github",
    link: "https://github.com",
  },
];

export const profileText = `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
tempor incididunt ut labore et dolore magna aliqua. Faucibus turpis in eu
mi bibendum. Purus in mollis nunc sed id semper. Diam ut venenatis tellus
in metus vulputate eu. Integer feugiat scelerisque varius morbi enim.
Posuere sollicitudin aliquam ultrices sagittis orci a scelerisque. Lectus
sit amet est placerat in egestas erat imperdiet sed. Dignissim diam quis
enim lobortis scelerisque fermentum dui. Accumsan lacus vel facilisis
volutpat. Amet cursus sit amet dictum. Enim lobortis scelerisque fermentum
dui faucibus in. Sollicitudin ac orci phasellus egestas tellus rutrum
tellus pellentesque. Justo eget magna fermentum iaculis. Quam viverra orci
sagittis eu volutpat. Aliquam id diam maecenas ultricies. Accumsan lacus
vel facilisis volutpat est velit egestas. Scelerisque in dictum non
consectetur a. Eget nullam non nisi est sit.`;

export const experienceLines: ExperienceLine[] = [
  {
    company: "Microsoft",
    positions: [
      {
        title: "Software Engineer",
        location: "Europe",
        period: "2022-present",
        description: ["Mentored interns"],
      },
    ],
  },
  {
    company: "GitHub",
    positions: [
      {
        title: "Software Engineer",
        period: "2021-2022",
        location: "Europe",
        description: ["Built web applications using React and TypeScript"],
      },
      {
        title: "Junior Software Engineer",
        period: "2020-2021",
        location: "Europe",
        description: ["Learned coding"],
      },
    ],
  },
];

export const educationLines: EducationLine[] = [
  {
    institution: "Some University",
    location: "Europe",
    description: "Computer Science",
  },
];

export const skillsSections: SkillSection[] = [
  {
    title: "JavaScript",
    skills: [
      {
        elements: ["TypeScript", "Node", "Deno"],
      },
    ],
  },
  {
    title: "Databases",
    skills: [
      {
        elements: ["PostgreSQL", "SQLite"],
      },
    ],
  },
  {
    title: "Other",
    skills: [
      {
        title: "Languages",
        elements: ["English"],
      },
    ],
  },
];
