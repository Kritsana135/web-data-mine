import QuizContent from "../components/QuizContent"
import QuizContentTemp from "../components/QuizContentTemp"
import Footer from "../components/Footer"
import NavigationQuiz from "../components/NavigationQuiz"
import Quiz from "../styles/quiz.module.css"
import Head from "next/head"

const quiz = [
  {
    question: "คุณอายุเท่าไหร่?",
    answer: [
      { value: "1000", label: "น้อยกว่า 18" },
      { value: "0100", label: "18-23" },
      { value: "0010", label: "24-29" },
      { value: "0001", label: "มากกกว่า 29" },
    ],
    key: "age(y)",
    type: "dropdown",
  },
  {
    question: "คุณประกอบอาชีพอะไร?",
    answer: [
      { value: "1000000", label: "นักเรียน" },
      { value: "0100000", label: "นักศึกษาสาขาที่เกี่ยวข้องกับด้าน IT" },
      { value: "0010000", label: "นักศึกษาสาขาที่ไม่เกี่ยวข้องกับด้าน IT" },
      { value: "0001000", label: "อาชีพด้าน IT ที่เกี่ยวกับเว็บไซต์" },
      { value: "0000100", label: "อาชีพด้าน IT ที่ไม่เกี่ยวข้องกับเว็บไซต์" },
      { value: "0000010", label: "อาชีพที่ไม่เกี่ยวข้องกับด้าน IT" },
      { value: "0000001", label: "ว่างงาน" },
    ],
    key: "career",
    type: "dropdown",
  },
  {
    question: "คุณมีประสบการณ์ในการเขียนเว็บมานานเท่าไร?",
    answer: [
      { value: "1000", label: "น้อยกว่า 1 ปี" },
      { value: "0100", label: "1-5 ปี" },
      { value: "0010", label: "6-10 ปี" },
      { value: "0001", label: "มากกว่า 10 ปี" },
    ],
    key: "exp(y)",
    type: "dropdown",
  },
  {
    question: "ภาษาที่ท่านสะดวกสำหรับการเรียนรู้? (ตอบได้มากกว่า 1 คำตอบ)",
    answer: [
      { value: "2", label: "ภาษาไทย" },
      { value: "1", label: "ภาษาอังกฤษ" },
    ],
    key: "language",
    type: "checkbox",
  },
  {
    question: "ท่านสามารถเขียนภาษาใดต่อไปนี้ได้บ้าง? (ตอบได้มากกว่า 1 คำตอบ)",
    answer: [
      { value: "8", label: "JavaScript" },
      { value: "4", label: "HTML" },
      { value: "2", label: "CSS" },
      { value: "1", label: "TypeScript" },
    ],
    key: "web_pro_lang",
    type: "checkbox",
  },
  {
    question: "คุณต้องการใช้ UI Library สำหรับการสร้างเว็บมากน้อยเพียงใด?",
    answer: [
      { value: "100", label: "ใช้ UI Library ทั้งหมด" },
      { value: "010", label: "ใช้ UI Library บางส่วน" },
      { value: "001", label: "ไม่ใช้ UI Library เลย (เขียนโค้ดเองทั้งหมด)" },
    ],
    key: "UI_Libs",
    type: "dropdown",
  },

  {
    question: "คุณเคยสร้างเว็บไซต์มาก่อนหรือไม่?",
    answer: [
      { value: "1", label: "เคย" },
      { value: "0", label: "ไม่เคย" },
    ],
    key: "front_dev",
    type: "dropdown",
  },

  {
    question:
      "คุณสะดวกที่จะเรียนรู้ Web Frontend Framework ในรูปแบบใด? (ตอบได้มากกว่า 1 คำตอบ)",
    answer: [
      { value: "8", label: "เรียนรู้โดยมีผู้เชี่ยวชาญคอยสอนและให้คำแนะนำ" },
      { value: "4", label: "เรียนรู้จากสื่อ มีเดีย เช่น วิดีโอจาก youtube" },
      {
        value: "2",
        label:
          "เรียนรู้โดยการหาข้อมูลด้วยตนเองเช่น การอ่าน document จาก อินเตอร์เน็ต",
      },
      { value: "1", label: "เรียนรู้จาก course สอนออนไลน์ต่าง ๆ" },
    ],
    key: "learning_src",
    type: "checkbox",
  },

  {
    question:
      "คุณต้องการใช้เวลาสำหรับเรียนรู้ Web Frontend Framework นานเท่าไร?",
    answer: [
      { value: "1000", label: "น้อยกว่า 1 เดือน" },
      { value: "0100", label: "1-6 เดือน" },
      { value: "0010", label: "7 เดือน - 1 ปี" },
      { value: "0001", label: "มากกว่า 1 ปี" },
    ],
    key: "duration(m)",
    type: "dropdown",
  },
  {
    question: "คุณให้ความสำคัญกับความต้องการของตลาดมากน้อยเพียงใด?",
    answer: [
      { value: "3", label: "มาก" },
      { value: "2", label: "ปานกลาง" },
      { value: "1", label: "น้อย" },
    ],
    key: "factor_market_needs",
    type: "dropdown",
  },

  {
    question: "คุณให้ความสำคัญกับค่าตอบแทนมากน้อยเพียงใด?",
    answer: [
      { value: "3", label: "มาก" },
      { value: "2", label: "ปานกลาง" },
      { value: "1", label: "น้อย" },
    ],
    key: "factor_compensation",
    type: "dropdown",
  },

  {
    question: "คุณต้องการสร้างเว็บที่เน้นการใช้งานหรือเน้นความสวยงาม?",
    answer: [
      { value: "100", label: "ความสวยงาม" },
      { value: "010", label: "การใช้งาน" },
      { value: "001", label: "ทั้งคู่" },
    ],
    key: "website_function_present",
    type: "dropdown",
  },

  {
    question: "คุณต้องการสร้างเว็บที่มีการนำเสนอเนื้อหามากน้อยเพียงใด?",
    answer: [
      { value: "3", label: "มาก" },
      { value: "2", label: "ปานกลาง" },
      { value: "1", label: "น้อย" },
    ],
    key: "website_content",
    type: "dropdown",
  },
  {
    question: "คุณต้องการสร้างเว็บที่มีการใช้กราฟิกมากน้อยเพียงใด?",
    answer: [
      { value: "3", label: "มาก" },
      { value: "2", label: "ปานกลาง" },
      { value: "1", label: "น้อย" },
    ],
    key: "website_graphics",
    type: "dropdown",
  },
  {
    question: "คุณต้องการสร้างเว็บที่มี Function การทำงานมากน้อยเพียงใด?",
    answer: [
      { value: "3", label: "มาก" },
      { value: "2", label: "ปานกลาง" },
      { value: "1", label: "น้อย" },
    ],
    key: "website_functions",
    type: "dropdown",
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
          <QuizContentTemp
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
