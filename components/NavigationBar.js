import { useRouter } from "next/router"
import Link from "next/link"

export default function NavigationBar(props) {
  const router = useRouter()
  const styles = {}

  if (props.hide) styles.display = "none"

  const backToHome = (e) => {
    e.preventDefault()
    router.push("/")
  }
  return (
    <nav className="nav">
      <div className="nav__logo" onClick={backToHome}>
        <img src="/logo.webp" alt="logo" />
      </div>

      <div className="nav__item about" style={styles}>
        <Link href={"/about"} passHref>
          <a>About site</a>
        </Link>
      </div>
    </nav>
  )
}
