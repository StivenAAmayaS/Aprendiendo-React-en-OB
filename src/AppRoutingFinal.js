import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link,
  Redirect,
} from "react-router-dom";
import NotFoundPage from "./pages/404/NotFoundPage";
import LoginPage from "./pages/Auth/LoginPage";
import Dashboard from "./pages/DashBoard/Dashboard";

function AppRoutingFinal() {
  let loggedIn = true;

  return (
    <Router>
      <Switch>
        {/* Redirections to protect our routes */}
        <Route exact path="/">
          {loggedIn ? (
            <Redirect from="/" to="/dashboard" />
          ) : (
            <Redirect from="/" to="/login" />
          )}
        </Route>

        {/* Login Route */}
        <Route exact path="/login" component={LoginPage} />

        {/* Dashboard Route */}
        <Route exact path="/dashboard">
          {loggedIn ? <Dashboard /> : <Redirect from="/" to="/login" />}
        </Route>

        <Route component={NotFoundPage} />
      </Switch>
    </Router>
  );
}

export default AppRoutingFinal;
