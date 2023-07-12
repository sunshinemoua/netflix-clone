import React from "react";
import { BsPlus, BsFillLightningFill, BsGearFill } from "react-icons/bs";
import { BsBell } from "react-icons/bs";
import { AiOutlineSearch } from "react-icons/ai";
import { BiSolidDownArrow } from "react-icons/bi";
import { CgProfile } from "react-icons/cg";
import { NavLink } from "react-router-dom";

const Logo = () => {
  return (
    <img
      src="logo.svg"
      alt="Netflix Logo"
      className="h-[2.5rem] w-[6rem] p-[2px] "
    />
  );
};

const SearchIcon = () => {
  return <img src="search-icon.svg" alt="Search Icon" size="24" />;
};

const BellIcon = () => {
  return <img src="bell-icon.svg" alt="Bell Icon" size="24" />;
};

const ProfilePic = () => {
  const url =
    "https://occ-0-2794-2219.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABeeZ_lXhCLhlNGwSD-pFlypYzOc7vo95M2zeHIewNZBwonSs8UquM8VnSASKYr_Vru36vii9Q4D02tOlLAa6Sy0Oi0eDGLs.png?r=59d";

  return (
    <div>
      <img className="rounded" src={url} alt="Profile Icon"></img>
      <span className="border-white border-solid border-y-[5px] h-0 w-0 ml-[10px]"></span>
    </div>
  );
};

const Navbar = () => {
  return (
    <div className="flex flex-row items-center  px-[3.75vw] h-[68px] bg-black">
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
    <div className="flex flex-row w-full justify-between">
      <div className="sm:scale-0 md:scale-100 flex items-center tracking-normal ml-[1.5rem] p-0 text-white">
        <NavLink className="links" to="/">
          Home
        </NavLink>
        <NavLink className="links" to="/browse/tv-shows">
          TV Shows
        </NavLink>
        <NavLink className="links" to="/browse/movies">
          Movies
        </NavLink>
        <NavLink className="links" to="/latest">
          New & Popular
        </NavLink>
        <NavLink className="links" to="/browse/my-list">
          My List
        </NavLink>
        <NavLink className="links" to="/browse/original-audio">
          Browse by Languages
        </NavLink>
      </div>

      <div className="flex w-56 items-center justify-between">
        <SearchIcon />
        <NavLink className="links" to="/Kids">
          Kids
        </NavLink>
        <NavLink className="links" to="/DVD">
          DVD
        </NavLink>
        <BellIcon />
        <ProfilePic />
      </div>
    </div>
  );
};

export default Navbar;
