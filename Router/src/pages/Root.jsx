import { Outlet } from "react-router-dom";
import { MainNav } from "../components";

export function Root() {
  return (
    <>
      <MainNav />
      <main>
        <Outlet />
      </main>
    </>
  );
}
