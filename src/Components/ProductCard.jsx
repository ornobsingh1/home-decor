const ProductCard = ({ product }) => {
  const { name, image, price, category } = product;
  return (
    <div className="card bg-base-200 shadow-lg border border-gray-500 hover:scale-105 transition ease-in-out duration-100">
      <figure className="h-56 overflow-hidden">
        <img
          className="w-full h-full object-cover"
          src={image}
          alt=""
        />
      </figure>
      <div className="p-2">
        <h2 className="card-title">{name}</h2>
        <p className="text-sm text-gray-800">Price: ${price}</p>
        <p className="text-sm text-gray-800">Category: {category}</p>
        <div className="card-actions justify-end my-2">
          <button className="btn btn-primary">Buy Now</button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
