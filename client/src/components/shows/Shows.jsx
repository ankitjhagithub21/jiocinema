import PropTypes from 'prop-types';
import Styles from "./shows.module.css";
import Show from '../show/Show';

const Shows = ({ title }) => {
    const imgs = [

        "https://v3img.voot.com/resizeMedium,w_256,h_341/v3Storage/assets/3x4-1737455021453.jpg",
        "https://v3img.voot.com/resizeMedium,w_256,h_341/v3Storage/assets/3x4-1729190666919.jpg",
        "https://v3img.voot.com/resizeMedium,w_256,h_341/v3Storage/assets/3x4-1729336689771.jpg",
        "https://v3img.voot.com/resizeMedium,w_256,h_341/v3Storage/assets/3x4-1723127542433.jpg",
        "https://v3img.voot.com/resizeMedium,w_256,h_341/v3Storage/assets/3x4clean-1723721163996.jpg"
    ]
    return (
        <div className={Styles.shows}>
          <h1>{title}</h1>
          <div className={Styles.container}>
            {
                imgs.map((img,idx)=>{
                    return <Show key={idx} src={img}/>
                })
            }
          </div>            
        </div>
    );
};

Shows.propTypes = {
    title: PropTypes.string.isRequired, 
};

export default Shows;
