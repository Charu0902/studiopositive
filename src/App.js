import logo from './logo.svg';
import './App.css';
import Header from './Header';
import { BrowserRouter, Form, Route, Routes} from "react-router-dom";
import Home from './Home';
import Login from './Login';
import Register from './Register';
import Register2 from './Register2';
import Thankyou from './Thankyou';
import Cookie from './Cookie';
import Forgetpassword from './Forgetpassword';
import Resetpassword from './Resetpassword';

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
  <Route path='/register2'  element = {<Register2/>}/>
  <Route path='/thankyou'  element = {<Thankyou/>}/>
  <Route path='/forget-password' element = {<Forgetpassword/>}/>
  <Route path='/reset-password' element = {<Resetpassword/>}/>
</Routes>
</BrowserRouter>
<Cookie></Cookie>

   </>
  );
}

export default App;
