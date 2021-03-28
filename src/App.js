import "./App.css";
import Header from "./Components/Header";
import SubFooter from "./Components/SubFooter";
import Footer from "./Components/Footer";
import JP from "./Components/JP/index";
import { Switch, Route,Redirect } from "react-router-dom";
// import styled from 'styled-components';
import "bootstrap/dist/css/bootstrap.css";

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
      <Route exact path="/" render={() => (
    <Redirect to="/jp"/>
)}/>
        <Route exact path="/jp" component={JP} />
      </Switch>
      <SubFooter />
      <Footer />
    </div>
  );
}

export default App;
