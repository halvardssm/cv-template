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
    <span style={{ whiteSpace: "nowrap" }}>
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
        justifyContent: "space-between",
        rowGap: "0.3em",
        alignItems: "baseline",
        flexWrap: "wrap",
        marginBottom: "1em",
      }}
    >
      <h1 style={{ whiteSpace: "nowrap", margin: 0 }}>{name}</h1>
      <div
        style={{
          display: "flex",
          columnGap: "1em",
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
