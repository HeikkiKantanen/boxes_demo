import Box from "./Box";
import { NavLink, Switch, Route } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <h1>This is the HOME page</h1>
    </div>
  )
}

const About = () => {
  return (
    <div>
      <h1>This is the About page</h1>
    </div>
  )
}

const Contact = () => {
  return (
    <div>
      <h1>This is the Contact page</h1>
    </div>
  )
}

const Main = () => {
  return (
    <main>
      <nav>
        <ul>
          <li><NavLink to="/">Home</NavLink></li>
          <li><NavLink to="About">About</NavLink></li>
          <li><NavLink to="/Contact">Contact</NavLink></li>
        </ul>
      </nav>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/About" component={About} />
        <Route path="/Contact" component={Contact} />
      </Switch>
      <Box name="Maria" title="CEO" age="29" />
      <Box name="Jen" title="Developper" age="25" />
      <Box name="James" title="Designer" age="28" />
    </main>
  );
};

export default Main;
