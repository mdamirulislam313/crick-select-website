import React from "react";
import banner from "../assets/banner-main.png"; 
import dollar from "../assets/dollar 1.png";

const Header = () => {
  return (
    <div className="relative ">
      <header className="flex justify-between items-center p-4 shadow fixed top-0 right-0 left-0 mx-14">
      {/* Banner */}
      <div>
        <img src={banner} alt="Banner" className="h-12" />
      </div>

      {/* Navigation */}
      <nav className="flex gap-6 items-center">
        <a href="#" className="text-black font-bold text-xl hover:underline">Home</a>
        <a href="#" className="text-black font-bold text-xl hover:underline">Fixture</a>
        <a href="#" className="text-black font-bold text-xl hover:underline">Teams</a>
        <a href="#" className="text-black font-bold text-xl hover:underline">Schedules</a>

        {/* Coin Box */}
        <div className="flex items-center gap-2 border rounded-2xl px-3 py-1 bg-gray-100">
          <p className="font-semibold">Coin</p>
          <img src={dollar} alt="Dollar Icon" className="h-5 w-5" />
        </div>
      </nav>
    </header>
    </div>
  );
};

export default Header;
