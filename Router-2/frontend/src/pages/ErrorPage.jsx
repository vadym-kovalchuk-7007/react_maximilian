import { useRouteError } from "react-router-dom";
import MainNavigation from "../components/MainNavigation";
import PageContent from "./PageContent";

export const ErrorPage = () => {
  const error = useRouteError();
  console.log("err", error);
  return (
    <>
      <MainNavigation />
      <PageContent title="Error occurred">
        Status:{error.status} {error.data.message}
      </PageContent>
    </>
  );
};
