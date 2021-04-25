import Link from "next/link"
import { useRouter } from "next/router"

export default function Footer() {
  const router = useRouter()

  const toAbout = (e) => {
    e.preventDefault()
    router.push("/about")
  }

  return (
    <div className="row footer">
      <Link href={"/about"} passHref>
        <a className="about">About site</a>
      </Link>
    </div>
  )
}
