import { useState, useRef } from "react";
import ReactQuill from "react-quill";
import { useDrag, useDrop } from "react-dnd";
import "react-quill/dist/quill.snow.css";
import { IoIosAddCircleOutline } from "react-icons/io";
import { CiTrash } from "react-icons/ci";

const DRAG_TYPE = "ANSWER";

const Question2 = () => {
  const [preview, setPreview] = useState("A quick ___ fox jumped over a ___");
  const [sentence, setSentence] = useState(
    "A quick brown fox jumped over a fence"
  );
  const [answers, setAnswers] = useState([
    { text: "brown", selected: false },
    { text: "fence", selected: false },
  ]);
  const [newAnswer, setNewAnswer] = useState("");
  const [points, setPoints] = useState("");
  const [isEditorVisible, setIsEditorVisible] = useState(false);

  const quillRef = useRef(null);

  const handleUnderline = () => {
    const quill = quillRef.current.getEditor();
    const range = quill.getSelection();

    if (range && range.length > 0) {
      const selectedText = quill.getText(range.index, range.length).trim();

      if (
        selectedText &&
        !answers.some((answer) => answer.text === selectedText)
      ) {
        setAnswers([...answers, { text: selectedText, selected: false }]);
        const updatedPreview = preview.replace(
          new RegExp(`\\b${selectedText}\\b`, "g"),
          "___"
        );
        setPreview(updatedPreview);
        quill.format("underline", true);
      }
    }
  };

  const handleAddAnswer = (e) => {
    if (e.key === "Enter" && newAnswer.trim() !== "") {
      setAnswers([...answers, { text: newAnswer.trim(), selected: false }]);
      setNewAnswer("");
    }
  };

  const removeAnswer = (index) => {
    const removedAnswer = answers[index];
    const updatedAnswers = answers.filter((_, i) => i !== index);
    setAnswers(updatedAnswers);

    const restoredPreview = preview.replace("___", removedAnswer.text);
    setPreview(restoredPreview);
  };

  const moveAnswer = (dragIndex, hoverIndex) => {
    const draggedAnswer = answers[dragIndex];
    const updatedAnswers = [...answers];
    updatedAnswers.splice(dragIndex, 1); // Remove dragged item
    updatedAnswers.splice(hoverIndex, 0, draggedAnswer); // Insert at the new position
    setAnswers(updatedAnswers);
  };

  const toggleSelection = (index) => {
    const updatedAnswers = [...answers];
    updatedAnswers[index].selected = !updatedAnswers[index].selected;
    setAnswers(updatedAnswers);
  };

  return (
    <div className="flex flex-col gap-4 p-4 bg-gray-100 rounded-lg shadow-lg w-[90%] sm:w-[80%] lg:w-[70%] mx-auto ml-12 relative">
      <h2 className="text-lg font-semibold text-gray-700">Question 2</h2>

      <div className="flex flex-col gap-2">
        <label className="block text-sm font-medium text-gray-600">
          Preview*
        </label>
        <textarea
          value={preview}
          onChange={(e) => setPreview(e.target.value)}
          placeholder="Preview of the sentence"
          className="p-2 border border-gray-300 rounded-md"
          readOnly
        />
      </div>

      <div className="flex flex-col gap-2">
        <label className="block text-sm font-medium text-gray-600">
          Sentence*
        </label>
        <div
          className="p-2 border border-gray-300 rounded-md cursor-pointer"
          onClick={() => setIsEditorVisible(true)}
        >
          <div dangerouslySetInnerHTML={{ __html: sentence }} />
        </div>

        {isEditorVisible && (
          <div
            className="absolute top-16 left-4 z-50 bg-white border border-gray-300 rounded-lg shadow-lg p-2"
            style={{ width: "90%" }}
          >
            <ReactQuill
              ref={quillRef}
              value={sentence}
              onChange={setSentence}
              className="rounded-md"
            />
            <div className="mt-2 flex justify-between">
              <button
                onClick={handleUnderline}
                className="p-2 bg-blue-500 text-white rounded-md"
              >
                Underline
              </button>
              <button
                onClick={() => setIsEditorVisible(false)}
                className="p-2 bg-gray-500 text-white rounded-md"
              >
                Close
              </button>
            </div>
          </div>
        )}
      </div>

      <div className="flex flex-col gap-2 mt-2 w-[20%]">
        <label className="block text-sm font-medium text-gray-600">
          Correct Answers:
        </label>
        {answers.map((answer, index) => (
          <DraggableAnswer
            key={index}
            index={index}
            answer={answer}
            moveAnswer={moveAnswer}
            removeAnswer={() => removeAnswer(index)}
            toggleSelection={() => toggleSelection(index)}
          />
        ))}

        <input
          type="text"
          placeholder="Option (Optional)"
          value={newAnswer}
          onChange={(e) => setNewAnswer(e.target.value)}
          onKeyDown={handleAddAnswer}
          className="p-2 border border-gray-300 rounded-md"
        />
      </div>

      <div className="flex items-center gap-2 mt-4">
        <label className="block text-sm font-medium text-gray-600">
          Points
        </label>
        <input
          type="number"
          value={points}
          onChange={(e) => setPoints(e.target.value)}
          placeholder="Points"
          className="p-2 border border-gray-300 rounded-md w-20"
        />
      </div>
    </div>
  );
};

const DraggableAnswer = ({
  answer,
  index,
  moveAnswer,
  removeAnswer,
  toggleSelection,
}) => {
  const ref = useRef(null);

  const [, drag] = useDrag({
    type: DRAG_TYPE,
    item: { index },
  });

  const [, drop] = useDrop({
    accept: DRAG_TYPE,
    hover: (draggedItem) => {
      if (draggedItem.index !== index) {
        moveAnswer(draggedItem.index, index);
        draggedItem.index = index;
      }
    },
  });

  drag(drop(ref));

  return (
    <div className="flex items-center gap-2 my-1">
      <input
        type="checkbox"
        checked={answer.selected}
        onChange={toggleSelection}
        className="w-4 h-4"
      />

      <div
        ref={ref}
        className="flex items-center gap-2 p-2 bg-green-500 text-white rounded-md cursor-pointer flex-grow"
      >
        <span className="flex-grow">{answer.text}</span>
        <button
          onClick={removeAnswer}
          className="p-1 text-red-500"
          title="Remove Answer"
        >
          ❌
        </button>
      </div>
    </div>
  );
};

export default Question2;
