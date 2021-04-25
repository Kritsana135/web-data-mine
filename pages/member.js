import Member from "../components/Member"
import Footer from "../components/Footer"
import NavigationBar from "../components/NavigationBar"

const btn2 = {
  text: "Back To Home",
  uri: "/",
}

const btn1 = {
  text: "See About",
  uri: "/about",
}

const memberName = [
  `60050169 ณัฐรินทร์ ศิระศักดิ์ชัย`,
  `60050174 นายดุลยุตม์ ทับทิมทอง`,
  `61050133 กฤษฎา สุริยจันทร์`,
  `61050135 กฤษณะ เซ่งย่อง`,
  `61050323 อุไรวรรณ จันทร์ส่อง`,
]

export default function result() {
  return (
    <div className="box">
      <div className="row header">
        <NavigationBar hide={true} />
      </div>
      <div className={`row content`}>
        <Member
          title={"About Site"}
          texts={memberName}
          multipleLine={true}
          imageUri={"/member.png"}
          btn1={btn1}
          btn2={btn2}
        />
      </div>
      <Footer />
    </div>
  )
}
