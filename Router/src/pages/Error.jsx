import { MainNav } from "../components";

export function ErrorPage() {
  return (
    <>
      <MainNav />{" "}
      <main>
        <h1>An error occurred!</h1>
        <p>Page not found!</p>
      </main>
    </>
  );
}
