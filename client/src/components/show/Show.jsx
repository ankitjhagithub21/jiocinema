import PropTypes from "prop-types"
import Styles from "./show.module.css"

const Show = ({src,title}) => {
  return (
    <div className={Styles.show}>
        <img src={src} alt="poster" />
        <div className={Styles.movieTitle}>
          {title}
        </div>
    </div>
  )
}

Show.propTypes = {
    title:PropTypes.string.isRequired,
    src: PropTypes.string.isRequired, 
};


export default Show