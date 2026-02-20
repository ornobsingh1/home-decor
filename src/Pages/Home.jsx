import { Link} from "react-router";
import ProductCard from "../Components/ProductCard";
import useProducts from "../Hooks/useProducts";

const Home = () => {
  const {products, loading, error} = useProducts()
  const featuredProducts = products.slice(0, 8);
  return (
    <div>
      <div className="flex justify-between items-center my-6">
        <h1 className="text-2xl font-semibold">Featured Products</h1>
        <Link to="/products" className="btn btn-outline">See All Products</Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 my-4">
        {featuredProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Home;
