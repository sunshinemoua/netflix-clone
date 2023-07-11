import React from "react";
import spidey3 from "../../images/spidey3-cover.jpeg";

export const Title = () => {
  return (
    <div className="flex shrink-0 mr-1 w-[216.41px] h-[121.84px]">
      <img className="rounded-sm" src={spidey3} />
    </div>
  );
};

const TitlesRow = ({ title }) => {
  return (
    <div className="m-4 mx-10 ">
      <h1 className="text-white"> {title}</h1>
      <div className="flex flex-row my-2  overflow-x-scroll">
        <Title /> <Title /> <Title /> <Title /> <Title />
        <Title />
        <Title />
        <Title />
        <Title />
      </div>
    </div>
  );
};

export default TitlesRow;
