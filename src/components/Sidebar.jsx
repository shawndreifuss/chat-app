import React from 'react'
import Navbar from './Navbar'
import Search from './Search'
import Chats from './Chats'

const Sidebar = () => {
  return (
    <>
      <Navbar /> 
      <section className='discussions'>
      <Search />
      <Chats />
    </section>
    </>
  )
}

export default Sidebar