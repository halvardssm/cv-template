import { FCC } from "../types";

type SectionProps = {
  title: string;
  style?: React.CSSProperties;
};

const Section: FCC<SectionProps> = (props) => {
  return (
    <div
      style={{
        marginBottom: "1em",
      }}
    >
      <h2 style={{}}>{props.title}</h2>
      <hr style={{ margin: "4px 0" }} />
      <div style={props.style}>{props.children}</div>
    </div>
  );
};

export default Section;
