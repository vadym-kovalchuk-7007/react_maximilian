import MainNavigation from "../components/MainNavigation.js";

import { Outlet, useNavigation } from "react-router-dom";

export const Root = () => {
  const navigation = useNavigation();
  return (
    <>
      <MainNavigation />
      <main>
        {navigation.state === "loading" && <p>Loading...</p>}
        <Outlet />
      </main>
    </>
  );
};
