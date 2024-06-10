import { Link } from "react-router-dom";

function HomePage() {
  /* Programmatic navigate
    import {useNavigate} from "react-dom-router";
    const navigate = useNavigate();
    const navigateProductsHandler = () => {navigate("/products")};

    button onClick={navigateProductsHandler}
  */

  return (
    <>
      <h1>Home Page element</h1>
      <p>
        Go to <Link to="/products">the list of products</Link>
      </p>
    </>
  );
}

export { HomePage };
