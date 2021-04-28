export default function SelectQuiz({
  quiz = {},
  answer = [],
  current = 0,
  addAnswer = () => {},
}) {
  return (
    <div className="groupChoice  ">
      {quiz.answer.map((item, index) => {
        return (
          <button
            className={`${
              answer[current] && item.value === answer[current][quiz.key]
                ? "btn-selected"
                : ""
            } p-1`}
            key={item.value}
            onClick={() => addAnswer(quiz, item)}
          >
            {item.label}
          </button>
        );
      })}
    </div>
  );
}
