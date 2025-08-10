import "./style.scss";

interface Props {
  id: string;
  name: string;
  type?: "text" | "search";
  placeholder?: string;
  img?: string;
  imgAlt?: string;
}

const Input = ({ id, name, type, placeholder, img, imgAlt }: Props) => {
  return (
    <div className="input-box">
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
