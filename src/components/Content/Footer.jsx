import React from "react";
import Logo from "../../assets/Logo.svg";
import { Link } from "react-scroll";
import GithubIcon from "../../assets/github-icon-1 1.svg";
import MailIcon from "../../assets/mail.png";
import Linkedin from "../../assets/Linkedin.png";
const Footer = () => {
  return (
    <div className=" px-1 md:px-[120px] bg-light-back pt-10 ">
      <div className="flex flex-col md:flex-row flex-wrap md:justify-between">
        <img src={Logo} alt="Logo" />
        <div className="flex justify-center md:justify-end space-x-3 md:space-x-14">
          <Link to="Stories" smooth={true}>
            <p className="flex items-center cursor-pointer text-white text-xl">
              Stories{" "}
              <span className="flex mb-4 items-center text-5xl text-blue-dot">
                .
              </span>
            </p>
          </Link>
          <Link to="Work" smooth={true}>
            <p className="flex items-center cursor-pointer text-white text-xl">
              Works{" "}
              <span className="flex mb-4 items-center text-5xl text-blue-dot">
                .
              </span>
            </p>
          </Link>
          <Link to="Contact" smooth={true}>
            <p className="flex items-center cursor-pointer text-white text-xl">
              Contacts{" "}
              <span className="flex items-center mb-4 text-5xl text-blue-dot">
                .
              </span>
            </p>
          </Link>
        </div>
      </div>
      <hr className=" hidden md:block border-t bg-white ml-[100px] my-6"></hr>
      <div className="flex md:flex-row flex-col pb-10 justify-between items-center">
        <div>
          <p className="text-white text-center md:text-left text-xl">
            All Rights Reserved &copy; 2021
          </p>
          <p className="text-white text-base pt-4 text-center md:text-left">
            <span className=" text-blue-dot">~</span> Inovate Design
          </p>
        </div>
        <div className="flex justify-evenly items-center pt-6 md:pt-0 space-x-5">
          <a
            href="https://github.com/AnishSherchan"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img className="w-[28px]" src={GithubIcon} alt="Github" />
          </a>
          <a
            href="https://mail.google.com/mail/u/0/#inbox?compose=GTvVlcSHwCwTzDdsjBLMjTpGnWBJjbwKDqWmxHPcKlkCTWmhzrRZNlhmXmCdTmgVqmQqMslgMwchS"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={MailIcon} className="w-[34px]" alt="Mail" />
          </a>
          <a
            href="https://www.linkedin.com/in/anish-sherchan-aba3801b0/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img className="w-[30px]" src={Linkedin} alt="LinkedIn" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
