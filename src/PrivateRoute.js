import React, { useContext } from "react";
import { Route, Redirect } from "react-router-dom";
// import { useUserContext } from '../context/user_context'
import { AppContext } from "./context";
const PrivateRoute = ({ children, ...rest }) => {
  const { user } = useContext(AppContext);
  return (
    <Route
      {...rest}
      render={() => {
        return user.length !== 0 ? children : <Redirect to="/"></Redirect>;
      }}
    ></Route>
  );
};

export default PrivateRoute;
