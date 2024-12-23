import React, { useState } from "react";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { IoIosAddCircleOutline } from "react-icons/io";
import { CiTrash } from "react-icons/ci";

const Question3 = () => {
  const [passage, setPassage] = useState("");
  const [points, setPoints] = useState("");
  const [questions, setQuestions] = useState([
    {
      id: 1,
      question:
        "According to the passage, one key feature of the water cycle is that:",
      options: [
        "Water evaporates from the surface into the atmosphere.",
        "Water only exists in liquid form.",
        "Water moves from the surface to deep underground.",
        "Water remains in the clouds forever.",
      ],
      selectedOption: null,
    },
  ]);

  const handleOptionChange = (questionId, optionIndex) => {
    setQuestions((prevQuestions) =>
      prevQuestions.map((q) =>
        q.id === questionId ? { ...q, selectedOption: optionIndex } : q
      )
    );
  };

  const addQuestion = () => {
    const newQuestion = {
      id: questions.length + 1,
      question: "",
      options: ["", "", "", ""],
      selectedOption: null,
    };
    setQuestions([...questions, newQuestion]);
  };

  return (
    <DndProvider backend={HTML5Backend}>
      <div className="p-4 bg-gray-100 rounded-lg shadow-lg w-[90%] sm:w-[80%] lg:w-[70%] mx-auto flex flex-col gap-4 ml-12 relative">
        {/* Question 3 Section */}
        <h2 className="text-lg font-semibold text-gray-700">Question 3</h2>

        {/* Passage Input Section */}
        <div className="flex flex-col gap-2">
          <label className="block text-sm font-medium text-gray-600">
            Passage
          </label>
          <div className="relative border border-gray-300 rounded-md">
            <textarea
              value={passage}
              onChange={(e) => setPassage(e.target.value)}
              className="w-full p-2"
              placeholder="Type passage here..."
            />
          </div>
        </div>

        {/* Comprehension Points Section */}
        <div className="flex items-center gap-2">
          <label className="block text-sm font-medium text-gray-600">
            Comprehension Points
          </label>
          <input
            type="number"
            value={points}
            onChange={(e) => setPoints(e.target.value)}
            placeholder="Points"
            className="p-2 border border-gray-300 rounded-md w-20"
          />
        </div>

        {/* MCQ Section */}
        {questions.map((question, index) => (
          <div key={question.id} className="flex flex-col gap-2 mt-4">
            <div className="flex items-center gap-2">
              <h3 className="text-base font-medium text-gray-700">
                Question {index + 1}
              </h3>
              <span className="text-sm bg-blue-100 text-blue-500 rounded-full px-2 py-1">
                MCQ
              </span>
            </div>
            <textarea
              value={question.question}
              onChange={(e) =>
                setQuestions((prevQuestions) =>
                  prevQuestions.map((q) =>
                    q.id === question.id
                      ? { ...q, question: e.target.value }
                      : q
                  )
                )
              }
              className="w-full p-2 border border-gray-300 rounded-md"
              placeholder="Type question here..."
            />

            {/* Options */}
            <div className="flex flex-col gap-2 mt-2">
              {question.options.map((option, optionIndex) => (
                <label key={optionIndex} className="flex items-center">
                  <input
                    type="radio"
                    name={`option-${question.id}`}
                    value={option}
                    checked={question.selectedOption === optionIndex}
                    onChange={() =>
                      handleOptionChange(question.id, optionIndex)
                    }
                    className="form-radio text-blue-500"
                  />
                  <input
                    type="text"
                    value={option}
                    onChange={(e) =>
                      setQuestions((prevQuestions) =>
                        prevQuestions.map((q) =>
                          q.id === question.id
                            ? {
                                ...q,
                                options: q.options.map((opt, i) =>
                                  i === optionIndex ? e.target.value : opt
                                ),
                              }
                            : q
                        )
                      )
                    }
                    className="ml-2 text-sm border-b border-gray-300"
                    placeholder={`Option ${optionIndex + 1}`}
                  />
                </label>
              ))}
            </div>
          </div>
        ))}

        {/* Add Question Button */}
        <button
          onClick={addQuestion}
          className="mt-4 p-2 bg-blue-500 text-white rounded-md"
        >
          + Add MCQ
        </button>
      </div>
    </DndProvider>
  );
};

export default Question3;
