import "./App.css";
import SubFooter from "./Components/SubFooter";
import Footer from "./Components/Footer";
import JP from "./Components/JP/index";
import EN from "./Components/EN/index";
import { Switch, Route, Redirect } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";

function App() {
  return (
    <div className="App">
    
      <Switch>
        <Route exact path="/" render={() => <Redirect to="/jp" />} />
        <Route exact path="/jp" component={JP} />
        <Route exact path="/en" component={EN} />
      </Switch>
      <SubFooter />
      <Footer />
    </div>
  );
}

export default App;
