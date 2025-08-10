import type { CSSProperties } from "react";
import "./style.scss";

interface Props {
  content: string;
  imgAlt?: string;
  disabled?: boolean;
  style?: CSSProperties;
}

const SecondaryButton = ({ content, imgAlt, disabled, style }: Props) => {
  return (
    <button className="secondary-button" disabled={disabled} style={style}>
      {imgAlt ? <img src={content} alt={imgAlt} /> : content}
    </button>
  );
};

export default SecondaryButton;
