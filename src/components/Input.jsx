import React from 'react'
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';
import AttachFileIcon from '@mui/icons-material/AttachFile';


const Input = () => {
  return (
   <div className="input">
    <input type="text" placeholder='Type something...' />
    <div className="send">
      <AttachFileIcon className='img'/>
      <input type="file" style={{display: "none" }} id="file" />
       <label htmlFor="file">
        <AddPhotoAlternateIcon className='img' />
       </label>
       <button>Send</button>
    </div>
   </div>
  )
}

export default Input