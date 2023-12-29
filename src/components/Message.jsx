import React from "react";

const Message = () => {
  return (
    <div className="message owner">
      <div className="messageInfo">
        <img
          src="https://images.pexels.com/photos/19491009/pexels-photo-19491009/free-photo-of-monkey-sitting-on-a-wall-and-eating-an-ice-cream.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load"
          alt="profile"
        />
        <span>just now</span>
      </div>
      <div className="messageContent">
        <p>Hey! How are you?</p>
        <img
         src="https://images.pexels.com/photos/19491009/pexels-photo-19491009/free-photo-of-monkey-sitting-on-a-wall-and-eating-an-ice-cream.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load"
          alt=""
        />
      </div>
    </div>
  );
};

export default Message;
