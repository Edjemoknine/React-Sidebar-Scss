import React, { useState } from "react";
import profile from "../img/profile.jpg";
import { Bs0Circle, BsBarChart } from "react-icons/bs";
import { GrAggregate } from "react-icons/gr";
import { HiOutlineNewspaper } from "react-icons/hi";
import { LuLayoutDashboard } from "react-icons/lu";
import { MdContactPhone, MdSupportAgent } from "react-icons/md";
import { Link, useLocation } from "react-router-dom";

const Sidebar = () => {
  const [isOpen, setisOpen] = useState(true);
  const location = useLocation();

  return (
    <div className={`${isOpen === false ? "active" : ""} sidebar `}>
      {/* Logo */}
      <div className="logoContainer">
        <Link to={"/"}>
          <div className="logo">
            <GrAggregate />
          </div>
        </Link>
        <h2>Enargone</h2>
      </div>
      {/* Burger */}
      <div className="burgerContainer">
        <div onClick={() => setisOpen(!isOpen)} className="menu">
          <span></span>
        </div>
      </div>

      {/* Profile */}
      <div className="profileContainer">
        <img src={profile} alt="profile" />
        <div className="profileContent">
          <h3>Moknine</h3>
          <p>moknineElhadj@gmail.com</p>
        </div>
      </div>
      {/* SIdebar Link */}

      <div className="sidebarContent">
        <ul>
          <li className={location.pathname === "/" ? "active" : ""}>
            <Link to="/">
              <div className="icon">
                <LuLayoutDashboard />
              </div>
              <span>Dashboard</span>
            </Link>
          </li>
          <li className={location.pathname === "/transaction" ? "active" : ""}>
            <Link to="/transaction">
              <div className="icon">
                <BsBarChart />
              </div>
              <span>Transaction</span>
            </Link>
          </li>
          <li className={location.pathname === "/news" ? "active" : ""}>
            <Link to="/news">
              <div className="icon">
                <HiOutlineNewspaper />
              </div>
              <span>News</span>
            </Link>
          </li>
          <li className={location.pathname === "/setting" ? "active" : ""}>
            <Link to="/setting">
              <div className="icon">
                <Bs0Circle />
              </div>
              <span>Settings</span>
            </Link>
          </li>
          <li className={location.pathname === "/support" ? "active" : ""}>
            <Link to="/support">
              <div className="icon">
                <MdSupportAgent />
              </div>
              <span>Support</span>
            </Link>
          </li>
          <li className={location.pathname === "/contact" ? "active" : ""}>
            <Link to="/contact">
              <div className="icon">
                <MdContactPhone />
              </div>
              <span>Contact</span>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
