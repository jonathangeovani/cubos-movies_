import { createFileRoute } from "@tanstack/react-router";
import SearchBarContainer from "../components/SearchBarContainer";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <>
      <SearchBarContainer />
    </>
  );
}
