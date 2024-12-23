import React from "react";
import { FiBell, FiSettings } from "react-icons/fi";
import { BsFillChatTextFill } from "react-icons/bs";

const Navbar = () => {
  return (
    <nav className="bg-gray-900 text-white flex items-center justify-between px-6 py-3">
      {/* Logo/Title for larger screens */}
      <div className="hidden lg:flex items-center space-x-3">
        <h1 className="font-bold text-lg">AutoProctor</h1>
      </div>

      {/* Centered title on small screens */}
      <h1 className="font-bold text-lg block lg:hidden text-center w-full">AutoProctor</h1>

      {/* Icons and User Info */}
      <div className="flex items-center space-x-4">
        <BsFillChatTextFill className="text-xl" />
        <FiBell className="text-xl" />
        <div className="flex items-center space-x-2">
          <span className="text-sm">Hey, Chi 🔥</span>
          <FiSettings className="text-xl" />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
