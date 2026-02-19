import { useRouteError } from "react-router";

const ErrorPage = () => {
  const error = useRouteError();

  return (
    <div>
      <h1>404 Error Page</h1>
      <h3>{error.message}</h3>
    </div>
  );
};

export default ErrorPage;
