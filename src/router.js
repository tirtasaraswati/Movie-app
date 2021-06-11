import React, { lazy, Suspense } from "react";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";

import { PUBLIC_ROUTE } from "./route.constants.js";
import Loader from "../src/components/loader";
import { useSelector } from "react-redux";
import { Spin } from "antd";

const publicRoutes = [
  {
    path: PUBLIC_ROUTE.HOME,
    exact: true,
    component: lazy(() => import("../src/containers/index")),
  },
  {
    path: PUBLIC_ROUTE.DETAIL_MOVIE,
    exact: true,
    component: lazy(() => import("../src/containers/detail")),
  },
  {
    path: PUBLIC_ROUTE.ANAGRAM,
    exact: true,
    component: lazy(() => import("../src/containers/anagram")),
  },
];

export default function Routes() {
  let state = useSelector((state) => state.App);
  return (
    <Suspense fallback={<Loader />}>
      <Router>
        <Spin size="large" spinning={state.isLoading}>
          <Switch>
            {publicRoutes.map((route, index) => (
              <Route key={index} path={route.path} exact={route.exact}>
                <route.component />
              </Route>
            ))}
          </Switch>
        </Spin>
      </Router>
    </Suspense>
  );
}
