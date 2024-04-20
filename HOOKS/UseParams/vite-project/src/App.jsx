import Contact from "./componets/Contact";
import Menu from "./componets/Menu";
import Name from "./componets/Name";
import Service from "./componets/Service";
import User from "./componets/User";
import About from "./componets/About";
import {
  // BrowserRouter as Router,
  Switch,
  Route,
  // useParams,
} from "react-router-dom";

function App() {
  return (
    <>
      <Menu />
      <Switch>
        <Route exact path="/" component={() => <About name="About" />} />
        <Route
          exact
          path="/service"
          render={() => <Service name="Service" />}
        />
        <Route exact path="/contact" componnt={Contact} />
        <Route path="/contact/Name" component={Name} />
        <Route path="/user/:name" component={User} />
        <Route component={Error} />
      </Switch>
    </>
  );
}

export default App;
