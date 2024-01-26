import { FeatherIconNames } from "feather-icons";
import Emoji from "../components/Emoji";
import { headerElements, name } from "../config";

export type HeaderElement = {
  /**
   * Icon name from Feather Icons, e.g. "github"
   */
  icon: FeatherIconNames;
  /**
   * Text to display, e.g. "GitHub"
   */
  text: string;
  /**
   * Optional link, e.g. "https://github.com"
   */
  link?: string;
};

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
      <h1>{name}</h1>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "1.5em",
          margin: "1.67em 0",
        }}
      >
        {headerElements.map((element) => (
          <IconElement {...element} />
        ))}
      </div>
    </div>
  );
}

export default Header;
