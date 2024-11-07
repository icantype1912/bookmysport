import React from "react";

const Main = () => {
  return (
    <div className="main flex flex-col gap-3 p-3">
      <div className="search-bar"></div>
      <div className="sport-selector flex flex-row">
        <div className="sport badminton flex flex-col justify-center items-center">
          <h1 className="w-full text-center text-white">badminton</h1>
        </div>
        <div className="sport table-tennis flex flex-col justify-center items-center">
          <h1 className="w-full text-center text-white">table tennis</h1>
        </div>
        <div className="sport squash flex flex-col justify-center items-center">
          <h1 className="w-full text-center text-white">squash</h1>
        </div>
        <div className="sport pickleball flex flex-col justify-center items-center">
          <h1 className="w-full text-center text-white">pickleball</h1>
        </div>
        <div className="sport pool flex flex-col justify-center items-center">
          <h1 className="w-full text-center text-white">pool</h1>
        </div>
        <div className="sport chess flex flex-col justify-center items-center">
          <h1 className="w-full text-center text-white">chess</h1>
        </div>
        <div className="sport darts flex flex-col justify-center items-center">
          <h1 className="w-full text-center text-white">darts</h1>
        </div>
      </div>
    </div>
  );
};

export default Main;
