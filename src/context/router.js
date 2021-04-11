import { Redirect, Route, Router, Switch } from "react-router-dom";
import { createBrowserHistory } from "history";

import { useGlobalState } from "../context";
import { Layout } from "../components/App/AppLayout";
import HomeComponent from "../components/App/Home";

const history = createBrowserHistory();


export const RouterProvider = ({ children }) => {
  const { actions: { setPreviousPath } } = useGlobalState();

  history.listen(({ pathname }) => {
    setPreviousPath(pathname);
  });

  return <Router history={history}>{children}</Router>;
};

export const AppRoutes = () => (
  <Layout>
    <Switch>
      <Route key="home" path={HomePath} component={HomeComponent} exact />
      {/* Put your own routes here... */}
      <Redirect to={HomePath} />
    </Switch>
  </Layout>
);

export const HomePath = "/"
export const AllPaths = [
  HomePath,
  {/* Export your own paths here... */}
];
