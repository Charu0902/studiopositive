import React, { useState } from "react";
import SignUpInfo from "./SignUpInfo";
import PersonalInfo from "./PersonalInfo";
import OtherInfo from "./OtherInfo";
const Register2 = () =>{
    const [page, setPage] = useState(0);
    const [formdata, setFromData] = useState({
        email: "",
        password: "",
        confirmPassword: "",
        firstName: "",
        lastName: "",
        username: "",
        nationality: "",
        other:"",
    });
    const FormTitles = ["Sign Up", "Personal Info", "Other"];

    const PageDisplay = () =>{
        if (page === 0){
            return <SignUpInfo formdata = {formdata} setFromData= {setFromData}/>
        }
        else if (page === 1){
            return <PersonalInfo formdata = {formdata} setFromData= {setFromData}/>
        }
        else{
            return <OtherInfo formdata = {formdata} setFromData= {setFromData}/>
        }
    }
    const submitForm = (e) => {
        e.preventDefault();
       const senddata = {
        email : formdata.email,
        password: formdata.password,
        confirmPassword: formdata.confirmPassword,
        firstName: formdata.firstName,
        lastName: formdata.lastName,
        username: formdata.username,
        nationality: formdata.nationality,
        other: formdata.other,
        }
        console.log(senddata);
     
    }
    return(
        <>
<div className="form">
    <div className="progressbar">
       <div style={{ width: page === 0 ? "33.3%" : page == 1 ? "66.6%" : "100%" }}></div>
    </div>
    <div className="form-container">
         <div className="header">
            <h1>{FormTitles[page]}</h1>
         </div>
         <div className="body">
           <form onSubmit={submitForm}>
           {PageDisplay() }
           </form>
         </div>
         <div className="footer">
                            <button disabled = {page == 0}    
                            onClick={() => {setPage((currPage) => currPage - 1)}}>Prev</button>
                            <button
            onClick={() => {
              if (page === FormTitles.length - 1) {
                alert("FORM SUBMITTED");
                console.log(formdata);
              } else {
                setPage((currPage) => currPage + 1);
              }
            }}
          >
            {page === FormTitles.length - 1 ? "Submit" : "Next"}
          </button>

         </div>
       </div>
</div>
        </>
    )
}

export default Register2;