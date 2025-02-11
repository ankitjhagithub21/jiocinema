import PropTypes from 'prop-types';
import Styles from "./shows.module.css";
import Show from '../show/Show';

const Shows = ({ title, movies }) => {
    
    return (
        <div className={Styles.shows}>
          <h1>{title}</h1>
          <div className={Styles.container}>
            {
                movies.map((movie,idx)=>{
                    return <Show key={idx} src={movie.image} title={movie.title}/>
                })
            }
          </div>            
        </div>
    );
};

Shows.propTypes = {
    title: PropTypes.string.isRequired, 
    movies:PropTypes.array.isRequired
};

export default Shows;
