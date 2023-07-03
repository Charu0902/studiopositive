import { useState } from "react";
import axios from 'axios';
import { useNavigate } from "react-router-dom";

const Register = (props) =>{
    let history = useNavigate();
    const [data, setData] = useState(
        {
            name:'',
            email: '',
            company: '',
            url: '',
            password: ''
        }
    )

    const handleChange = (e) =>{
        setData({ ...data, [e.target.name]: e.target.value });
        
    }

    const submitForm = (e) => {
        e.preventDefault();
       const senddata = {
            name : data.name,
        email: data.email,
            company: data.company,
            url: data.url,
            password: data.password
        }
        console.log(senddata);
        axios.post('https://react.opositive.io/insert.php', senddata)
        .then((result) =>{
            if(result.data.Status == 'Invalid'){
                alert('Invalid User');
            }
            else{
                history(`/thankyou`)
            }

        })
    }
    return(
        <>
       <div className="container">
       <div className="row">
         {/* <div className="col-md-12 text-center">
<h1>Register</h1>
         </div> */}
        </div>
     <div className="row register-row">
          <div className="col-md-6 col-sm-12">
            <img src="./Assets/loginimg.jpg" className="img-fluid"/>
          </div>
          <div className="col-md-6 col-sm-12">
          <form onSubmit={submitForm} className="register-form">
      
         
      <div className="col-md-12 register-form-col"> 
      <label >Name</label>
        <input type="text"  name='name' className="form-control" onChange={handleChange} value={data.name}/>
      </div>

    
      <div className="col-md-12 register-form-col"> 
      <label>Email</label>
        <input type="email"  name='email' required className="form-control" onChange={handleChange} value={data.email}/>
      </div>
      
      <div className="col-md-12 register-form-col"> 
      <label>Comapny Name</label>
        <input type="text"  name='company' className="form-control" onChange={handleChange} value={data.company}/>
      </div>
   
      <div className="col-md-12 register-form-col"> 
      <label>Website Url</label>
        <input type="url"  name='url' required className="form-control" onChange={handleChange} value={data.url}/>
      </div>
     
    
      
      <div className="col-md-12 register-form-col"> 
      <label>Password</label>
        <input type="password"  name='password' required className="form-control" onChange={handleChange} value={data.password} autoComplete="on"/>
      </div>
       <div className="col-md-12 text-left register-button">
           <input type="submit" name = 'submit' value='Register' className="btn btn-success"/>
       </div>
    </form>
          </div>
     </div>
      
     
       </div>
        </>
    )
}

export default Register;