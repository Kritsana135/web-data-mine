import { useRouter } from "next/router"

export default function Content(props) {
  const router = useRouter()
  const styles = {}

  if (props.imageUri) styles.backgroundImage = `url(${props.imageUri})`

  const changePage = (uri) => {
    console.log(uri)
    if (uri.includes("http")) {
      return (window.location.href = uri)
    }
    return router.push(uri)
  }
  return (
    <>
      <div className="col">
        <p className="app-text">{props.title}</p>
        <p className="about-text">{props.text}</p>
        <div className="group">
          {props.btn2 ? (
            <button
              className="btn btn-2"
              onClick={() => changePage(props.btn2.uri)}
            >
              {props.btn2.text}
            </button>
          ) : null}
          <button className="btn" onClick={() => changePage(props.btn1.uri)}>
            {props.btn1.text}
          </button>
        </div>
      </div>
      <div className="col" style={styles}></div>
    </>
  )
}
