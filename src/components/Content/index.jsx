import React from "react";
import Stories from "./Stories";
import Works from "./Works";
import Conatcts from "./Conatacts";

const index = () => {
  const [projects, setProjects] = React.useState(0);
  const getProjects = (data) => {
    setProjects(data);
  };
  return (
    <div>
      <div className="px-14">
        <Stories />
        <Works getProjects={getProjects} />
        <Conatcts projects={projects} />
      </div>
    </div>
  );
};

export default index;
