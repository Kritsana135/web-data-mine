import QuizContent from "../components/QuizContent";
import QuizContentTemp from "../components/QuizContentTemp";
import Footer from "../components/Footer";
import NavigationQuiz from "../components/NavigationQuiz";
import Quiz from "../styles/quiz.module.css";
import Head from "next/head";

const quiz = [
  {
    question: "คุณอายุเท่าไหร่?",
    answer: [
      { value: "<18", label: "น้อยกว่า 18" },
      { value: "18-23", label: "18-23" },
      { value: "24-29", label: "24-29" },
      { value: ">29", label: "มากกกว่า 29" },
    ],
    key: "age(y)",
    type: "dropdown",
  },
  {
    question: "คุณประกอบอาชีพอะไร?",
    answer: [
      { value: "stud", label: "นักเรียน" },
      { value: "stit", label: "นักศึกษาสาขาที่เกี่ยวข้องกับด้าน IT" },
      { value: "stnm", label: "นักศึกษาสาขาที่ไม่เกี่ยวข้องกับด้าน IT" },
      { value: "crwb", label: "อาชีพด้าน IT ที่เกี่ยวกับเว็บไซต์" },
      { value: "crit", label: "อาชีพด้าน IT ที่ไม่เกี่ยวข้องกับเว็บไซต์" },
      { value: "crnm", label: "อาชีพที่ไม่เกี่ยวข้องกับด้าน IT" },
      { value: "unem", label: "ว่างงาน" },
    ],
    key: "career",
    type: "dropdown",
  },
  {
    question: "คุณมีประสบการณ์ในการเขียนเว็บมานานเท่าไร?",
    answer: [
      { value: "<1", label: "น้อยกว่า 1 ปี" },
      { value: "1-5", label: "1-5 ปี" },
      { value: "6-10", label: "6-10 ปี" },
      { value: ">10", label: "มากกว่า 10 ปี" },
    ],
    key: "exp(y)",
    type: "dropdown",
  },
  {
    question: "ท่านสามารถเขียนภาษาใดต่อไปนี้ได้บ้าง? (ตอบได้มากกว่า 1 คำตอบ)",
    answer: [
      { value: "th", label: "ภาษาไทย" },
      { value: "eng", label: "ภาษาอังกฤษ" },
    ],
    key: "language",
    type: "checkbox",
  },
  {
    question: "ภาษาที่ท่านสะดวกสำหรับการเรียนรู้? (ตอบได้มากกว่า 1 คำตอบ)",
    answer: [
      { value: "JavaScript", label: "JavaScript" },
      { value: "HTML", label: "HTML" },
      { value: "CSS", label: "CSS" },
      { value: "TypeScript", label: "TypeScript" },
    ],
    key: "web_pro_lang",
    type: "checkbox",
  },
  {
    question: "คุณต้องการใช้ UI Library สำหรับการสร้างเว็บมากน้อยเพียงใด?",
    answer: [
      { value: "libal", label: "ใช้ UI Library ทั้งหมด" },
      { value: "libpt", label: "ใช้ UI Library บางส่วน" },
      { value: "nolibrary", label: "ไม่ใช้ UI Library เลย (เขียนโค้ดเองทั้งหมด)" },
    ],
    key: "UI_Libs",
    type: "dropdown",
  },

  {
    question: "คุณเคยสร้างเว็บไซต์มาก่อนหรือไม่?",
    answer: [
      { value: "yes", label: "เคย" },
      { value: "no", label: "ไม่เคย" },
    ],
    key: "front_dev",
    type: "dropdown",
  },

  {
    question: "คุณสะดวกที่จะเรียนรู้ Web Frontend Framework ในรูปแบบใด? (ตอบได้มากกว่า 1 คำตอบ)",
    answer: [
      { value: "expert", label: "เรียนรู้โดยมีผู้เชี่ยวชาญคอยสอนและให้คำแนะนำ" },
      { value: "media", label: "เรียนรู้จากสื่อ มีเดีย เช่น วิดีโอจาก youtube" },
      { value: "doc", label: "เรียนรู้โดยการหาข้อมูลด้วยตนเองเช่น การอ่าน document จาก อินเตอร์เน็ต" },
      { value: "course", label: "เรียนรู้จาก course สอนออนไลน์ต่าง ๆ" },
    ],
    key: "learning_src",
    type: "checkbox",
  },

  {
    question: "คุณต้องการใช้เวลาสำหรับเรียนรู้ Web Frontend Framework นานเท่าไร?",
    answer: [
      { value: "<1", label: "น้อยกว่า 1 เดือน" },
      { value: "1-6", label: "1-6 เดือน" },
      { value: "7-12", label: "7 เดือน - 1 ปี" },
      { value: ">12", label: "มากกว่า 1 ปี" },
    ],
    key: "duration(m)",
    type: "dropdown",
  },
  {
    question: "คุณให้ความสำคัญกับความต้องการของตลาดมากน้อยเพียงใด?",
    answer: [
      { value: "1", label: "น้อย" },
      { value: "2", label: "ปานกลาง" },
      { value: "3", label: "มาก" },
    ],
    key: "factor_market_needs",
    type: "dropdown",
  },

  {
    question: "คุณให้ความสำคัญกับค่าตอบแทนมากน้อยเพียงใด?",
    answer: [
      { value: "1", label: "น้อย" },
      { value: "2", label: "ปานกลาง" },
      { value: "3", label: "มาก" },
    ],
    key: "factor_compensation",
    type: "dropdown",
  },

  {
    question: "คุณต้องการสร้างเว็บที่เน้นการใช้งานหรือเน้นความสวยงาม?",
    answer: [
      { value: "attractive", label: "ความสวยงาม" },
      { value: "usability", label: "การใช้งาน" },
      { value: "both", label: "ทั้งคู่" },
    ],
    key: "website_function_present",
    type: "dropdown",
  },

  {
    question: "คุณต้องการสร้างเว็บที่มีการนำเสนอเนื้อหามากน้อยเพียงใด?",
    answer: [
      { value: "1", label: "น้อย" },
      { value: "2", label: "ปานกลาง" },
      { value: "3", label: "มาก" },
    ],
    key: "website_content",
    type: "dropdown",
  },
  {
    question: "คุณต้องการสร้างเว็บที่มีการใช้กราฟิกมากน้อยเพียงใด?",
    answer: [
      { value: "1", label: "น้อย" },
      { value: "2", label: "ปานกลาง" },
      { value: "3", label: "มาก" },
    ],
    key: "website_graphics",
    type: "dropdown",
  },
  {
    question: "คุณต้องการสร้างเว็บที่มี Function การทำงานมากน้อยเพียงใด?",
    answer: [
      { value: "1", label: "น้อย" },
      { value: "2", label: "ปานกลาง" },
      { value: "3", label: "มาก" },
    ],
    key: "website_functions",
    type: "dropdown",
  },
];

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
  );
}
