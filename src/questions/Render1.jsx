import React from 'react';

const Render1 = () => {
  return (
    <div className="p-6 bg-white rounded-lg shadow-md w-[90%] sm:w-[80%] lg:w-[70%] mx-auto flex flex-col gap-4 ml-12">
      {/* Header Section */}
      <div className="flex justify-between items-center">
        <h2 className="text-lg font-semibold text-gray-700">Question 1</h2>
        <div className="flex gap-2">
          <button className="p-1 w-8 h-8 rounded-full bg-gray-200 flex justify-center items-center hover:bg-gray-300">
            ?
          </button>
          <button className="p-1 w-8 h-8 rounded-full bg-gray-200 flex justify-center items-center hover:bg-gray-300">
            📌
          </button>
        </div>
      </div>

      {/* Answer Options */}
      <div className="flex flex-col gap-6 justify-center items-center">
        {/* Answers Row */}
        <div className="flex gap-4">
          <button className="px-4 py-2 text-sm rounded-full bg-gray-100 border hover:bg-gray-200">ans 2</button>
          <button className="px-4 py-2 text-sm rounded-full bg-gray-100 border hover:bg-gray-200">ans 1</button>
        </div>

        {/* Categories Section */}
        <div className="flex justify-center items-center gap-6 mt-6">
          {/* Category 1 */}
          <div className="flex flex-col items-center gap-4">
            <div className="px-4 py-2 text-sm bg-pink-200 rounded-lg text-center">cat1</div>
            <div className="w-28 h-28 bg-pink-300 rounded-md"></div>
          </div>

          {/* Category 2 */}
          <div className="flex flex-col items-center gap-4">
            <div className="px-4 py-2 text-sm bg-yellow-200 rounded-lg text-center">cat2</div>
            <div className="w-28 h-28 bg-yellow-300 rounded-md"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Render1;
