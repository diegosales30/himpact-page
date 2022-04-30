import { Switch, Route } from "react-router-dom";
import RegisterUserPage from "../components/RegisterUserPage";

import Landing from "../Pages/Landing";
import Login from "../Pages/Login";
import Register from "../Pages/Register";

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/">
        <Landing />
      </Route>
      <Route path="/login">
        <Login />
      </Route>
      <Route path="/register/page">
        <Register />
      </Route>
      <Route path="/register/user">
        <RegisterUserPage />
      </Route>
    </Switch>
  );
};
export default Routes;
