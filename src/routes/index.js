import { Route, Switch } from "react-router-dom";
import { Casamento } from "../pages/Casamento";
import { Confraternizacao } from "../pages/Confraternizacao";
import { Formatura } from "../pages/Formatura";
import { Home } from "../pages/Home";

export const Routes = () => {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/casamento">
        <Casamento />
      </Route>
      <Route path="/formatura">
        <Formatura />
      </Route>
      <Route path="/confraternizacao">
        <Confraternizacao />
      </Route>
    </Switch>
  );
};
