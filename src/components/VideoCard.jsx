import React from "react";
import Avatar from "@mui/material/Avatar";
import "./VideoCard.css";

const VideoCard = ({
  image,
  title,
  channel,
  views,
  timestamp,
  channelImage,
}) => {
  return (
    <div className="videoCard">
      <img className="videoCardThumbnail" src={image} alt="" />
      <div className="videoCardInfo">
        <Avatar className="videoAvatar" alt={channel} src={channelImage} />
        <div className="videoCardText">
          <h4>{title}</h4>
          <p>{channel}</p>
          <p>
            {views} . {timestamp}
          </p>
        </div>
      </div>
    </div>
  );
};

export default VideoCard;
