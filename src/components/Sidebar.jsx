import { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import {
  AiOutlineHome,
  AiOutlineFolder,
  AiOutlinePieChart,
  AiOutlineTeam,
  AiOutlineMenu,
  AiOutlineClose,
} from "react-icons/ai";
import { BiCategoryAlt } from "react-icons/bi";
import { BsCardChecklist } from "react-icons/bs";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate(); // Initialize useNavigate

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  // Function to handle navigation and close sidebar after clicking a menu item
  const handleNavigation = (path) => {
    navigate(path); // Navigate to the specified path
    setIsOpen(false); // Close the sidebar
  };

  return (
    <>
      {/* Hamburger Menu for Mobile */}
      <button
        onClick={toggleSidebar}
        className="lg:hidden text-white p-4 fixed top-2 left-4 z-50 bg-gray-800 rounded-md shadow-lg"
      >
        {isOpen ? <AiOutlineClose size={24} /> : <AiOutlineMenu size={24} />}
      </button>

      {/* Sidebar */}
      <aside
        className={`bg-gray-900 text-white w-64 h-auto fixed top-0 left-0 transition-transform duration-300 z-40 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } lg:translate-x-0 lg:relative`}
      >
        <div className="p-6">
          <h2 className="font-bold text-xl">Menu</h2>
        </div>
        <ul className="space-y-3 px-6">
          <li
            className="flex items-center space-x-3 cursor-pointer hover:bg-gray-700 p-3 rounded"
            onClick={() => handleNavigation("/")}
          >
            <AiOutlineHome className="text-lg" />
            <span>Home</span>
          </li>
          <li
            className="flex items-center space-x-3 cursor-pointer hover:bg-gray-700 p-3 rounded"
            onClick={() => handleNavigation("/test")}
          >
            <BsCardChecklist className="text-lg" />
            <span>Rendered Questions</span>
          </li>
          <li
            className="flex items-center space-x-3 cursor-pointer hover:bg-gray-700 p-3 rounded"
            onClick={() => handleNavigation("/archived")}
          >
            <AiOutlineFolder className="text-lg" />
            <span>Archived Tests</span>
          </li>
          <li
            className="flex items-center space-x-3 cursor-pointer hover:bg-gray-700 p-3 rounded"
            onClick={() => handleNavigation("/quizzes")}
          >
            <BiCategoryAlt className="text-lg" />
            <span>Socratease Quizzes</span>
          </li>
          <li
            className="flex items-center space-x-3 cursor-pointer hover:bg-gray-700 p-3 rounded"
            onClick={() => handleNavigation("/usage")}
          >
            <AiOutlinePieChart className="text-lg" />
            <span>Usage</span>
          </li>
          <li
            className="flex items-center space-x-3 cursor-pointer hover:bg-gray-700 p-3 rounded"
            onClick={() => handleNavigation("/team")}
          >
            <AiOutlineTeam className="text-lg" />
            <span>Team</span>
          </li>
        </ul>
        <div className="mt-auto px-6 py-4">
          <div className="bg-gray-700 p-4 rounded">
            <p className="text-sm font-semibold">Balance</p>
            <p className="text-xl font-bold">Tests Remaining: 23</p>
          </div>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
