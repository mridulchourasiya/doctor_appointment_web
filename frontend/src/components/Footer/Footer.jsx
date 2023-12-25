import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/images/logo.png";
import { RiLinkedinFill } from "react-icons/ri";
import {
  AiFillYoutube,
  AiFillGithub,
  AiOutlineInstagram,
} from "react-icons/ai";



const Footer = () => {
  const year = new Date().getFullYear;
  return (
    <footer className="pb-16 pt-10">
      <div className="container">
        <div className="flex justify-between flex-col flex-wrap gap-[30px]">
          <div>
            <img src={logo} alt="" />
            <p className="text-[16px] leading-7 font-400 text-textColor mt-4">
              @Copyrignt {year} Developed by Mridul Chourasia all right resverd
            </p>
            {/* <div>
              {socialLinks.map((Link, index) => (
                <Link to={link.path} key={index}>{link.icon}</Link>
              ))}
            </div> */}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
