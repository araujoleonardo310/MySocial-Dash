import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Login from '../pages/Login';
import Home from '../pages/Home';
import Cadastro from '../pages/Cadastro';
import Videos from '../pages/Videos';

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Login} />
        <Route exact path="/home" component={Home} />
        <Route exact path="/cadastro" component={Cadastro} />
        <Route exact path="/videos" component={Videos} />
      </Switch>
    </Router>
  );
};

export default Routes;
