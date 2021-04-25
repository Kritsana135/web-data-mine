import Content from "../components/Content"
import Footer from "../components/Footer"
import NavigationBar from "../components/NavigationBar"

const btn2 = {
  text: "Back To Home",
  uri: "/",
}

const btn1 = {
  text: "See Member",
  uri: "/member",
}

export default function result() {
  return (
    <div className="box">
      <div className="row header">
        <NavigationBar hide={true} />
      </div>
      <div className={`row content`}>
        <Content
          title={"About Site"}
          text={
            "Lorem Ipsum is simply dummy text of the printing and type setting industry. Lorem"
          }
          imageUri={"/about.png"}
          btn1={btn1}
          btn2={btn2}
        />
      </div>
      <Footer />
    </div>
  )
}
