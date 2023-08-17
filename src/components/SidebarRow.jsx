import React from 'react'
// import HomeIcon from '@mui/icons-material/Home';
import "./SidebarRow.css"

const SidebarRow = ({selected, title , Icon}) => {
  return (
    <div className= {`sidebarRow ${selected && "selected"}`}> 
        
        <Icon className="sidebarRowIcon"/>
      <h2 className="sidebarRowTitle">{title}</h2>
    </div>
  )
}

export default SidebarRow
