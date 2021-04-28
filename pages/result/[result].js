import { useRouter } from "next/router"
import Content from "../../components/Content"
import Footer from "../../components/Footer"
import NavigationBar from "../../components/NavigationBar"
import styles from "../../styles/result.module.css"

const btn1 = {
  text: "เรียนรู้เพิ่มเติม",
  uri: "/member",
}

const btn2 = {
  text: "แนะนำอีกครั้ง",
  uri: "/quiz",
}

const Frameworks = [
  {
    key: "Angular",
    description:
      "Angular สามารถสร้างทั้งหมดด้วย Typesciprt และยังมี execption มารองรับมันไว้ด้วย มีเอกสารรายละเอียดให้เรียนรู้ข้อมูลอย่างเจาะลึก และสถาปัตยกรรมที่สร้างขึ้นเป็นพิเศษให้รองรับการขยายขนาดของโปรเจกใหญ่ขึ้น",
    uri: "https://angular.io/",
  },
  {
    key: "React",
    description:
      "React เป็น Javascript library ที่ยอดเยี่ยมในการสร้าง SPA Application ไม่ว่าจะเป็นขนาดใดและขยายการรองรับในอนาคต ง่ายต่อการเรียนรู้ และการออกแบบที่ง่ายดาย",
    uri: "https://reactjs.org/",
  },
  {
    key: "Vue.js",
    description:
      "Vue.js มีคุณสมบัติในการช่วยเสริมความสามารถของ HTML block โดยมีความแตกต่างกันในแต่ละ Component เอกสารของ Vue.js จะพึ่งพาสถานการณ์เป็นหลักเพื่อให้นักพัฒนาสามารถเรียนรู้ได้ไว สามารถใช้ได้ทั้งแบบ SPA และ Web App ที่มีโครงสร้างซับซ้อน",
    uri: "https://vuejs.org/",
  },
  {
    key: "jQuery",
    description:
      "jQuery คือ JavaScript Library ซึ่งถูกออกแบบมาเพื่อให้การเขียน JavaScript นั้นมีความสะดวกและง่ายขึ้น เพราะว่าการนำ JavaScript เอาไปประยุกต์กับงานจำพวกเว็บ (Client-side JavaScript) นั้นเป็นสิ่งที่ยุ่งยาก",
    uri: "https://jquery.com/",
  },
]

export default function result() {
  const router = useRouter()
  const target = router.query.result
  let redirectUri = ""
  let description = ""
  Frameworks.forEach((item) => {
    if (item.key === target) {
      redirectUri = item.uri
      description = item.description
    }
  })


  return (
    <div className="box">
      <div className="row header">
        <NavigationBar />
      </div>
      <div className={`row content ${styles.contentMobile}`}>
        <Content
          title={`คุณเหมาะกับ : ${router.query.result}`}
          text={description}
          imageUri={"/result-people.webp"}
          btn1={{
            text: "เรียนรู้เพิ่มเติม",
            uri: redirectUri,
          }}
          btn2={btn2}
        />
      </div>
      <Footer />
    </div>
  )
}
