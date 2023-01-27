import React from 'react'




import axios from 'axios'
import { useEffect } from 'react'
import { useState } from 'react'
import useDownloader from 'react-use-downloader';

const AllFiles = () => {
    const [data, setdata] = useState()
    

    const access_token="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjc0ODA5NzY5LCJpYXQiOjE2NzQ4MDkxNjksImp0aSI6IjZlNTM5Njc0NTJlZTRjYTk5MzQ4YzM3OTU2ODg3YjMwIiwidXNlcl9pZCI6MX0.NXXzjp5XiEqzDg--CB7xUKMjIcp95fHp14fvHiRAW3k"

    const getdata=()=>{
        const allfiles=axios.get('http://127.0.0.1:8000/video/post/',{
            headers:{Authorization:`Bearer ${access_token}`}
        }).then((res)=>{
            console.log(res.data);
            setdata(res.data)
            
        }).catch((errors)=>{
            console.log(errors);
        })
    }
    const all_data= async ()=>{
        await data.map((uploadedfiles)=>{
            console.log(typeof(uploadedfiles.video));
            axios({
                url:`http://127.0.0.1:8000/video/post/${uploadedfiles.id}`,
                method: 'GET',
                headers:{Authorization:`Bearer ${access_token}`},
                responseType: 'blob', // important
            }).then((response) => {
                const url = window.URL.createObjectURL(new Blob([response.data]));
                const link = document.createElement('a');
                link.href = url;
                link.setAttribute('download', uploadedfiles.video);
                document.body.appendChild(link);
                link.click();
            });
            
           
            

        })
    }
   data && all_data()
    useEffect(()=>{
        getdata()
    },[])
  return (
    <div>
        data
      
    </div>
  )
}

export default AllFiles
