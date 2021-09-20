import { Switch, Route } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import HomePage from "./components/Homepage/Homepage";
import LoginForm from "./components/LoginForm/LoginForm";
import "./App.css";

function App() {
  return (
    <div className="App">
      {/* <header className="App-header"></header> */}
      <NavBar />
      <Switch>
        <Route path="/login" component={LoginForm} />
        <Route path="/" component={HomePage} />
        {/* <Redirect path="/" component={} />  // if typed wrong adres redirect here*/}
      </Switch>
    </div>
  );
}

export default App;
