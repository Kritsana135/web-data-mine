import { useRouter } from "next/router"
import moduleStyles from "../styles/member.module.css"

export default function Content(props) {
  const router = useRouter()
  const styles = {}

  if (props.imageUri) styles.backgroundImage = `url(${props.imageUri})`

  const changePage = (uri) => {
    router.push(uri)
  }
  return (
    <>
      <div className={`col ${moduleStyles.expandCol}`}>
        <p
          className={`app-text ${moduleStyles.disableMargin}`}
          id={`${moduleStyles.centerP}`}
        >
          {props.title}
        </p>
        <div>
          {props.texts.map((item) => {
            return (
              <p
                id={`${moduleStyles.centerP}`}
                className={`${moduleStyles.multiText}`}
              >
                {item}
              </p>
            )
          })}
        </div>
        <div className={`group ${moduleStyles.btnGroup}`}>
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
      <div className={`col ${moduleStyles.hideBg}`} style={styles}></div>
    </>
  )
}
