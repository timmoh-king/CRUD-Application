import './App.css';
import Home from './components/Home';
import Navbar from './components/Navbar';
import { Route, Routes } from 'react-router-dom';
import TodoForm from './components/TodoForm';
import Signin from './components/SignInForm';
import SignUp from './components/SignUpForm';


function App() {
  return (
    <div className="App">
       <Navbar />
      <Routes>
        <Route path='/'  element={ <Home />} />
        <Route path='/todoform'  element={<TodoForm />} />
        <Route path='/signin'  element={ <Signin /> } />
        <Route path='/signup'  element={ <SignUp />} />
        </Routes>
    </div>
  );
}

export default App;
