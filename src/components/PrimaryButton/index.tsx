import type { CSSProperties } from "react";
import "./style.scss";

interface Props {
  content: string;
  imgAlt?: string;
  disabled?: boolean;
  style?: CSSProperties;
}

const PrimaryButton = ({ content, imgAlt, disabled, style }: Props) => {
  return (
    <button className="primary-button" disabled={disabled} style={style}>
      {imgAlt ? <img src={content} alt={imgAlt} /> : content}
    </button>
  );
};

export default PrimaryButton;
