import React from "react";
import { Redirect, Route } from "react-router-dom";

function ProtectedRoute({ isAuth, component: Component, ...rest }) {
  return (
    <Route
      {...rest}
      render={(props) => {
        // isAuth ? <Component /> : <Redirect to={{ pathname: "/", state: { from: props.location} }} />
        if (isAuth) {
          return <Component />;
        } else {
          return (
            <Redirect to={{ pathname: "/", state: { from: props.location } }} />
          );
        }
      }}
    />
  );
}

export default ProtectedRoute;
