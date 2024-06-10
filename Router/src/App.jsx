import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import { ErrorPage, HomePage, Product, Products, Root } from "./pages";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <HomePage /> }, // => { path: "", element: <HomePage /> },
      { path: "products", element: <Products /> },
      { path: "products/:productId", element: <Product /> },
    ],
  },
  {
    path: "k",
    element: (
      <>
        <p>KK</p>
        <Outlet />
      </>
    ),
    children: [
      { path: "", element: <p>PPK</p> },
      { path: "p", element: <Products /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
