import React from "react";

function Hero() {
  return (
    <div className="bg-white p-5 flex flex-col lg:flex-row justify-around items-center">
      <div className="w-1/2 flex flex-col items-start gap-4">
        <img
          src="/public/OviNew.png"
          alt="Ovi illustration"
          className=" w-44 h-44"
        />
        <h1 className="text-2xl lg:text-4xl font-bold w-1/2">
          It’s your first step before therapy.
        </h1>
        <p className="text-lg lg:text-xl w-[75%] ">
          No appointments. No analysis. No judgments. No labels. I’m here to
          help you find calm & clarity, one chat at a time.
        </p>
        <div className="p-2 bg-green-200 rounded-md">
          <p>Hi, I'm Ovi — your friendly listener & guide</p>
        </div>
        <button className="p-2 bg-green-200 rounded-4xl px-4">
          Start Venting
        </button>
        <p>“Start your conversation now. The first 10 minutes are on us.”</p>
      </div>
      <div className="w-1/2"></div>
    </div>
  );
}

export default Hero;
