import React from 'react'

const Search = () => {
  return (
    <div className="search">
      <div className="searchForm">
        <input type="text" placeholder='Search for user' />
      </div>
      <div className="userChat">
        <img src="https://images.pexels.com/photos/19491009/pexels-photo-19491009/free-photo-of-monkey-sitting-on-a-wall-and-eating-an-ice-cream.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load" alt="" />
        <div className="userChatInfo">
          <span>Shawn</span>
        </div>
      </div>
    </div>
  )
}

export default Search