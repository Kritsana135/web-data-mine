import { useRouter } from "next/router"
import Quiz from "../styles/quiz.module.css"

export default function NavigationBar(props) {
  const router = useRouter()
  const styles = {}

  if (props.hide) styles.display = "none"

  const backToHome = (e) => {
    e.preventDefault()
    router.push("/")
  }
  return (
    <nav className={`nav ${Quiz.nav}`}>
      <div className={`nav__logo ${Quiz.centerLogo}`} onClick={backToHome}>
        <img
          src="/logo.webp"
          alt="logo"
          className={`nav__logo ${Quiz.centerLogo}`}
        />
      </div>
    </nav>
  )
}
