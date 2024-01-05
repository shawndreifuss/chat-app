import React from 'react'
import Sidebar from '../components/Sidebar'
import Chat from '../components/Chat' 
import '../style.scss'

const Homepage = () => {
  return (
    <div className="background">
  <div className="container">
    <div className="row">
      <Sidebar />
      <div className="chat">
       <Chat />
        
        
      </div>
    </div>
  </div>
</div>
  )
}

export default Homepage