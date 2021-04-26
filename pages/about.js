import Content from "../components/Content"
import Footer from "../components/Footer"
import NavigationBar from "../components/NavigationBar"
import Head from 'next/head'

const btn2 = {
  text: "กลับหน้าหลัก",
  uri: "/",
}

const btn1 = {
  text: "ดูสมาชิก",
  uri: "/member",
}

export default function result() {
  return (
    <div className="box">
      <Head>
        <title>About Site</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <div className="row header">
        <NavigationBar hide={true} />
      </div>
      <div className={`row content`}>
        <Content
          title={"About Site"}
          text={
            "เว็บไซต์นี้เป็นส่วนหนึ่งของรายวิชา 05506212:DATA MINING TECHNIQUES สร้างขึ้นเพื่อแนะนำการเลือกใช้ Frontend Framework  ที่เหมาะสมกับผู้ใช้งาน"
          }
          imageUri={"/about.webp"}
          btn1={btn1}
          btn2={btn2}
        />
      </div>
      <Footer />
    </div>
  )
}
