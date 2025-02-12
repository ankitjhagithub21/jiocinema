import Styles from "./spotlight.module.css"

const SpotLight = () => {
  return (
    <div className={Styles.spotlight}>
        <h1>In The Spotlight</h1>
        <div className={Styles.container}>
            <img src="https://v3img.voot.com/resizeMedium,w_768,h_432/v3Storage/assets/16x9-1739163562207.jpg" alt="spotlight" />
            <img src="https://v3img.voot.com/resizeMedium,w_768,h_432/v3Storage/assets/16x9-1739193323639.jpg" alt="spotlight" />
        </div>
    </div>
  )
}

export default SpotLight