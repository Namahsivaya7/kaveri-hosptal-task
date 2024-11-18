import React from "react";
import { useDashboard } from "../context/DashboardContext";
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';

const Navbar = () => {
  const { data } = useDashboard();
  return (
    <div
      className="navbar"
      style={{
        width: "100%",
        alignItems: "center",
        display: "flex",
        justifyContent: "space-between",
        padding: "10px 20px", // You can apply padding here
        boxSizing: "border-box", // Ensure box-sizing is applied
        backgroundColor: "#fff",
      }}
    ><div>
      <img src="Group.png"/>
      <h3>Kaveri Hospital</h3></div>
      <div style={{border:"1px solid white",padding:5,borderRadius:10,background: "rgba(249, 250, 251, 1)"
}}>
      <SearchOutlinedIcon style={{fill:"orange"}}/>
      <input
        type="text"
        placeholder="Search here..."
        style={{
          padding: "5px",
          borderRadius: "4px",
          border: "none",
          background: "rgba(249, 250, 251, 1)"
        }}
      />
      </div>
      <div style={{gap:10}}>
      <NotificationsNoneOutlinedIcon style={{color:"orange",background: "rgba(255, 250, 241, 1)"}}/>

      <img src="Ellipse 56.png"/>
     <div style={{display:"flex",flexDirection:"column",gap:5,alignItems:"baseline",border:"none"}}>
      <span><b>Mohan</b></span>
      <span>Manager</span>
      </div>
      </div>
    </div>
  );
};

export default Navbar;
