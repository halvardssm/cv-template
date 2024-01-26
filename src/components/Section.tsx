import { FCC } from "../types";

type SectionProps = {
  title: string;
  style?: React.CSSProperties;
};

const Section: FCC<SectionProps> = (props) => {
  return (
    <div
      style={{
        marginBottom: "1rem",
      }}
    >
      <h2 style={{}}>{props.title}</h2>
      <hr />
      <div style={props.style}>{props.children}</div>
    </div>
  );
};

export default Section;
