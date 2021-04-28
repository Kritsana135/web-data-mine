import multilSelect from "../styles/multiSelectQuiz.module.css"
export default function MultiSelectQuiz({
  quiz = {},
  answer = [],
  current = 0,
  addAnswer = () => {},
}) {
  return (
    <div className="groupChoice  multi">
      <div className={multilSelect.row}>
        {quiz.answer.map((item, index) => {
          return (
            <div className="column" key={index}>
              <button
                className={`${
                  answer[current] &&
                  answer[current][quiz.key].includes(item.value)
                    ? "btn-selected"
                    : ""
                } p-1`}
                key={item.value}
                onClick={() => addAnswer(quiz, item)}
              >
                {item.label}
              </button>
            </div>
          )
        })}
      </div>
    </div>
  )
}
