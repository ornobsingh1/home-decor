import { useLoaderData } from "react-router";

const Home = () => {
  const products = useLoaderData()
  console.log(products)
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      {/* {
        products.map(product => )
      } */}
    </div>
  );
};

export default Home;
