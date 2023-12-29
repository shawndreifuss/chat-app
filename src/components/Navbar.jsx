import React from 'react'
const Navbar = () => {
  return (
    <div className="navbar">
      <span className='logo'>Chat App</span>
      <div className="user">
        <img src="https://images.pexels.com/photos/19491009/pexels-photo-19491009/free-photo-of-monkey-sitting-on-a-wall-and-eating-an-ice-cream.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load" alt="" />
        <span>Shawn</span>
        <button>logout</button>
      </div>
    </div>
  )
}

export default Navbar