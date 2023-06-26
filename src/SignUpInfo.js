import React from 'react'

const SignUpInfo = ({formdata,setFromData}) =>{
    return(
        <>
        <div className='sign-up-container'>
          <input type='text' placeholder='Email...'value={formdata.email} onChange={(event) => setFromData({...formdata, email: event.target.value})}/>
          <input type='password' placeholder='Password...' value={formdata.password} onChange={(event) => setFromData({...formdata, password: event.target.value})}/>
          <input type='password' placeholder='Confirm Password...' value={formdata.confirmPassword} onChange={(event) => setFromData({...formdata, confirmPassword: event.target.value})}/>

        </div>
        </>
    )
}

export default SignUpInfo;