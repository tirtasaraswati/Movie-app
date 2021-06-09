import React, { lazy, Suspense } from "react";
import {
  Route,
  Redirect,
  BrowserRouter as Router,
  Switch,
} from "react-router-dom";

import { PUBLIC_ROUTE } from "./route.constants.js";
import Loader from "../src/components/loader";
import { useSelector } from "react-redux";
import { Spin, Space } from "antd";

// import { ToastContainer } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

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
];

export default function Routes() {
  let state = useSelector((state) => state.App);
  return (
    <Suspense fallback={<Loader />}>
      <Router>
        <Spin size="large" spinning={state.isLoading}>
          {/* <ToastContainer /> */}
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
