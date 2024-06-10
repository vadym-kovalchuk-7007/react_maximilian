import { Link, useParams } from "react-router-dom";

export function Product() {
  const params = useParams();
  return (
    <>
      <h1>Product Detail {params.productId}</h1>
      <Link to=".." relative="path">
        {/*remove one segment*/}
        Back
      </Link>
    </>
  );
}
