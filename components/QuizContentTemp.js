import { useRouter } from "next/router"
import { useState } from "react"
import Quiz from "../styles/quiz.module.css"
import MultiSelectQuiz from "./MultiSelectQuiz"
import SelectQuiz from "./SelectQuiz"
const axios = require("axios")
const FormData = require("form-data")

export default function QuizContentTemp(props) {
  const router = useRouter()
  const [answer, setAnswer] = useState([])
  const [current, setCurrent] = useState(0)
  const [doNo, setDoNo] = useState(0)
  const styles = {}

  if (props.imageUri) styles.backgroundImage = `url(${props.imageUri})`

  const changeCurrent = async (value) => {
    const sum = current + value

    if (
      (answer[current] === undefined ||
        (answer[current] &&
          answer[current][props.quiz[current].key].length === 0)) &&
      sum >= 0 &&
      value != -1
    ) {
      return
    }
    if (sum >= 0 && sum < props.quiz.length) {
      setDoNo(sum)
      return setCurrent(sum)
    }
    if (sum === props.quiz.length) {
      console.log("answer", answer)
      // let data = new FormData()
      let temp = {}
      answer.forEach((element) => {
        temp = {
          ...temp,
          ...element,
        }
      })

      const formdata = new FormData()
      for (let key in temp) {
        console.log(key, temp[key], Array.isArray(temp[key]))
        if (Array.isArray(temp[key])) {
          for (let checkbox in temp[key]) {
            console.log(key, checkbox)
            formdata.append(key, temp[key][checkbox])
          }
        } else {
          formdata.append(key, temp[key])
        }
      }

      const requestOptions = {
        method: "POST",
        body: formdata,
        redirect: "follow",
      }

      fetch(`${process.env.NEXT_PUBLIC_API_URI}/predict`, requestOptions)
        .then((response) => response.text())
        .then(async (result) => {
          result = JSON.parse(result)
          await router.push(`/result/${result.result}`)
        })
        .catch((error) => console.log("error", error))
    }
  }

  const addAnswer = (quiz, item) => {
    let newAnswer = [...answer] // copy array
    newAnswer[current] = { [quiz.key]: item.value }
    setAnswer(newAnswer)
  }

  const addAnswerMulti = (quiz, item) => {
    let newAnswer = [...answer] // copy array
    if (!newAnswer[current]) newAnswer[current] = { [quiz.key]: [item.value] }
    else {
      if (newAnswer[current][quiz.key].includes(item.value))
        newAnswer[current][quiz.key] = newAnswer[current][quiz.key].filter(
          (ele) => ele !== item.value
        )
      else newAnswer[current][quiz.key].push(item.value)
    }
    setAnswer(newAnswer)
  }

  const selectComponent = (quiz) => {
    switch (quiz.type) {
      default:
      case "dropdown":
        return (
          <SelectQuiz
            quiz={quiz}
            answer={answer}
            current={current}
            addAnswer={addAnswer}
          />
        )

      case "checkbox":
        return (
          <MultiSelectQuiz
            quiz={quiz}
            answer={answer}
            current={current}
            addAnswer={addAnswerMulti}
          />
        )
    }
  }
  return (
    <>
      <div
        id={`${Quiz.clearPadding}`}
        className={`col ${Quiz.expandCol}  ${Quiz.colWeb2}`}
      >
        <p className={`app-text ${Quiz.appText}`}>
          {props.quiz[current].question}
        </p>
        <div className={`${Quiz.groupChoice}`}>
          {selectComponent(props.quiz[current])}
        </div>
        <div className={`group ${Quiz.content}`}>
          <button className="btn btn-2" onClick={() => changeCurrent(-1)}>
            {current === 0 ? "กลับหน้าหลัก" : "ก่อนหน้า"}
          </button>
          <button
            className={`btn ${
              answer[current] === undefined ||
              !answer[current][props.quiz[current].key].length
                ? `${Quiz.disableBtn}`
                : null
            }`}
            onClick={() => changeCurrent(1)}
          >
            {current + 1 === props.quiz.length ? "Submit" : "ถัดไป"}
          </button>
        </div>
        <div className={`${Quiz.container}`}>
          <div className={`${Quiz.progress}`}>
            <div
              className={`${Quiz.progressBar}`}
              style={{ width: `${(doNo * 100) / props.quiz.length}%` }}
            ></div>
          </div>
        </div>
      </div>
      <div
        className={`col ${Quiz.hideBg} ${Quiz.colWeb1}`}
        style={styles}
      ></div>
    </>
  )
}
