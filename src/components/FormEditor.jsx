import { useState } from "react";
import Question1 from "../questions/Question1";
import Question2 from "../questions/Question2";
import Question3 from "../questions/Question3";
import { IoIosAddCircleOutline } from "react-icons/io";
import { CiTrash } from "react-icons/ci";

const FormEditor = () => {
  const [questionList, setQuestionList] = useState([
    { id: 1, type: "Question1" },
    { id: 2, type: "Question2" },
    { id: 3, type: "Question3" },
  ]);
  const [questionsState, setQuestionsState] = useState([]);

  const handleQuestionClone = (id, type) => {
    const newQuestion = { id: Date.now(), type }; // Generate a new question with a unique id
    const index = questionList.findIndex((q) => q.id === id);
    const updatedList = [
      ...questionList.slice(0, index + 1),
      newQuestion,
      ...questionList.slice(index + 1),
    ];
    setQuestionList(updatedList);
  };

  const handleSave = () => {
    // Add your save functionality here (e.g., send data to API or log to console)
    console.log("Saved Questions:", questionList);
  };

  const renderQuestion = (question) => {
    switch (question.type) {
      case "Question1":
        return <Question1 setQuestionsState={setQuestionsState} />;
      case "Question2":
        return <Question2 setQuestionsState={setQuestionsState} />;
      case "Question3":
        return <Question3 setQuestionsState={setQuestionsState} />;
      default:
        return null;
    }
  };

  return (
    <div className="p-5">
      {questionList.map((question) => (
        <div key={question.id} className="relative flex mt-5">
          <div className="flex-1">{renderQuestion(question)}</div>
          <div className="absolute top-0 right-[-50px] transform translate-y-0 flex flex-col gap-2 p-2 mr-40 mt-28">
            <IoIosAddCircleOutline
              onClick={() => handleQuestionClone(question.id, question.type)}
              size={28}
              className="cursor-pointer"
            />
            <CiTrash size={28} className="cursor-pointer" />
          </div>
        </div>
      ))}

      {/* Save button */}
      <div className="flex justify-center mt-8">
        <button
          onClick={handleSave}
          className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded shadow-lg transition duration-300 ease-in-out"
        >
          Save
        </button>
      </div>
    </div>
  );
};

export default FormEditor;
