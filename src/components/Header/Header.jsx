import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom"; 
import { FaSearch} from "react-icons/fa";
import Logo from "../../assets/icons/fazm.png";
import HomeIcon from "../../assets/icons/Home.png";
import FamilyIcon from "../../assets/icons/Family.png";
import FamilyTreeIcon from "../../assets/icons/FamilTree.png";
import CalendarIcon from "../../assets/icons/Calendar.png";
import EventsIcon from "../../assets/icons/Events.png";
import Chat from "../../assets/icons/Chat.png";
import Notification from "../../assets/icons/Notification.png";
import Profile from "../../assets/icons/PP.png";
import "./Header.css";

const navItems = [
  { path: "/", icon: HomeIcon, label: "Home" },
  { path: "/family", icon: FamilyIcon, label: "Family Identity" },
  { path: "/family-tree", icon: FamilyTreeIcon, label: "Family Tree" },
  { path: "/calendar", icon: CalendarIcon, label: "Calendar" },
  { path: "/events", icon: EventsIcon, label: "Events" },
];

const Header = () => {
  const location = useLocation(); 

  const isActive = (path) => {
    return location.pathname === path;
  };

  return (
    <Navbar expand="lg" className="px-3 position-sticky top-0 z-1 custom-navbar">
      <div className="container-fluid">
        <div className="col-3 d-flex align-items-center logo-container">
          <Navbar.Brand href="#" className="logo">
            <img src={Logo} alt="Logo" style={{ height: "20px" }} />
          </Navbar.Brand>
          <div className="search-item">
            <Nav.Link href="#" className="d-flex align-items-center">
              <FaSearch className="me-2" />
              <span>Search</span>
            </Nav.Link>
          </div>
        </div>

        <div className="col-6 text-center">
          <div
            className="d-flex justify-content-between"
            style={{ maxWidth: "500px", margin: "0 auto" }}
          >
            {navItems.map((item, index) => (
              <div
                key={index}
                className="d-flexflex-column align-items-center"
              >
                <Link
                  to={item.path}
                  className={`pages-link text-decoration-none d-flex flex-column align-items-center ${isActive(item.path) ? 'green' : null}`}
                >
                  <img
                    src={item.icon}
                    alt={item.label}
                    style={{ height: "22px" }}
                  />
                  <span
                    style={{
                      marginTop: "5px",
                      fontSize: "12px",
                      color: isActive(item.path) ? "green" : "black", 
                    }}
                  >
                    {item.label}
                  </span>
                </Link>
              </div>
            ))}
          </div>
        </div>

        <div className="col-3 d-flex justify-content-end align-items-center">
            <Nav className="profile-container d-flex align-items-center">
            <img src={Chat} alt="#" />

            <img src={Notification} alt="#" />

            <img src={Profile} alt="#" />
          </Nav>
        </div>
      </div>
    </Navbar>
  );
};

export default Header;
