import React from "react";
import UI from "../../assets/UI.svg";
import Exp from "../../assets/Exp.svg";
import Front from "../../assets/Front.svg";

const WorkCard = ({ title, active, num, icon }) => {
  let classNames = "w-60 h-80  rounded-3xl px-7 py-4 flex flex-col justify-end";
  if (active) {
    classNames += " bg-dark-blue";
  } else {
    classNames += " bg-light-back";
  }

  // Dynamically import the correct image based on the icon prop
  let image;
  switch (icon) {
    case "UI":
      image = UI;
      break;
    case "Exp":
      image = Exp;
      break;
    case "Front":
      image = Front;
      break;
    default:
      image = null;
  }

  return (
    <div className={classNames}>
      {image && <img src={image} className=" w-8 h-8" alt="Image" />}
      <p className={`text-white text-2xl pt-12 ${active && "text-white"}`}>
        {title}
      </p>
      <p className={`text-secondary text-base mt-4 ${active && "text-white"}`}>
        {num}
      </p>
    </div>
  );
};

export default WorkCard;
