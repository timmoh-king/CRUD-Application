import "./App.css";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import { Route, Switch } from "react-router-dom";
import TodoForm from "./components/TodoForm";
import SignIn from "./components/SignInForm";
import SignUp from "./components/SignUpForm";

function App() {
  return (
    <div>
      <Navbar />
      <div className="App">
        <Switch>
        <Route path={`/todo/:id`} component={ TodoForm } />
          <Route path="/login" component={SignIn} />
          <Route path="/register" component={SignUp} />
          <Route path="/" component={Home} />
        </Switch>
      </div>
    </div>
  );
}

export default App;
