import React from 'react'
import "./Sidebar.css";
import HomeIcon from '@mui/icons-material/Home';
import WhatshotIcon from '@mui/icons-material/Whatshot';
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';
import VideoLibraryIcon from '@mui/icons-material/VideoLibrary';
import HistoryIcon from '@mui/icons-material/History';
import OndemandVideoIcon from '@mui/icons-material/OndemandVideo';
import WatchLaterIcon from '@mui/icons-material/WatchLater';
import ThumbUpAltOutlinedIcon from '@mui/icons-material/ThumbUpAltOutlined';
import ExpandMoreOutlinedIcon from '@mui/icons-material/ExpandMoreOutlined';
import SidebarRow from './SidebarRow';


const Sidebar = () => {
  return (
    <div className='sidebar'>
      <SidebarRow selected title = "Home" Icon={HomeIcon}/>
      <SidebarRow title = "Trending" Icon={WhatshotIcon}/>
      <SidebarRow title = "Subscription" Icon={SubscriptionsIcon}/>
      <hr/>
      <SidebarRow title = "Library" Icon={VideoLibraryIcon}/>
      <SidebarRow title = "History" Icon={HistoryIcon}/>
      <SidebarRow title = "Your videos" Icon={OndemandVideoIcon}/>
      <SidebarRow title = "Watch Later" Icon={WatchLaterIcon}/>
      <SidebarRow title = "Linked video" Icon={ThumbUpAltOutlinedIcon}/>
      <SidebarRow title = "Show more" Icon={ExpandMoreOutlinedIcon}/>
    </div>
  )
}

export default Sidebar
