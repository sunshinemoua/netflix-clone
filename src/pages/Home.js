import React from "react";
import Navbar from "../Navbar";
import TitlesRow from "../components/Titles/TitlesRow";

const Home = () => {
  return (
    <div>
      <Navbar />
      <TitlesRow title="Popular on Netflix" />
      <TitlesRow title="Trending Now" />
      <TitlesRow title="New Releases" />
      <TitlesRow title="Blockbuster Movies" />
      <TitlesRow title="Continue Watching" />
      <TitlesRow title="Comedy Movies" />
    </div>
  );
};

export default Home;
