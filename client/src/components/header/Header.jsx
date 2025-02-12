import { useEffect, useState } from "react"
import Styles from "./header.module.css"
import Shows from "../shows/Shows";
import PropTypes from "prop-types"
const Header = ({ movies }) => {
    const navItems = ["Home", "Sports", "Movies", "TV Shows", "More"]
    const tags = ["For You", "Premium", "Cricket", "Blogs", "News", "Action", "Webseries", "Horror", "Free Shows", "BBK", "MTV Rodies", "Studions", "top 10", "tata ipl", "isl", "tennis"]
    const [searchTerm, setSearchTerm] = useState('');
    const [result, setResult] = useState([])

    useEffect(() => {
        const res = movies.filter((movie) => movie.title.toUpperCase().indexOf(searchTerm.toUpperCase()) == 0)
        setResult(res)
    }, [searchTerm, movies])

    return (
        <header className={Styles.header}>
            <div className={Styles.headerTop}>
                <nav className={Styles.navigation}>
                    <div className={Styles.logo}>
                        <img src="https://www.jiocinema.com/images/jc_logo_v2.svg" alt="logo" />
                    </div>


                    <ul>
                        {
                            navItems.map((item, idx) => {
                                return <li key={idx}>{item}</li>
                            })
                        }
                    </ul>

                </nav>
                <div className={Styles.rightTopHeader}>
                    <div className={Styles.searchBar}>
                        <img src="https://www.jiocinema.com/images/search/ic_search.svg" alt="search" />
                        <input type="text" placeholder="Movies, Shows and More" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
                        <img src="https://www.jiocinema.com/images/search/voice-search.svg" alt="voice_search" />

                    </div>
                    <img src="https://www.jiocinema.com/images/profile/avatar_guest.svg" alt="user" className="user" />
                </div>
            </div>
            <div className={Styles.tags}>
                {
                    tags.map((tag, idx) => {
                        return <span className={Styles.tag} key={idx}>{tag}</span>
                    })
                }
            </div>
            {
                searchTerm.length > 0 && <div className={Styles.searchResult}>
                    {
                        result.length > 0 ? <Shows title={"Result"} movies={result} /> : <p>No result found.</p>
                    }
                </div>
            }
        </header>
    )
}

Header.propTypes = {
    movies: PropTypes.array.isRequired
}

export default Header