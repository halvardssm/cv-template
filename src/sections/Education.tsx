import { FC } from "react";
import Section from "../components/Section";
import { educationLines } from "../config";

export type EducationLine = {
  /**
   * Institution name, e.g. "University of Education"
   */
  instiution: string;
  /**
   * Institution location, e.g. "Oslo, Norway"
   */
  location: string;
  /**
   * Institution description, e.g. "Computer science"
   */
  description: string;
};

const EducationElement: FC<EducationLine> = (props) => {
  return (
    <div>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <div>
          <b>{props.instiution}</b>
        </div>
        <div>{props.location}</div>
      </div>
      <p style={{ margin: 0 }}>{props.description}</p>
    </div>
  );
};

function Education() {
  return (
    <Section
      title="Education"
      style={{ display: "flex", flexDirection: "column", gap: "0.5em" }}
    >
      {educationLines.map((line) => (
        <EducationElement {...line} />
      ))}
    </Section>
  );
}

export default Education;
