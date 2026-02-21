import { useEffect, useState } from "react";
import useProducts from "../Hooks/useProducts";
import { getStoredProduct } from "../utility/addToDB";

const WishList = () => {
  const [wishlist, setWishlist] = useState([]);
  const [sortOrder, setSortOrder] = useState("none");

  const { products } = useProducts();
  useEffect(() => {
    // jodi local storage a full object thake evabe easyly data access korte parbo...
    // const savedList = JSON.parse(localStorage.getItem("wishlist")) || [];
    // setWishlist(savedList);
    if (products.length === 0) return;

    const storedProductData = getStoredProduct();
    const convertedStoredProducts = storedProductData.map((id) => parseInt(id));
    const myWishList = products.filter((product) =>
      convertedStoredProducts.includes(product.id),
    );
    setWishlist(myWishList);
  }, [products]);

  const sortedItem = (() => {
    if (sortOrder === "price-asc") {
      return [...wishlist].sort((a, b) => a.price - b.price);
    } else if (sortOrder === "price-desc") {
      return [...wishlist].sort((a, b) => b.price - a.price);
    } else {
      return wishlist;
    }
  })();
  return (
    <div>
      <div className="flex justify-between items-center mb-4 mt-2">
        <h1 className="text-2xl font-semibold">
          WishList{" "}
          <span className="text-sm text-gray-600">({wishlist.length})</span>
        </h1>

        {/* sort */}
        <label className="form-control">
          <select
            className="select select-bordered"
            value={sortOrder}
            onChange={(e) => setSortOrder(e.target.value)}
          >
            <option value="none">Sort By Price</option>
            <option value="price-asc">Low-&gt;High</option>
            <option value="price-desc">High-&gt;Low</option>
          </select>
        </label>
      </div>

      <div className="space-y-3 mt-4">
        {sortedItem.map((p) => (
          <div key={p.id} className="card card-side bg-base-100 shadow border">
            <figure>
              <img
                className="w-40 h-28 object-cover"
                src={p.image}
                alt={p.name}
              />
            </figure>
            <div className="card-body">
              <h3 className="card-title">{p.name}</h3>
              <p className="text-base-content/70">{p.category}</p>
            </div>
            <div className="pr-4 flex items-center gap-3">
              <div className="font-semibold">${p.price}</div>
              <button className="btn btn-outline">Remove</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WishList;
