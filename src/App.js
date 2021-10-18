import "./App.css";
import DataGenerator from "./components/DataGenerator";
import Navbar from "./components/Navbar";
import Homepage from "./components/Homepage";
import OrderReserve from "./components/OrderReserve";
import CurResponse from "./components/CurResponse";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
      <Navbar />
        <Switch>
          
          <Route exact path="/">
            <Homepage />
          </Route>
          <Route exact path="/datatool">
            <DataGenerator />
          </Route>
          <Route exact path="/orderreserve">
            <OrderReserve />
          </Route>
          <Route exact path="/curresponse">
            <CurResponse />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
