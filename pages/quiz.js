import QuizContent from "../components/QuizContent"
import Footer from "../components/Footer"
import NavigationQuiz from "../components/NavigationQuiz"
import Quiz from "../styles/quiz.module.css"
import Head from "next/head"

const quiz = [
  {
    question: "How long do you spend time on your phone daily?",
    answer: [
      { value: "001", label: "<5 hrs" },
      { value: "100", label: "5-8 hrs" },
      { value: "010", label: ">9 hrs" },
    ],
    key: "timespend",
  },
  {
    question: "What is your preferred phone size?",
    answer: [
      { value: "001", label: "<5'" },
      { value: "100", label: "5'-6'" },
      { value: "010", label: ">6'" },
    ],
    key: "size",
  },
  {
    question: "What is your preferred phone unlocking method?",
    answer: [
      { value: "00100", label: "None" },
      { value: "00010", label: "Password" },
      { value: "10000", label: "Fingerprint" },
      { value: "00001", label: "Dot Pattern" },
      { value: "01000", label: "Face Regonition" },
    ],
    key: "unlock",
  },
  {
    question: "What is your preferred payment method?",
    answer: [
      { value: "01", label: "cash" },
      { value: "10", label: "credit cash" },
    ],
    key: "payment",
  },
  {
    question: "What is your gender?",
    answer: [
      { value: "100", label: "Male" },
      { value: "010", label: "Female" },
      { value: "001", label: "LGBTQ" },
    ],
    key: "gender",
  },
  {
    question: "How old are you?",
    answer: [
      { value: "00010", label: "Less than 13 Years Old" },
      { value: "01000", label: "13-21 Years Old" },
      { value: "10010", label: "22-40 Years Old" },
      { value: "00100", label: "41-59 Years Old" },
      { value: "00001", label: "More than 60 Years Old" },
    ],
    key: "age",
  },
  {
    question: "What is your current salary?",
    answer: [
      { value: "00001", label: "<15,000" },
      { value: "01000", label: "15,001-20,000" },
      { value: "00100", label: "20,001-25,000" },
      { value: "00010", label: "25,000" },
      { value: "10000", label: "Vary" },
    ],
    key: "salary",
  },
]

export default function quize() {
  return (
    <>
      <Head>
        <title>Quiz</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <div className={`row header ${Quiz.stackTop}`}>
        <NavigationQuiz />
      </div>
      <div className={`box ${Quiz.box}`}>
        <div className={`row content ${Quiz.content}`}>
          <QuizContent
            title={"How long you spend time to learning ?"}
            imageUri={"/main-people.webp"}
            quiz={quiz}
          />
        </div>
        <Footer />
      </div>
    </>
  )
}
