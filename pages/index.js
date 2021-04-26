import Content from "../components/Content"
import NavigationBar from "../components/NavigationBar"
import Footer from "../components/Footer"

const btn1 = {
  text: "Click to Start",
  uri: "/quiz",
}

export default function Home() {
  return (
    <div className="box">
      <div className="row header">
        <NavigationBar />
      </div>
      <div className="row content">
        <Content
          title={"Application Title"}
          text={
            "Lorem Ipsum is simply dummy text of the printing and type setting industry. Lorem"
          }
          imageUri={"/main-people.webp"}
          btn1={btn1}
        />
      </div>
      <Footer />
    </div>
  )
}
