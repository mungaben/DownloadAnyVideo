import React from 'react'
import axios from "axios"
import { useEffect } from 'react'
import { useState } from 'react'

const FilesList =() => {
    const [file, setfile] = useState();
    const [title, settitle] = useState();
    console.log(file);
    let form_data=new FormData()
    form_data.append("title",title)
    form_data.append("video",file)
    let access_token="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjc0Nzk5MTk0LCJpYXQiOjE2NzQ3OTg1OTQsImp0aSI6IjI5NjM0YTZiZmZjZTQ1MzdiYzJjMTI3Y2M1MDQ3YjMyIiwidXNlcl9pZCI6MX0.NT1z9LeKBtAkbhk-Y--uD1aAW34K_LfSBKFo8j3QDFA"
    const headers={
        'Content-Type': 'multipart/form-data',
        Authorization:`Bearer ${access_token}`,

    }
    
    const handle_data=()=>{
        const data= axios.post("http://127.0.0.1:8000/video/post/",{
            Title:title,
            video:file,
        },
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
       
       
        
    }
    const ontitle=(e)=>{
        let data=e.target.value
        console.log(data);
        settitle(data)
    }
    const onfile=(e)=>{
        let data=e.target.value
        console.log(data);
        setfile(data)
    }
    handle_data()
  
  return (
    <div className=' flex-col flex'>
      <form action="" method="post" onSubmit={handle_submit}>
        <label htmlFor="titlevid">Title</label>
        <input type="text" name="Title" id="titlevid" onChange={ontitle} />
        <label htmlFor="filevid">file</label>
        <input type="file" name="file" id="filevid"  />
        <button type="submit">submit</button>
      </form>
    </div>
  )
}

export default FilesList
