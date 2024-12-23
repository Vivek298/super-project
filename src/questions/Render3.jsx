import React, { useState } from 'react';

const Render3 = () => {
  const [answeredQuestions, setAnsweredQuestions] = useState(2);
  const [unansweredQuestions, setUnansweredQuestions] = useState(1);
  const [markedForReview, setMarkedForReview] = useState(0);

  return (
    <div className="flex flex-col lg:flex-row gap-8 p-6 bg-gray-100 min-h-screen">
      {/* Question Section */}
      <div className="bg-white p-6 rounded-lg shadow-lg w-full lg:w-3/4 flex flex-col gap-4">
        <h2 className="text-xl font-semibold text-gray-700">Question 3</h2>
        <h3 className="text-lg font-bold text-gray-800">The Water Cycle</h3>
        <p className="text-gray-600">
          Water is essential for life on Earth. It helps to regulate the planet's temperature,
          shapes its landscapes, and provides habitat for millions of species. What makes water
          so special is the water cycle, also known as the hydrological cycle.
        </p>
        <p className="text-gray-600">
          The water cycle describes the continuous movement of water on, above, and below the
          surface of the Earth. Water can exist in three states: liquid, gas, and solid. As the
          Sun heats Earth's surface, water in rivers, lakes, and oceans evaporates and turns
          into vapor or water gas in the clouds...
        </p>
        <div>
          <details className="border border-gray-300 rounded-md bg-gray-50 px-4 py-2">
            <summary className="font-semibold cursor-pointer">Question 3.1</summary>
            <p className="mt-4">According to the passage, one key feature of the water cycle is that:</p>
            <div className="flex flex-col gap-2 mt-2">
              <label className="flex items-center gap-2">
                <input type="radio" name="q3-1" className="text-purple-500 focus:ring-purple-500" />
                <span>Water evaporates from the surface into the atmosphere.</span>
              </label>
              <label className="flex items-center gap-2">
                <input type="radio" name="q3-1" className="text-purple-500 focus:ring-purple-500" />
                <span>Water in rivers remains constant.</span>
              </label>
              <label className="flex items-center gap-2">
                <input type="radio" name="q3-1" className="text-purple-500 focus:ring-purple-500" />
                <span>Precipitation only occurs on land.</span>
              </label>
            </div>
          </details>
        </div>
      </div>

      {/* Filter Section */}
      
    </div>
  );
};

export default Render3;
