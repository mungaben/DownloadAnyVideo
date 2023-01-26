import axios, { Axios } from 'axios';
import dayjs from 'dayjs';
import jwtDecode from 'jwt-decode';
import React from 'react'
import { useRef } from 'react';
import { useEffect } from 'react';
import { useState } from 'react'


const Profilepage = () => {
  
    const [name, setname] = useState(null);
    const [email, setemail] = useState(null);
    const [image, setimage] = useState();
    const [errors1, seterrors1] = useState();
    const [expired, setexpired] = useState();
    const nickname = useRef(null)

    const imageref =useRef(null)
    const [forms_data, setforms_data] = useState();
    const [access, setaccess] = useState( ()=>JSON.parse( localStorage.getItem('access')));
    const [refresh, setrefresh] = useState( ()=> JSON.parse( localStorage.getItem('refresh')));
    
    console.log(forms_data);
    // console.log(email);
    const setdata= ()=>{

        let decoded_data=jwtDecode(access)
        console.log(decoded_data);
        let isExpired=(decoded_data.exp)*1000 < Date.now()
        setexpired(isExpired)
        isExpired &&  axios.post("http://localhost:8000/api/token/refresh/",{
          refresh:refresh
        }).then((res)=>{
          console.log("res data",res.data);
          setaccess(res.data.access)
          localStorage.setItem("access",JSON.stringify(res.data.access))
        }).catch((errors)=>{
          console.log(errors);
        })
        
        
        localStorage.getItem("name") && setname( JSON.parse( localStorage.getItem("name")))
        
        localStorage.getItem("email") && setemail(JSON.parse(localStorage.getItem("email") ))
    }
    

   const handleimage=(e)=>{
    // e.target.name == image && setimage(e.target.files)
    console.log(e.target.files);


   }
  
   
  
   const get_data= async()=>{
    
     
    const data = axios.get('http://localhost:8000/users/1',{
      headers:{Authorization:`Bearer ${access}`}
    }).then((res)=>{
      console.log(res.data);
    }).catch((errors)=>{
      console.log("userrs get",errors);
    })
     
    
   }
   const handlerefs=(e)=>{
    e.preventDefault()
    let form_data= new FormData()
    form_data.append('profile_image', imageref.current)
    form_data.append('nick_name',nickname.current)
    setforms_data(form_data)

   }
   
  
   const post_data= async()=>{
     
    const data = expired && axios.post('http://localhost:8000/users/1',forms_data,{
      headers:{Authorization:`Bearer ${access}`}
    }).then((res)=>{
      console.log(res.data);
    }).catch((errors)=>{
      console.log("userrs post",errors);
    })
     
    
   }
   useEffect(()=>{
    setdata()
    get_data()
    post_data()
    
    
    
    

   },[])
   
  return (
    
    <div className=' bg-slate-400 flex flex-col' onSubmit={handlerefs}>
    
      <form action="" method="post" className=' flex flex-col'>
        <label htmlFor="image"> Profile Image</label>
         <input type="file" name="image" id="image" accept='image/*' ref={imageref} onChange={handleimage} />
         <label htmlFor="nick1"> call me</label>
         <input className=' bg-slate-600' type="text" name="nick_name" id="nick1"  ref={nickname}/>
         <button type="submit"> change details</button>
      </form>
        


    </div>
  )
}

export default Profilepage