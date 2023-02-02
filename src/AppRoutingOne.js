import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";

import HomePage from "./pages/Home/HomePage";
import NotFoundPage from "./pages/404/NotFoundPage";
import AboutPage from "./pages/about-faqs/AboutPage";
import ProfilePage from "./pages/Profile/ProfilePage";
import TaskPage from "./pages/Task/TaskPage";
import TasksDetailPage from "./pages/Task/TasksDetailPage";

function AppRoutingOne() {
  return (
    <Router>
      <div>
        <aside>
          <Link to="/">| HOME |</Link>
          <Link to="/about">| ABOUT |</Link>
          <Link to="/faqs">| FAQs |</Link>
          <Link to="/una404">| NOT EXISTING ROUTE |</Link>
        </aside>

        <main>
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route path="/(about|faqs)" component={AboutPage}></Route>
            <Route path="/profile" component={ProfilePage} />
            <Route path="/tasks" component={TaskPage} />
            <Route path="/task/:id" component={TasksDetailPage} />

            {/* 404 - Page Not Found */}
            <Route component={NotFoundPage} />
          </Switch>
        </main>
      </div>
    </Router>
  );
}

export default AppRoutingOne;
