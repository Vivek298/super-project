
import Question1 from "../questions/Question1";
import Question2 from "../questions/Question2";
import Question3 from "../questions/Question3";

const FormEditor = () => {
  return (
    
      <div>
        {/* Question 1 */}
        <Question1 />

        {/* Separator Section */}
        <div className="my-8 border-t-2 border-gray-300"></div>

        {/* Question 2 */}
        <Question2 />

        <div className="my-8 border-t-2 border-gray-300"></div>

        <Question3 />

      </div>
    
  );
};

export default FormEditor;
