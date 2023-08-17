import React from 'react'
import "./searchpage.css"
import TuneOutlinedIcon from "@mui/icons-material/TuneOutlined";
import ChannelRow from './ChannelRow';
import Videorow from './Videorow';
// import { Verified } from '@mui/icons-material';

const Searchpage = () => {
  return (
    <div className='searchpage'>
      <div className="searchpageFilter">
        <TuneOutlinedIcon/>
        <h2>Filter</h2>
      </div>
      <hr />

        <ChannelRow
        // image=
        // Channel=
        // Verified=
        // subs =
        // noOfVideos=
        // description=
        />
    <hr />
    <Videorow
    // views={}
    // subs={}
    // description={}
    // timestamp={}
    // channel={}
    // title={}
    // image={}
    />
    </div>
  )
}

export default Searchpage
