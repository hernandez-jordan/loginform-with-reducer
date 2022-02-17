import "./App.css";
import routes from "./routes/router";

import { BrowserRouter as Router, useRoutes } from "react-router-dom";

const App = () => {
  const content = useRoutes(routes);
  return content;
};

const AppWrapper = () => {
  return (
    <Router>
      <App />
    </Router>
  );
};

export default AppWrapper;
