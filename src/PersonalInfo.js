import React from "react";

const PersonalInfo = ({formdata,setFromData}) =>{
    return(
        <>
        <div className="personal-info-container">
        <input type='text' placeholder='First Name...' value={formdata.firstName} onChange={(event) => setFromData({...formdata, firstName: event.target.value})}/>
        <input type='text' placeholder='Last Name...' value={formdata.lastName} onChange={(event) => setFromData({...formdata, lastName: event.target.value})}/>
        <input type='text' placeholder='Username...' value={formdata.username} onChange={(event) => setFromData({...formdata, username: event.target.value})}/>

        </div>
        </>
    )
}

export default PersonalInfo;