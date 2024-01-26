import { FC } from "react";
import feather, { FeatherIconNames } from "feather-icons";

export interface EmojiProps {
  icon: FeatherIconNames;
}

const Emoji: FC<EmojiProps> = (props) => (
  <span
    style={{
      display: "inline-block",
      width: "auto",
      height: "1em",
      verticalAlign: "-0.125em",
      marginRight: "0.2em",
    }}
    role="img"
    dangerouslySetInnerHTML={{
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      __html: feather.icons[props.icon].toSvg({ height: "1em", width: "1em" }),
    }}
  />
);

export default Emoji;
