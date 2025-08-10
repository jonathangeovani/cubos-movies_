import { createFileRoute } from "@tanstack/react-router";
import SearchBarContainer from "../components/SearchBarContainer";
import MoviesContainer from "../components/MoviesContainer";

const Index = () => {
  return (
    <>
      <SearchBarContainer />
      <MoviesContainer />
    </>
  );
};

export const Route = createFileRoute("/")({
  component: Index,
});
