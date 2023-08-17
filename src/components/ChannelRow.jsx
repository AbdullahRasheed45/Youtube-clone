import React from "react";
import "./channelrow.css";
import Avatar from "@mui/material/Avatar";
import VerifiedIcon from "@mui/icons-material/Verified";


const ChannelRow = ({ image, channel, subs, noOfVideos, description, verified }) => {
  return (
    <div className="channelrow">
      <Avatar className="channalrowAvatar" src={image} alt={channel} />
      <div className="channelrowText">
        <h4>{channel} {verified && <VerifiedIcon/>}</h4>
        <p>{subs} subscribers . {noOfVideos} vidoes</p>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default ChannelRow;
