import { FeatherIconNames } from "feather-icons";
import Emoji from "../components/Emoji";

function IconElement(props: {
  icon: FeatherIconNames;
  text: string;
  link?: string;
}) {
  const content = props.link ? (
    <a href={props.link} target="_blank" rel="noreferrer">
      {props.text}
    </a>
  ) : (
    props.text
  );
  return (
    <span style={{ display: "inline-block" }}>
      <Emoji icon={props.icon} />
      {content}
    </span>
  );
}

function Header() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "left",
        gap: "1.5em",
        alignItems: "flex-end",
      }}
    >
      <h1>Name</h1>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "1.5em",
          margin: "1.67em 0",
        }}
      >
        <IconElement icon="map-pin" text="Someplace, Europe" />
        <IconElement
          icon="globe"
          text="example.com"
          link="https://example.com"
        />
        <IconElement
          icon="mail"
          text="work@example.com"
          link="mailto:work@example.com"
        />
        <IconElement
          icon="linkedin"
          text="linkedin"
          link="https://www.linkedin.com/in"
        />
        <IconElement icon="github" text="github" link="https://github.com" />
      </div>
    </div>
  );
}

export default Header;
