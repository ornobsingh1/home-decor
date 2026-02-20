import { useParams } from "react-router";
import useProducts from "../Hooks/useProducts";

const ProductDetails = () => {
  const { id } = useParams();
  const { products, loading } = useProducts();

  if (loading) return <p>loading...</p>;
  const product = products.find((p) => p.id === Number(id));

  if (!product) {
    return <p className="text-center">Product not found</p>;
  }

  const { name, image, category, price, description } = product;
  return (
    <div className="card bg-base-100 shadow-xl border border-base-300 hover:shadow-2xl transition-all duration-300 group my-4">
      {/* Image */}
      <figure className="relative h-80 overflow-hidden rounded-t-xl">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />

        {/* Category Badge */}
        <span className="absolute top-3 left-3 badge bg-white font-semibold p-3">
          {category}
        </span>
      </figure>

      {/* Content */}
      <div className="card-body p-4">
        <h2 className="card-title text-lg font-semibold">{name}</h2>
        <p className="text-sm text-gray-500 line-clamp-2">{description}</p>

        {/* Price + Action */}
        <div className="flex items-center justify-between mt-4">
          <p className="text-xl font-bold">${price}</p>
          <button className="btn btn-sm btn-outline gap-2">
            <span className="text-base">♡</span>
            Wishlist
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
