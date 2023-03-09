import React from "react";
import Welcome from "../../assets/undraw_welcoming_re_x0qo 1.svg";
import Typewriter from "typewriter-effect";

const Stories = () => {
  return (
    <div
      className=" md:grid md:grid-cols-2 pt-44 md:pt-64 h-full "
      id="Stories"
    >
      <div>
        <h1 className="text-white text-3xl Main-text">
          Hello👋, It’s me Anish <span className="text-blue-dot px-1">/</span>{" "}
          Sherchan.
        </h1>

        <h1 className="flex tracking-tight md:tracking-normal text-white text-xl md:text-3xl mt-6 Main-2">
          I’m a{" "}
          <span className="ml-3">
            <Typewriter
              options={{
                strings: ["Frontend Developer.", "UI Designer."],
                autoStart: true,
                loop: true,
              }}
            />
          </span>
        </h1>

        <p className="Main-2 text-lg mb-8 text-secondary mt-2 md:mr-10">
          I am an energetic and enthusiastic computer science student with a
          strong desire to learn and train with professionals in UI/UX and
          Frontend development.{" "}
        </p>

        <a
          href="https://mail.google.com/mail/u/0/#inbox?compose=GTvVlcSHwCwTzDdsjBLMjTpGnWBJjbwKDqWmxHPcKlkCTWmhzrRZNlhmXmCdTmgVqmQqMslgMwchS"
          target="_blank"
          rel="noopener noreferrer"
          className=" Main-btn text-2xl  cursor-pointer font-semibold tracking-widest text-primary"
        >
          LET'S TALK →
        </a>
      </div>
      <div className=" -mt-24 test  flex items-center justify-center">
        <div className="hidden  md:block">
          <img src={Welcome} alt="Welcome!" />
          <p className="text-secondary text-right mt-10 text-2xl">
            Scroll for more ↓
          </p>
        </div>
      </div>
    </div>
  );
};

export default Stories;
