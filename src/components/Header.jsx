import React from "react";
import "./Header.css";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import VideoCallIcon from "@mui/icons-material/VideoCall";
import AppsIcon from "@mui/icons-material/Apps";
import NotificationsIcon from "@mui/icons-material/Notifications";
import Avatar from "@mui/material/Avatar";
import { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [inputSearch, setInputSearch] = useState("");

  return (
    <div className="header">
      <div className="headerLeft">
        <MenuIcon />
        <Link to='/'>
        <img
          className="headerLogo"
          src="https://www.logo.wine/a/logo/YouTube/YouTube-Logo.wine.svg"
          alt=""
          />
        </Link>
      </div>
      <div className="headerMiddle">
        <input
          value={inputSearch}
          onChange={(e) => setInputSearch(e.target.value)}
          type="text"
          placeholder="Search"
        />
        <Link to={`/search/${inputSearch}`}>
          <SearchIcon className="searchIcon" />
        </Link>
      </div>
      <div className="headerRight">
        <VideoCallIcon className="headerIcon" />
        <AppsIcon className="headerIcon" />
        <NotificationsIcon className="headerIcon" />
        <Avatar alt="" src="" />
      </div>
    </div>
  );
};

export default Header;
