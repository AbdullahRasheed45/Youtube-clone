import React from "react";
import "./Videorow.css"

const Videorow = ({
  views,
  subs,
  description,
  timestamp,
  channel,
  title,
  image,
}) => {
  return <div className="videorow">
    <img src={image} alt={channel} />
    <div className="videorowText">
        <h3>{title}</h3>
        <p className="videorowHeadline">
            {channel} . <span className="videorowSubscriber"><span className="videorowSubscribernumber">{subs}</span> Subscriber</span> {views} views . {timestamp}
        </p>
        <p className="videorowDescription"> {description}</p>
    </div>
  </div>;
};

export default Videorow;
