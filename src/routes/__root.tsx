import { createRootRoute, Outlet } from "@tanstack/react-router";
import Header from "../components/Header";
import "../_main.scss";

export const Route = createRootRoute({
  component: () => {
    return (
      <>
        <Header />
        <main>
          <Outlet />
        </main>
      </>
    );
  },
});
