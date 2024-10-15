import React from "react";
import { Link } from "react-router-dom";
import "./LeftSideMenu.css";
import Media from "../../assets/icons/SidemenuIcons/Albums.png";
import FamilyVault from "../../assets/icons/SidemenuIcons/FamilyVault.png";
import Groups from "../../assets/icons/SidemenuIcons/Groups.png";
import Connections from "../../assets/icons/SidemenuIcons/Connections.png";
import ConnectionRequests from "../../assets/icons/SidemenuIcons/ConnectionRequests.png";
import Approvals from "../../assets/icons/SidemenuIcons/Approvals.png";


const menuItems = [
  { path: "*", icon: Media, label: "Media" },
  { path: "*", icon: FamilyVault, label: "Family Vault" },
  { path: "*", icon: Groups, label: "Groups" },
  { path: "*", icon: Connections, label: "Connections" },
  { path: "*", icon: ConnectionRequests, label: "Connection Request" },
  { path: "*", icon: Approvals, label: "Approvals" },

];

const LeftSideMenu = () => {

  return (
    <div className="side-menu">
      <ul className="menu-list">
        {menuItems.map((item, index) => (
          <li key={index} className={`menu-item `}>
            <Link to={item.path} className="d-flex align-items-center">
              <img
                className="menu-icon"
                alt="#"
                src={item.icon}
                style={{ height: "22px" }}
              />
              <span className="menu-label">{item.label}</span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default LeftSideMenu;
