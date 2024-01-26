import { FC } from "react";
import Section from "../components/Section";

type ExperienceLine = {
  positions: {
    /**
     * Job title, e.g. "Software Engineer"
     */
    title: string;
    /**
     * Job period, e.g. 2020-2021
     */
    period: string;
    /**
     * Job description, each string is a new bullet point
     */
    description: string[];
    /**
     * Job location, e.g. "Oslo, Norway"
     */
    location: string;
  }[];
  /**
   * Company name, e.g. "GitHub"
   */
  company: string;
};

const lines: ExperienceLine[] = [
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
        location: "Berlin, Germany",
        description: ["Learned coding"],
      },
    ],
  },
];

const ExperienceElement: FC<ExperienceLine> = (props) => {
  return (
    <div
      style={{
        borderLeft: "2px dotted black",
        paddingLeft: "0.7em",
      }}
    >
      <div>{props.company}</div>
      <div
        style={{ display: "flex", flexDirection: "column", rowGap: "0.5em" }}
      >
        {props.positions.map((position) => (
          <div>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <div>
                <b>{position.title}</b>
              </div>
              <div>
                {position.location} | {position.period}
              </div>
            </div>
            <ul style={{ margin: 0, paddingLeft: "11px" }}>
              {position.description.map((line) => (
                <li>{line}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

function Experience() {
  return (
    <Section
      title="Experience"
      style={{ display: "flex", flexDirection: "column", gap: "0.7em" }}
    >
      {lines.map((line) => (
        <ExperienceElement {...line} />
      ))}
    </Section>
  );
}

export default Experience;
