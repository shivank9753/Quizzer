import React from "react";
import SearchTab from "../../UI/SearchTab";

const QuizBody = () => {
  return (
    <div className="mt-5 p-2 bg-white rounded-md shadow-sm flex justify-between items-center">
      QuizName
      <SearchTab />
    </div>
  );
};

export default QuizBody;
