import { Switch, Route } from "react-router-dom";
import { useState } from "react";
import NavBar from "./components/NavBar/NavBar";
import HomePage from "./components/Homepage/Homepage";
import LoginForm from "./components/LoginForm/LoginForm";
import "./App.css";

function App() {
  const [token, setToken] = useState(null);
  const [players, setPlayers] = useState(null);

  return (
    <div className="App">
      {/* <header className="App-header"></header> */}
      <NavBar />
      <Switch>
        <Route
          path="/login"
          render={(props) => <LoginForm {...props} loginProps={setToken} />}
        />
        <Route
          path="/"
          render={(props) => <HomePage {...props} playersProps={setPlayers} />}
        />
        {/* <Redirect path="/" component={} />  // if typed wrong adres redirect here*/}
      </Switch>
    </div>
  );
}

export default App;
