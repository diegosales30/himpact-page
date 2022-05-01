import { Switch, Route } from "react-router-dom";
import RegisterUserPage from "../components/RegisterUserPage";

import Landing from "../Pages/Landing";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import Atividades from "../Pages/Atividades";
import Home from "../Pages/Home";
import Perfil from "../Pages/Perfil";
import Company from "../Pages/Company";
import CompanyDetails from "../Pages/CompanyDetails";

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
      <Route path="/perfil/user">
        <Perfil />
      </Route>
      <Route path="/perfil/company">
        <Company />
      </Route>
      <Route path="/company/details">
        <CompanyDetails />
      </Route>
    </Switch>
  );
};
export default Routes;
