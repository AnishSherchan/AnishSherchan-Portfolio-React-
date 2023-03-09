import React, { useState, useEffect } from "react";
import ProfileCard from "../Cards/ProfileCard";
import useFetch from "../Hooks/index";
import Downloads from "../../assets/Downloads.svg";
import DownloadIcons from "../../assets/icons8-download-from-cloud-90 (1) 1.png";
import Resume from "../../assets/Anish_Sherchan_Resume.pdf";
import UserForm from "../UserForm";

const Conatacts = ({ projects }) => {
  const [userProfile, setUserProfile] = useState([]);
  const { data, loading } = useFetch(
    "https://api.github.com/users/AnishSherchan"
  );
  useEffect(() => {
    if (data) {
      setUserProfile([data]);
    }
  }, [data]);

  return (
    <div className=" mt-20 pb-20" id="Contact">
      {" "}
      <p className="flex items-center text-white text-xl ">
        Contacts
        <span className="flex items-center mb-4 text-5xl  text-blue-dot">
          .
        </span>
      </p>
      <p className="flex items-center mt-16 text-white text-xl">
        <span className=" mb-4 text-2xl mt-2 mr-2 text-blue-dot">/</span>
        Find me on.
      </p>
      <div className=" flex justify-around flex-wrap mt-16 space-y-8 md:space-y-0">
        {!loading &&
          userProfile.map((item, index) => (
            <ProfileCard
              key={index}
              id={item.id}
              name={item.login}
              img={item.avatar_url}
              followers={item.followers_url}
              following={item.following_url}
              email="sherchananish11@gmail.com"
              repos={projects}
              bio={item.bio}
              gitHub="true"
            />
          ))}

        <ProfileCard
          key="1000"
          name="Anish Sherchan"
          followers="150+"
          email="sherchananish11@gmail.com"
          repos="Kathmandu, Nepal"
          bio="Frontend Developer / Ui Designer"
        />
      </div>
      <div>
        <p className="flex items-center mt-16 text-white text-xl">
          <span className=" mb-4 text-2xl mt-2 mr-2 text-blue-dot">/</span>
          Downloads.
        </p>
        <div className=" pt-16 grid grid-cols-1 md:grid-cols-2 md:gap-3">
          <div className="hidden md:block">
            <img src={Downloads} alt="Download" />
          </div>
          <div>
            <p className="text-white text-3xl">Want to know more about me?</p>
            <label className="text-secondary text-xl mt-5">
              Click the Link below to start download!
            </label>
            <a
              href={Resume}
              target="_blank"
              className=" mt-16 text-3xl flex items-center text-primary cursor-pointer"
            >
              Download My Resume{" "}
              <img
                src={DownloadIcons}
                className=" w-[25px] ml-3"
                alt="Download"
              />
            </a>
          </div>
        </div>
      </div>
      <div>
        <p className="flex items-center mt-16 text-white text-xl">
          <span className=" mb-4 text-2xl mt-2 mr-2 text-blue-dot">/</span>
          User Feedback.
        </p>
        <div className="pt-16">
          <UserForm />
        </div>
      </div>
    </div>
  );
};

export default Conatacts;
