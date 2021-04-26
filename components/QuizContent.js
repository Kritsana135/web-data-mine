import { useRouter } from "next/router"
import { useState } from "react"
import Quiz from "../styles/quiz.module.css"
const axios = require("axios")
const FormData = require("form-data")

export default function Content(props) {
  const router = useRouter()
  const [answer, setAnswer] = useState([])
  const [current, setCurrent] = useState(0)
  const [doNo, setDoNo] = useState(0)
  const styles = {}
  const selectBtn = {
    background: "#FFE8CD",
    border: "3px solid #F8931E",
    color: "#455A64",
  }

  if (props.imageUri) styles.backgroundImage = `url(${props.imageUri})`

  const changeCurrent = async (value) => {
    const sum = current + value
    console.log(sum)
    if (answer[current] === undefined && sum >= 0 && value != -1) {
      return
    }
    if (sum >= 0 && sum < props.quiz.length) {
      setDoNo(sum)
      return setCurrent(sum)
    }
    if (sum === props.quiz.length) {
      let data = new FormData()
      answer.map((item, index) => {
        data.append(props.quiz[index].key, props.quiz[index].answer[item].value)
      })
      const config = {
        method: "post",
        url: `${process.env.NEXT_PUBLIC_API_URI}/predict`,
        headers: { "Content-Type": "multipart/form-data" },
        data: data,
      }

      const response = await axios(config)
      const result = response.data.result
      return router.push(`/result/${result}`)
    }
    router.push("/")
  }

  const addAnswer = (key) => {
    console.log(key)
    let newAnswer = [...answer] // copy array
    newAnswer[current] = key
    setAnswer(newAnswer)
  }

  return (
    <>
      {console.log("doNo", doNo)}
      {console.log("disable", answer[current])}
      <div
        id={`${Quiz.clearPadding}`}
        className={`col ${Quiz.expandCol}  ${Quiz.colWeb2}`}
      >
        <p className={`app-text ${Quiz.appText}`}>
          {props.quiz[current].question}
        </p>
        <div className={`${Quiz.groupChoice}`}>
          {props.quiz[current].answer.map((item, index) => {
            if (index === answer[current]) {
              return (
                <button
                  style={selectBtn}
                  key={item.value}
                  onClick={() => addAnswer(index)}
                >
                  <p>{item.label}</p>
                </button>
              )
            }
            return (
              <button key={item.value} onClick={() => addAnswer(index)}>
                <p>{item.label}</p>
              </button>
            )
          })}
        </div>
        <div className={`group ${Quiz.content}`}>
          <button className="btn btn-2" onClick={() => changeCurrent(-1)}>
            {current === 0 ? "กลับหน้าหลัก" : "Back"}
          </button>
          <button
            className={`btn ${
              answer[current] === undefined ? `${Quiz.disableBtn}` : null
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
