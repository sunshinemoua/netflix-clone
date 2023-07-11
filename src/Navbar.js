import React from "react";
import { BsPlus, BsFillLightningFill, BsGearFill } from "react-icons/bs";
import { BsBell } from "react-icons/bs";
import { AiOutlineSearch } from "react-icons/ai";
import { BiSolidDownArrow } from "react-icons/bi";
import { CgProfile } from "react-icons/cg";
import { NavLink } from "react-router-dom";

const Logo = () => {
  return (
    <img src="logo.svg" alt="Netflix Logo" className="h-[1.885em] m-[.5px]" />
  );
};

const Navbar = () => {
  return (
    <div className="flex flex-row items-center my-[1.1%] px-[4%] h-[41px] bg-gradient-to-b from-black to-black-550 text-white">
      <Logo />
      <MainNav />

      {/* <div className="flex flex-row">
        <div className="group/menu flex flex-col">
          <div className="flex flex-row items-center justify-between w-56">
            <h1 className="uppercase text-3xl">Netflix</h1>
            <span className="flex flex-row items-center w-20 justify-around sm:scale-100 md:scale-0">
              Browse <BiSolidDownArrow />
            </span>
          </div>
          <BrowseMenu />
        </div>
      </div>
      <div className="flex flex-row w-32 justify-between m-2">
        <AiOutlineSearch size="25" />
        <BsBell size="25" />
        <CgProfile size="25" />
      </div> */}

      {/* <div className="flex flex-row w-56 justify-between items-center m-2 ">
        <AiOutlineSearch size="24" />
        <NavLink className="links" to="/Kids">
          Kids
        </NavLink>
        <NavLink className="links" to="/DVD">
          DVD
        </NavLink>
        <BsBell size="22" />
        <CgProfile size="24" />
      </div> */}
    </div>
  );
};

const BrowseMenu = () => {
  return (
    <div className="sidebar group-hover/menu:scale-100">
      <span className="m-3">Home</span>
      <span className="m-3">TV Shows</span>
      <span className="m-3"> Movies</span>
      <span className="m-3">New & Popular</span>
      <span className="m-3">My List</span>
      <span className="m-3">Browse By Languages</span>
    </div>
  );
};

const MainNav = () => {
  return (
    <div className="sm:scale-0 md:scale-100 flex items-center tracking-normal m-0 p-0 text-white">
      <NavLink className="links" to="/browse">
        Home
      </NavLink>
      <NavLink className="links" to="/browse/tv-shows">
        TV Shows
      </NavLink>
      <NavLink className="links" to="/browse/movies">
        Movies
      </NavLink>
      <NavLink className="links" to="/latest">
        Latest
      </NavLink>
      <NavLink className="links" to="/browse/my-list">
        My List
      </NavLink>
      <NavLink className="links" to="/browse/original-audio">
        Browse By Languages
      </NavLink>
    </div>
  );
};

export default Navbar;
