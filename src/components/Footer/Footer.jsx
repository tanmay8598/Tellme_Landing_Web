import React from "react";

function Footer() {
  return (
    <div className="p-5 gap-10 bg-green-200 flex flex-col justify-between items-center">
      <div className="flex flex-col justify-center items-center gap-3 mt-5">
        <h1 className="text-2xl "> Click. Connect. Breath.</h1>
        <p className="text-md">Your first 10 minutes are free to feel heard.</p>
        <div className="bg-white p-2 rounded-4xl px-4">
          <button>Notify Me</button>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center gap-3">
        <p className="text-md">Home | Contact | Links</p>
        <p className="text-md">Copyright 2025 @TellMe all rights reserved</p>
      </div>
    </div>
  );
}

export default Footer;
