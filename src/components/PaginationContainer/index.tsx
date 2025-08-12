import { useEffect, useState } from "react";
import ChevronLeft from "../../assets/chevron-left.svg?react";
import ChevronRight from "../../assets/chevron-right.svg?react";
import PaginationButton from "../PaginationButton";
import "./style.scss";

interface Props {
  totalPages: number;
  currentPage: number;
}

const PaginationContainer = ({ totalPages, currentPage }: Props) => {
  const [maxPages, setMaxPages] = useState(
    window.innerWidth > 700
      ? totalPages > 5
        ? 4
        : 5
      : window.innerWidth > 410
        ? 3
        : 2
  );

  const handleResize = () => {
    if (window.innerWidth > 700) {
      setMaxPages(totalPages > 5 ? 4 : 5);
    } else if (window.innerWidth > 410) {
      setMaxPages(3);
    } else {
      setMaxPages(2);
    }
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="pagination-container">
      <PaginationButton svgIcon={<ChevronLeft />} disabled={currentPage == 1} />
      {Array.from({
        length: totalPages > maxPages ? maxPages : totalPages,
      }).map((_, index) => {
        return (
          <PaginationButton
            key={index}
            text={index + 1}
            disabled={index + 1 == currentPage}
          />
        );
      })}
      {maxPages < totalPages && <PaginationButton text="..." />}
      <PaginationButton
        svgIcon={<ChevronRight />}
        disabled={currentPage == totalPages}
      />
    </div>
  );
};

export default PaginationContainer;
