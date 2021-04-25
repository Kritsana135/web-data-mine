import { useRouter } from "next/router"
import Content from "../../components/Content"
import Footer from "../../components/Footer"
import NavigationBar from "../../components/NavigationBar"
import styles from "../../styles/result.module.css"

const btn1 = {
  text: "Learn More",
  uri: "/member",
}

const btn2 = {
  text: "Predict Again",
  uri: "/quiz",
}

export default function result() {
  const router = useRouter()
  return (
    <div className="box">
      <div className="row header">
        <NavigationBar />
      </div>
      <div className={`row content ${styles.contentMobile}`}>
        <Content
          title={`คุณเหมาะกับ : ${router.query.result}`}
          text={
            "Lorem Ipsum is simply dummy text of the printing and type setting industry. Lorem"
          }
          imageUri={"/result-people.png"}
          btn1={btn1}
          btn2={btn2}
        />
      </div>
      <Footer />
    </div>
  )
}
