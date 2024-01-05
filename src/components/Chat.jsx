import React, { useContext } from "react";
import VideocamIcon from "@mui/icons-material/Videocam";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import Messages from "./Messages";
import Input from "./Input";
import { ChatContext } from "../context/ChatContext";

const Chat = () => {
  const { data } = useContext(ChatContext);

  return (
    <>
      <div className="header-chat">
    {data.user.photoURL ?  <img className='userProfile' src={data.user.photoURL} alt="" />  : <i className="icon fa fa-user-o" aria-hidden="true"></i> }
    <p className="name">{data.user?.displayName}</p>
    <i className="icon clickable fa fa-ellipsis-h right" aria-hidden="true"></i>
  </div>
  <Messages />
  <Input />
    </>
  );
};

export default Chat;


