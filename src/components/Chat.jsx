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
    <div className="chat">
      <div className="chatInfo">
        <span>{data.user?.displayName}</span>
        <div className="chatIcons">
          <VideocamIcon className="img" />
          <PersonAddIcon className="img" />
          <MoreHorizIcon className="img" />
        </div>
      </div>
      <Messages />
      <Input />
    </div>
  );
};

export default Chat;
