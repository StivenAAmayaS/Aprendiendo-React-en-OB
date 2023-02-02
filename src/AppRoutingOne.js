import { useEffect } from "react";

import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link,
  Redirect,
} from "react-router-dom";

import HomePage from "./pages/Home/HomePage";
import NotFoundPage from "./pages/404/NotFoundPage";
import AboutPage from "./pages/about-faqs/AboutPage";
import ProfilePage from "./pages/Profile/ProfilePage";
import TaskPage from "./pages/Task/TaskPage";
import TasksDetailPage from "./pages/Task/TasksDetailPage";
import LoginPage from "./pages/Auth/LoginPage";
import StatePage from "./pages/Home/StatePage";

function AppRoutingOne() {
  let logged = false;

  let taskList = [
    {
      id: 1,
      name: "Task 1",
      description: "My first Task",
    },
    {
      id: 2,
      name: "Task 2",
      description: "My second Task",
    },
    {
      id: 3,
      name: "Task 3",
      description: "My third Task",
    },
  ];

  useEffect(() => {
    logged = localStorage.getItem("credentials");
    console.log("User logged", logged);
  }, []);

  return (
    <Router>
      <div>
        <aside>
          <Link to="/">| HOME |</Link>
          <Link to="/about">| ABOUT |</Link>
          <Link to="/faqs">| FAQs |</Link>
          <Link to="/una404">| NOT EXISTING ROUTE |</Link>
          <Link to="/login">| LOGIN |</Link>
        </aside>

        <main>
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/online-state" component={StatePage} />
            <Route path="/login" component={LoginPage}>
              {logged
                ? () => {
                    alert("You are logged in. Redirecting to home...");
                    return <Redirect to="/" />;
                  }
                : () => {
                    return <LoginPage></LoginPage>;
                  }}
            </Route>
            <Route path="/(about|faqs)" component={AboutPage}></Route>
            <Route path="/profile" component={ProfilePage}>
              {logged ? (
                <ProfilePage></ProfilePage>
              ) : (
                () => {
                  alert("You must be logged in. Redirecting to login...");
                  return <Redirect to="/login" />;
                }
              )}
            </Route>
            <Route path="/tasks" component={TaskPage} />
            <Route
              exact
              path="/task/:id"
              render={({ match }) => (
                <TasksDetailPage task={taskList[match.params.id - 1]} />
              )}
            />

            {/* 404 - Page Not Found */}
            <Route component={NotFoundPage} />
          </Switch>
        </main>
      </div>
    </Router>
  );
}

export default AppRoutingOne;
