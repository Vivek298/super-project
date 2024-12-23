import React from "react";

const Render2 = () => {
  return (
    <div className="p-4 bg-white rounded-lg shadow-md w-[90%] sm:w-[80%] lg:w-[70%] mx-auto flex flex-col gap-4 ml-12">
      {/* Question 2 Section */}
      <h2 className="text-lg font-semibold text-gray-700">Question 2</h2>

      {/* Options and Sentence Section */}
      <div className="flex flex-col gap-4">
        {/* Options Section */}
        <div className="flex gap-4 justify-start">
          <div className="px-4 py-2 bg-purple-200 text-purple-900 rounded-full font-medium text-sm cursor-pointer shadow">
            fence
          </div>
          <div className="px-4 py-2 bg-purple-200 text-purple-900 rounded-full font-medium text-sm cursor-pointer shadow">
            brown
          </div>
        </div>

        {/* Sentence Section */}
        <div className="flex items-center gap-2">
          <span className="px-4 py-2 bg-gray-100 text-gray-700 rounded-md border border-gray-300 shadow">
            A quick
          </span>
          <span className="px-4 py-2 bg-gray-100 text-gray-700 rounded-md border border-gray-300 shadow">
            fox jumped over a
          </span>
        </div>
      </div>
    </div>
  );
};

export default Render2;
