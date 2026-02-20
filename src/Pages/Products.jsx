import { useState } from "react";
import ProductCard from "../Components/ProductCard";
import useProducts from "../Hooks/useProducts";

const Products = () => {
  const { products } = useProducts();
  const [search, setSearch] = useState("");
  const term = search.trim().toLocaleLowerCase();
  const searchedProducts = term
    ? products.filter((product) =>
        product.name.toLocaleLowerCase().includes(term),
      )
    : products;

  return (
    <div>
      <div className="flex justify-between items-center my-6">
        <h1 className="text-2xl font-semibold">
          All Products{" "}
          <span className="text-sm text-gray-500">({searchedProducts.length})</span>
        </h1>

        <div className="join">
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            type="search"
            className="input join-item"
            placeholder="Search Products"
          />
          {/* <button className="btn join-item rounded-r-full btn-primary">Search</button> */}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 my-4">
        {searchedProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Products;
