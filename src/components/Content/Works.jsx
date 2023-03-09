import React, { useState, useEffect } from "react";
import Card from "../Cards/WorkCard";
import Repos from "../Cards/Repos";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import WorkInfo from "../../WorkInfo.json";

const Works = ({ getProjects }) => {
  const [slidesToShow, setSlidesToShow] = useState(3);
  const [userData, setData] = useState([]);
  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(
          "https://api.github.com/users/AnishSherchan/repos"
        );
        const parseRes = await response.json();
        const data = parseRes.filter((item) => item.language != null);
        setData(data); // Set the data once it's resolved
        getProjects(data.length);
      } catch (error) {
        console.log(error.message);
      }
    }
    fetchData();
    const handleResize = () => {
      if (window.innerWidth <= 768) {
        setSlidesToShow(1);
      } else if (window.innerWidth <= 1024) {
        setSlidesToShow(2);
      } else {
        setSlidesToShow(3);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow,
    slidesToScroll: 1,
  };
  return (
    <div className=" mt-44 md:mt-32 " id="Work">
      <div>
        <p className="flex items-center text-white text-xl mb-28">
          Wroks
          <span className="flex items-center mb-4 text-5xl  text-blue-dot">
            .
          </span>
        </p>
        <div className="flex flex-wrap justify-evenly items-center space-y-10 md:space-y-0">
          {WorkInfo.map((item, index) => (
            <Card
              key={index}
              title={item.title}
              icon={item.icon}
              num={item.num}
              active={item.active}
            />
          ))}
        </div>
      </div>
      <p className="flex items-center mt-40 text-white text-xl">
        <span className=" mb-4 text-2xl mt-2 mr-2 text-blue-dot">/</span>
        My Latest Works
      </p>
      <div className=" pt-28 pb-24">
        {userData && (
          <Slider {...settings} autoplay={true} autoplaySpeed={3000}>
            {userData.map((item) => (
              <Repos
                key={item.id}
                title={item.name}
                img={item.language}
                url={item.html_url}
              />
            ))}
          </Slider>
        )}
      </div>
    </div>
  );
};

export default Works;
