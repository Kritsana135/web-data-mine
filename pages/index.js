import Content from "../components/Content"
import NavigationBar from "../components/NavigationBar"
import Footer from "../components/Footer"
import Head from "next/head"

const btn1 = {
  text: "เริ่มการแนะนำ",
  uri: "/quiz",
}

export default function Home() {
  return (
    <div className="box">
      <Head>
        <title>Framework Recomendation</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <div className="row header">
        <NavigationBar />
      </div>
      <div className="row content">
        <Content
          title={"Frontend FrameWork Recomendation"}
          text={
            "แนะนำ web frontend framework ที่เหมาะสมสำหรับคุณ"
          }
          imageUri={"/main-people.webp"}
          btn1={btn1}
        />
      </div>
      <Footer />
    </div>
  )
}
