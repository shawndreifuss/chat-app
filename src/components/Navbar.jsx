import React, { useContext } from 'react'
import { signOut } from 'firebase/auth'
import { auth } from '../firebase'
import { AuthContext } from '../context/AuthContext'


const Navbar = () => {
  const {currentUser} = useContext(AuthContext)

  return (
    <nav className="menu">
        <ul className="items">
        <li className='item'>
        <img className='userProfile' src={currentUser.photoURL} alt="" />
          </li>
          <li className="item">
            <i className="fa fa-home" aria-hidden="true"></i>
          </li>
          <li className="item">
            <i className="fa fa-user" aria-hidden="true"></i>
          </li>
          <li className="item">
            <i className="fa fa-pencil" aria-hidden="true"></i>
          </li>
          <li className="item item-active">
            <i className="fa fa-commenting" aria-hidden="true"></i>
          </li>
          <li className="item">
            <i className="fa fa-file" aria-hidden="true"></i>
          </li>
          <li className="item">
          <i class="fa fa-user-plus" aria-hidden="true"></i>
          </li>
          <li className='item'>
          <i class="fa fa-address-book-o" aria-hidden="true"></i>
          </li>
          <li className='item'>
<i className="fa fa-cog" aria-hidden="true"></i>
          </li>
          <li className='item'>
          <i onClick={()=>signOut(auth)} class="fa fa-sign-out" aria-hidden="true"></i>
          </li>
          
        </ul>
      </nav>
    // <div className='navbar'>
    //   <span className="logo">Chat App</span>
    //   <div className="user">
    //     <img src={currentUser.photoURL} alt="" />
    //     <span>{currentUser.displayName}</span>
    //     <button onClick={()=>signOut(auth)}>logout</button>
    //   </div>
    // </div>
  )
}

export default Navbar