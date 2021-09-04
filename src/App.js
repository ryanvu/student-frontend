import "./App.scss";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import { useEffect } from "react";
import axios from "axios";

axios.defaults.withCredentials = true;

function App() {
  useEffect(() => {
    axios
      .get("http://localhost:8080/user/isAuth")
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <Router>
      <button
        onClick={() => {
          axios.delete("http://localhost:8080/user/logout");
        }}
      >
        logout
      </button>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
      </Switch>
    </Router>
  );
}

export default App;
