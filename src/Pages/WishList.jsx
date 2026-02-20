import { useEffect, useState } from "react";
import useProducts from "../Hooks/useProducts";
import { getStoredProduct } from "../utility/addToDB";
import { X } from "lucide-react";

const WishList = () => {
  const [wishlist, setWishlist] = useState([]);
  const { products } = useProducts();

  console.log(products);

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
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 my-4">
        {wishlist.map((product) => (
          <div
            key={product.id}
            className="border rounded-lg shadow hover:shadow-lg transition duration-200 overflow-hidden"
          >
            <div className="relative h-48">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover"
              />
              <button className="absolute top-2 right-2 text-white rounded bg-gray-700 cursor-pointer">
                <X />
              </button>
            </div>
            <div className="p-3">
              <h2 className="font-semibold text-lg">{product.name}</h2>
              <p className="text-sm text-gray-600">
                Category: {product.category}
              </p>
              <p className="text-sm text-gray-800 font-medium mt-1">
                Price: ${product.price}
              </p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default WishList;
