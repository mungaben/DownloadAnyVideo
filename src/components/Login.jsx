import axios from 'axios'
import jwtDecode from 'jwt-decode'
import React from 'react'
import { useState } from 'react'
import { useRef } from 'react'

const Login = () => {
  const emailref = useRef(null)
  const passwordref=useRef(null)
  const [refresh, setrefresh] = useState();
  const [access, setaccess] = useState();
  // console.log(access);

  const login=()=>{
    const login_user=axios.post("http://localhost:8000/api/token/",{
      email:emailref.current.value,
      password:passwordref.current.value,
    }).then((res)=>{
      console.log(res.data);
      setaccess(res.data.access)
      setrefresh(res.data.refresh)
      
      
    })
  }
 const access_token=()=>{
  const token=jwtDecode(access)
  console.log(token);
  if (Date.now() >=token.exp*1000) {
    // const access=localStorage.getItem("access")
    // console.log(JSON.parse(access));
    
    console.log("token expired");
    
  }else{
    console.log("not expired");
  }
  
 }

  
  const handlesubmit=(e)=>{
    e.preventDefault()
    login()
    access && localStorage.setItem("access",JSON.stringify(access))
    refresh && localStorage.setItem("refresh",JSON.stringify(refresh))
    access && access_token()
   
  }
  return (
    <div>
      <div>
        <form  method="post" className='flex flex-col'  onSubmit={handlesubmit}>
          <label htmlFor="email1">Email</label>
          <input type="email" name="email" id="email1" ref={emailref} />
          <label htmlFor="password1">Password</label>
          <input type="password" name="password" id="password1"ref={passwordref} />
          <button type="submit">submit</button>
        </form>
      </div>
    </div>
  )
}

export default Login