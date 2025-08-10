import { createFileRoute } from "@tanstack/react-router";
import SearchBarContainer from "../components/SearchBarContainer";

const Index = () => {
  return (
    <>
      <SearchBarContainer />
    </>
  );
};

export const Route = createFileRoute("/")({
  component: Index,
});
