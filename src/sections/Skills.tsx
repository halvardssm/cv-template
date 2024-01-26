import { FC } from "react";
import Section from "../components/Section";
import { skillsSections } from "../config";

type SkillSection = {
  /**
   * Section title, e.g. "Programming languages"
   */
  title: string;
  /**
   * List of skills
   */
  skills: {
    /**
     * Skill title, e.g. "Frontend"
     */
    title?: string;
    /**
     * Skill elements, e.g. ["React", "Vue", "Angular"]
     */
    elements: string[];
  }[];
};

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
      {skillsSections.map((section) => (
        <SkillSection {...section} />
      ))}
    </Section>
  );
}

export default Skills;
