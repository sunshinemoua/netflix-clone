import React from "react";

import Title from "./Title";

const TitlesRow = ({ title }) => {
  return (
    <div className="m-4 mx-10">
      <h1 className="text-white"> {title}</h1>
      <div className="flex flex-row my-2 ">
        <Title /> <Title /> <Title /> <Title /> <Title />
      </div>
    </div>
  );
};

export default TitlesRow;
