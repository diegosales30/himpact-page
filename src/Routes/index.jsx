import { Switch, Route } from "react-router-dom";
import RegisterUserPage from "../components/RegisterUserPage";

import Landing from "../Pages/Landing";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import Atividades from "../Pages/Atividades";
import Home from "../Pages/Home";

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
      <Route path="/home">
        <Home />
      </Route>
      <Route path="/atividades">
        <Atividades />
      </Route>
    </Switch>
  );
};
export default Routes;
