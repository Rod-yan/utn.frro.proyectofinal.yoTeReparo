import React from "react";
import Home from "./Home/Home";
import About from "./About/About";
import Header from "./Header/Header";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useLocation
} from "react-router-dom";
import "./App.css";
import Container from "./Container/Container";

const NoMatch = () => {
  let location = useLocation();

  return (
    <div>
      <h3>
        No match for <code>{location.pathname}</code>
      </h3>
    </div>
  );
};

function App() {
  return (
    <>
      <Router>
        <Header>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
          </ul>
        </Header>

        <Switch>
          <Route exact path="/">
            <Container type="card">
              <Home />
            </Container>
          </Route>
          <Route path="/about">
            <Container type="card">
              <About />
            </Container>
          </Route>
          <Route path="*">
            <Container type="card">
              <NoMatch />
            </Container>
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
