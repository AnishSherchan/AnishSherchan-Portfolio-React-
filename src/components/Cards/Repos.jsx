import React from "react";
import GithubIcon from "../../assets/github-icon-1 1.svg";
import reactLogo from "../../assets/react.svg";
import Java from "../../assets/java-4.svg";
import Scss from "../../assets/sass-1.svg";
import Python from "../../assets/python-4.svg";
import Html from "../../assets/html-5-svgrepo-com 3.svg";

const Repos = ({ title, img, url }) => {
  let image;
  let classNames;
  switch (img) {
    case "Python":
      image = Python;
      break;
    case "HTML":
      image = Html;
      break;
    case "JavaScript":
      image = reactLogo;
      break;
    case "SCSS":
      image = Scss;
      break;
    case "CSS":
      image = Scss;
      break;
    case "Java":
      image = Java;
      classNames = "w-10";
      break;
    default:
      image = reactLogo;
      break;
  }
  return (
    <div className="w-60 h-80 min-h-full -ml-4 md:ml-0  rounded-3xl p-5  bg-light-back">
      <div className="flex justify-end">
        <img src={GithubIcon} alt="github" className=" h-5 w-5" />
      </div>
      <div className="flex flex-col items-center mt-5">
        <img src={image} className={classNames ? "w-10" : "w-20"} alt="Image" />
      </div>
      <div className="px-2">
        <p className={`text-white text-2xl mt-12 `}>
          {title.length > 20 ? title.slice(0, 20) + "..." : title}
        </p>
        <p className={`text-secondary text-base mt-2 mb-2`}>Web Application</p>
        <a
          href={url}
          target="_blank"
          className={`text-primary text-base cursor-pointer `}
        >
          View on Github →{" "}
        </a>
      </div>
    </div>
  );
};

export default Repos;
