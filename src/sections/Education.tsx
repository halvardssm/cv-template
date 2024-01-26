import { FC } from "react";
import Section from "../components/Section";

type EducationLine = {
  instiution: string;
  location: string;
  description: string;
};

const lines: EducationLine[] = [
  {
    instiution: "Some University",
    location: "Europe",
    description: "Computer Science",
  },
];

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
      {lines.map((line) => (
        <EducationElement {...line} />
      ))}
    </Section>
  );
}

export default Education;
