import React from 'react'
import axios from "axios"
import { useEffect } from 'react'
import { useState } from 'react'

const FilesList =() => {
    const [file, setfile] = useState();
    const [title, settitle] = useState();
    const [data, setdata] = useState();
    console.log("file",file);
    let form_data=new FormData()
    form_data.append("title",title)
    form_data.append("video",file)
    // let access_token="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjc0ODQ1NTA5LCJpYXQiOjE2NzQ4NDQ5MDksImp0aSI6IjM3MjVjZWVkNzEzOTRjZmRiYmY0M2Y3ZmY3YWI5NDIzIiwidXNlcl9pZCI6MX0.cfu912l_l5VKDH72B1GpT_H8vikHrHoQ3TCDjDyWpWE"
    let token=JSON.parse(localStorage.getItem('data'))
    setdata(token)
    let access_token=data.access

    const headers={
        'Content-Type': 'multipart/form-data',
        'Authorization':`Bearer ${access_token}`,

    }
    
    const handle_data=()=>{
        console.log("my file",file);
        const data= axios.post("http://127.0.0.1:8000/video/post/",form_data,
         
        {  
         
           headers:headers
         
        },
        ).then((res)=>{
            console.log('====================================');
            console.log(res.data);
            console.log('====================================');
        }).catch((errors)=>{
            console.log('====================================');
            console.log(errors);
            console.log('====================================');
        })

        
    }

    const post_file =()=>{
        const post_data=axios.post("http://127.0.0.1:8000/video/post/",
        {
            headers:{Authorization:`Bearer ${access_token}`}
        },).then((res)=>{
            console.log('====================================');
            console.log(res.data);
            console.log('====================================');
        }).catch((errors)=>{
            console.log('====================================');
            console.log(errors);
            console.log('====================================');
        })
    }
    


    const handle_submit=(e)=>{
        e.preventDefault()
        let title =e.target.Title.value
        let file=e.target.file.value
        console.log(e.target.file);
        handle_data()
       
       
        
    }
    const ontitle=(e)=>{
        let data=e.target.value
        console.log(data);
        settitle(data)
    }
    const onfile=(e)=>{
        let data=e.target.files[0]
        console.log("file data",data);
        setfile(data)
    }
    // handle_data()
  
  return (
    <div className=' flex-col flex'>
      <form action="" method="post" onSubmit={handle_submit}>
        <label htmlFor="titlevid">Title</label>
        <input type="text" name="Title" id="titlevid" onChange={ontitle} />
        <label htmlFor="filevid">file</label>
        <input type="file" name="file" id="filevid" accept='*' onChange={onfile}  />
        <button type="submit">submit</button>
      </form>
    </div>
  )
}

export default FilesList
