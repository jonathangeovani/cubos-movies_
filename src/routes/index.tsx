import { createFileRoute } from "@tanstack/react-router";
import SearchBarContainer from "../components/SearchBarContainer";
import MoviesContainer from "../components/MoviesContainer";
import PaginationContainer from "../components/PaginationContainer";

const Index = () => {
  return (
    <>
      <SearchBarContainer />
      <MoviesContainer />
      <PaginationContainer currentPage={1} totalPages={5} />
    </>
  );
};

export const Route = createFileRoute("/")({
  component: Index,
});
