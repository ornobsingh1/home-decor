import ProductCard from "../Components/ProductCard";
import useProducts from "../Hooks/useProducts";

const Products = () => {
  const { products } = useProducts();
  return (
    <div>
      <div className="flex justify-between items-center my-6">
        <h1 className="text-2xl font-semibold">All Products</h1>
        <button to="/products" className="btn btn-outline">
          Search
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 my-4">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Products;
