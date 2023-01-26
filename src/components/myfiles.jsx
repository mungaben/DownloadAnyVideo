

import React from 'react'
import axios from 'axios'
import fileDownload from 'js-file-download'
// file saver npm i file-saver
 

const myfiles = () => {
    handleDownload = (url, filename) => {
        axios.get(url, {
          responseType: 'blob',
        })
        .then((res) => {
          fileDownload(res.data, filename)
        })
      }
  return (
    <div>

<a href={uploadedFileLink} target="_blank" rel="noopener noreferrer" download>
   <Button>
      <i className="fas fa-download"/>
      Download File
   </Button>

</a>

<br />
<br />
<br />
<button onClick={() => {this.handleDownload('https://your-website.com/your-image.jpg', 'test-download.jpg')
}}>Download Image</button>

    </div>
  )
}

export default myfiles