import React, { type CSSProperties } from "react";
import "./style.scss";

interface Props {
  id: string;
  name: string;
  type?: "text" | "search";
  placeholder?: string;
  img?: string;
  imgAlt?: string;
  style?: CSSProperties;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input = ({
  id,
  name,
  type,
  placeholder,
  img,
  imgAlt,
  style,
  onChange,
}: Props) => {
  return (
    <div className="input-box" style={style}>
      <input
        type={type ? type : "text"}
        name={name}
        id={id}
        placeholder={placeholder}
        onChange={onChange}
      />
      {img && <img src={img} alt={imgAlt} />}
    </div>
  );
};

export default Input;
