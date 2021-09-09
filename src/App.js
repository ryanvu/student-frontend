import "./App.scss";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";

import axios from "axios";
import Header from "./components/Header/Header";
import { AuthProvider } from "./contexts/useAuthContext";
import PrivateRoute from "./util/PrivateRoute";
import Dashboard from "./pages/Dashboard/Dashboard";

axios.defaults.withCredentials = true;

function App() {
  return (
    <Router>
      <AuthProvider>
        <div class="wrapper">
          <Header />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/login" component={Login} />
            <Route path="/register" component={Register} />
            <PrivateRoute path="/dashboard" exact component={Dashboard} />
          </Switch>
        </div>
      </AuthProvider>
    </Router>
  );
}

export default App;
