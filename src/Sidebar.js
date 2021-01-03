import { Avatar } from "@material-ui/core";
import React from "react";
import "./Sidebar.css";

function Sidebar() {
  const recentItem = (topic) => (
    <div className="sidebar__recentItem">
      <span className="sidebar__hash">#</span>
      <p>{topic}</p>
    </div>
  );

  return (
    <div className="sidebar">
      {/* Sidebar profile */}
      <div className="sidebar__top">
        <img
          src="https://venngage-wordpress.s3.amazonaws.com/uploads/2018/09/Colorful-Geometric-Simple-Background-Image.jpg"
          alt=""
        />
        <Avatar />
        <h2>Alex Grant</h2>

        <h4>Father - Musician - Future Web developer</h4>
      </div>
      {/* Stats */}
      <div className="sidebar__stats">
        <div className="sidebar__stat">
          <p>Who viewed you</p>
          <p className="sidebar__statNumber">564</p>
        </div>
        <div className="sidebar__stat">
          <p>Views on posts</p>
          <p className="sidebar__statNumber">356</p>
        </div>
      </div>
      {/* sidebar bottom */}
      <div className="sidebar__bottom">
        <p>Recent</p>
        {recentItem("Reactjs")}
        {recentItem("Vuejs")}
        {recentItem("Web Development")}
        {recentItem("Ionic 4")}
        {recentItem("Mobile Development")}
      </div>
    </div>
  );
}

export default Sidebar;
