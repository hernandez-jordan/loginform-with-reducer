import { Suspense, lazy, LazyExoticComponent } from "react";
import Dashboard from "../component/Dashboard";
import SuspenseLoader from "../component/SuspenseLoader";

const Loader =
  (Component: LazyExoticComponent<() => JSX.Element>) => (props: {}) => {
    return (
      <Suspense fallback={<SuspenseLoader />}>
        <Component {...props} />
      </Suspense>
    );
  };

//login
const Login = Loader(lazy(() => import("../component/LoginForm")));

const routes = [
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
  },
  {
    path: "/public",
    element: <h1>public page</h1>,
  },
  {
    path: "/*",
    element: <h1>error page</h1>,
  },
];

export default routes;
