import type { CSSProperties } from "react";
import "./style.scss";

interface Props {
  id: string;
  name: string;
  type?: "text" | "search";
  placeholder?: string;
  img?: string;
  imgAlt?: string;
  style?: CSSProperties;
}

const Input = ({ id, name, type, placeholder, img, imgAlt, style }: Props) => {
  return (
    <div className="input-box" style={style}>
      <input
        type={type ? type : "text"}
        name={name}
        id={id}
        placeholder={placeholder}
      />
      {img && <img src={img} alt={imgAlt} />}
    </div>
  );
};

export default Input;
