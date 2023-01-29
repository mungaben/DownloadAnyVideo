import React from 'react'




import axios from 'axios'
import { useEffect } from 'react'
import { useState } from 'react'
import useDownloader from 'react-use-downloader';
import jwtDecode from 'jwt-decode';
import dayjs from 'dayjs';

const AllFiles = () => {
    const [data, setdata] = useState()
    const [Itoken, setItoken] = useState(()=>JSON.parse(localStorage.getItem("data")));
    const [access, setaccess] = useState();
    const [photo, setphoto] = useState();
    console.log("tokens",Itoken.access);
    const logins={
        email :"mungaben21@gmail.com",
        password:'3742Kamau',
    }
    const login=(()=>{
        axios.post("http://127.0.0.1:8000/accounts/api/token/",
            logins
        
            ).then((res)=>{
            // console.log(res.data);
            localStorage.setItem("data",JSON.stringify(res.data))
        }).catch((errors)=>{
            console.log(errors);
        })
    })
    const refresh_token=()=>{
        axios.post("http://127.0.0.1:8000/accounts/api/refresh/",{
            refresh: Itoken.refresh
        }).then((res)=>{
            setaccess(res.data)

        })
    }
    login()
    // refresh_token()
    

   
    const new_token=()=>{
        const decoded_data=jwtDecode(Itoken.access)
        console.log(decoded_data);
        const will_expire=dayjs.unix(decoded_data.exp)
        const Time_now=dayjs()
        console.log(Time_now);
        const is_Expired= will_expire < Time_now
        console.log(is_Expired);
        is_Expired && login()

    }
    
    const getdata=()=>{
        const allfiles=axios.get('http://127.0.0.1:8000/video/post/2/',{
            headers:{Authorization:`Bearer ${Itoken.access}`}
        }).then((res)=>{
            console.log(res.data.thumbnail);
            setdata(res.data)
            
        }).catch((errors)=>{
            console.log(errors);
        })
    }
    const getphotos=()=>{
        const allfiles=axios.get('http://127.0.0.1:8000/thumbnail/2/',{
            headers:{Authorization:`Bearer ${Itoken.access}`},
            // responseType: "arraybuffer",
        }).then((res)=>{
            console.log(res);
            setphoto(res.data)
            
        }).catch((errors)=>{
            console.log(errors);
        })
    }
   
    const all_data= async ()=>{
        await data.map((uploadedfiles)=>{
            console.log(typeof(uploadedfiles.video));   

        })
    }

   
//    data && all_data()
    useEffect(()=>{
        login()
        getdata()
        // getphotos()

    },[])
  return (
    <div>
        {/* <img src={data:[<media type>][;charset=<character set>][;base64],<data>} /></data> */}
        <div className=' w-screen  h-full m-3'>
           <img className=' object-cover  bg-transparent' src={data} height="300" width="500"/>
        </div>
      
    </div>
  )
}

export default AllFiles
