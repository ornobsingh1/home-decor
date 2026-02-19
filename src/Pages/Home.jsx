import { useLoaderData } from "react-router";
import ProductCard from "../Components/ProductCard";

const Home = () => {
  const products = useLoaderData()
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 my-4">
      {
        products.map(product => <ProductCard key={product.id} product={product} />)
      }
    </div>
  );
};

export default Home;
