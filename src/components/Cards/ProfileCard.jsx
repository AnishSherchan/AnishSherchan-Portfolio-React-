import React from "react";
import GithubIcon from "../../assets/github-icon-1 1.svg";
import Linkedin from "../../assets/icons8-linkedin-96 1.svg";
import useFetch from "../Hooks";
import LinkedinImg from "../../assets/1657217590658.png";
const ProfileCard = ({ name, img, email, repos, bio, gitHub }) => {
  let imgage;
  if (gitHub) {
    imgage = GithubIcon;
  } else {
    imgage = Linkedin;
  }
  const [foll, setfoll] = React.useState(0);
  const { data } = useFetch(
    "https://api.github.com/users/AnishSherchan/followers"
  );
  React.useEffect(() => {
    if (data) {
      setfoll(data.length);
    }
  }, [data]);
  return (
    <div className=" md:w-[400px] min-h-full  bg-light-back rounded-3xl">
      <div className="w-full h-fit bg-dark-blue rounded-t-3xl px-8 py-5">
        <div className="flex justify-end">
          <img src={imgage} alt="github" className=" h-5 w-5" />
        </div>
        <p className={`text-white text-2xl -mt-4 text-center `}>
          {gitHub ? "GitHub." : "LinkedIn."}
        </p>
        <div className="flex justify-center items-center py-[24px]">
          <img
            src={gitHub ? img : LinkedinImg}
            alt="Avatar"
            className="w-[143px] rounded-full"
          />
        </div>
        {gitHub ? (
          <p className="text-white text-xl text-center">{`@${name}`}</p>
        ) : (
          <p className="text-white text-xl text-center">{`@${name}`}</p>
        )}
        <p className=" text-white text-base text-center">{bio}</p>
      </div>

      <div className="px-8 py-7">
        {gitHub ? (
          <div className=" flex justify-between mb-4">
            <p className="text-white text-xl ">Followers: {foll} </p>
            <p className="text-white text-xl ">Following: {foll - 3} </p>
          </div>
        ) : (
          <div className=" flex mb-4">
            <p className="text-white text-xl ">Connections {foll} </p>
          </div>
        )}
        <p className=" text-blue-dot text-xl mb-4">{email}</p>
        {gitHub ? (
          <p className=" text-white text-xl mb-4">Public Repository: {repos}</p>
        ) : (
          <p className=" text-white text-xl mb-4">{repos}</p>
        )}
        <a
          href={
            gitHub
              ? "https://github.com/AnishSherchan"
              : "https://www.linkedin.com/in/anish-sherchan-aba3801b0/"
          }
          target="_blank"
          className=" text-primary cursor-pointer text-center mt-6 text-xl"
        >
          View Profile →
        </a>
      </div>
    </div>
  );
};

export default ProfileCard;
