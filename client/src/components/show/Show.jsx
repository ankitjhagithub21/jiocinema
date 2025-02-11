import PropTypes from "prop-types"
import Styles from "./show.module.css"

const Show = ({src}) => {
  return (
    <div className={Styles.show}>
        <img src={src} alt="poster" />
    </div>
  )
}

Show.propTypes = {
    src: PropTypes.string.isRequired, 
};


export default Show