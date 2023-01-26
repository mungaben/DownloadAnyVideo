import axios, { Axios } from 'axios'
import React from 'react'
import { useRef } from 'react';
import { useState } from 'react';
import {useNavigate} from'react-router-dom'

const Signup = () => {
    const nameref=useRef(null)
    const emailref=useRef(null)
    const passwordref=useRef(null)
   
    const [user, setuser] = useState(null);
   
   const navigate= useNavigate()
   
    console.log(user);
   
    
    const data= async ()=>{
        const email=emailref.current.value
        const password=passwordref.current.value
        const name=nameref.current.value

        console.log(name);
        // const profile_img=imgref.current.value
        // console.log(profile_img);
        let form_data= new FormData()
        form_data.append('email',email)
        form_data.append('password',password)
        form_data.append( 'name',name)
         
        
        const  register=axios.post('http://localhost:8000/api/register/',
        form_data,
        // {
        //     headers: {
        //         "Content-Type": "multipart/form-data",
        //       }
        // }
        
       
        ).then((res)=>{
            console.log("res data ",res.data);
            setuser(res?.data)
            res?.data && navigate('/')
        }).catch((error)=>{
            if (error.request.responseText) {
                console.log(error.request);
                
            }else{
                console.log(error);

            }
        })
    }
   
    
    const handlesubmit=(e)=>{
        e.preventDefault()
        data()
        nameref && localStorage.setItem("name",JSON.stringify(nameref.current.value))
        emailref && localStorage.setItem("email",JSON.stringify(emailref.current.value))
        
        // console.log(e.target.email.value);
        
    
        
    }
   
  return (
    <div>
        <div>
            <form action="" method="post"onSubmit={handlesubmit} className="flex flex-col">
                <label htmlFor="email">Email</label>
                <input type="email" name='email' id='email' ref={emailref} required />
                <label htmlFor="name">Name</label>
                <input type="text" name='name' id='name' ref={nameref} required />
                <label htmlFor="password">Password</label>
                <input type="text" name="password" id="password" ref={passwordref} required/>
                

                <button type="submit">Signup</button>
            </form>
        </div>

    </div>
  )
}

export default Signup
