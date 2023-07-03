import React, { useEffect } from "react";
import { Link, NavLink, Navigate, useNavigate } from "react-router-dom";
import { useState } from "react";

const Home = () =>{
    const [auth, setAuth] = useState();
    let navigate = useNavigate();
     useEffect(() =>{
        var auth = localStorage.getItem('email');
        setAuth(auth);
     },
     [])
    if(auth === null){
        navigate(`/`)
      }
    return(
        <>
        <h1>Welcome to home page</h1>
        </>
    )
}

export default Home;