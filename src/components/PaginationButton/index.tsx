import type { JSX } from "react";
import "./style.scss";

interface Props {
  text?: string | number;
  svgIcon?: JSX.Element;
  disabled?: boolean;
}

const PaginationButton = ({ text, svgIcon, disabled, ...props }: Props) => {
  return (
    <button className="pagination-button " disabled={disabled} {...props}>
      {text && text}
      {!text && svgIcon}
    </button>
  );
};

export default PaginationButton;
