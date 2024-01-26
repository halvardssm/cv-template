import { FC } from "react";
import Section from "../components/Section";

type SkillSection = {
  title: string;
  skills: {
    title?: string;
    elements: string[];
  }[];
};

const sections: SkillSection[] = [
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

const SkillSection: FC<SkillSection> = (props) => {
  return (
    <div style={{ marginBottom: "0.5em" }}>
      <h3>{props.title}</h3>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "0.2em" }}>
        {props.skills.map((skill) => (
          <div>
            {skill.title ? <i>{skill.title + ": "}</i> : ""}
            {skill.elements.join(" | ")}
          </div>
        ))}
      </div>
    </div>
  );
};

function Skills() {
  return (
    <Section title="Skills">
      {sections.map((section) => (
        <SkillSection {...section} />
      ))}
    </Section>
  );
}

export default Skills;
