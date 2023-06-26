import logo from './logo.svg';
import './App.css';
import Header from './Header';
import { BrowserRouter, Form, Route, Routes} from "react-router-dom";
import Home from './Home';
import Login from './Login';
import Register from './Register';

// import Form from './components/Form';
function App() {
  return (
   <>
<BrowserRouter>
<Header />

<Routes>
  <Route path='/'  element = {<Login/>}/>
  <Route path='/register'  element = {<Register/>}/>
  <Route path='/home'  element = {<Home/>}/>
</Routes>
</BrowserRouter>
   </>
  );
}

export default App;
