import Styles from "./header.module.css"

const Header = () => {
    const navItems = ["Home", "Sports", "Movies", "TV Shows", "More"]
    const tags = ["For You", "Premium","Cricket","Blogs","News","Action","Webseries","Horror","Free Shows","BBK","MTV Rodies","Studions","top 10","tata ipl","isl","tennis"]
    return (
        <header className={Styles.header}>
            <div className={Styles.headerTop}>
                <nav className={Styles.navigation}>
                    <div>
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
                        <input type="text" placeholder="Movies, Shows and More" />
                        <img src="https://www.jiocinema.com/images/search/voice-search.svg" alt="voice_search" />

                    </div>
                    <img src="https://www.jiocinema.com/images/profile/avatar_guest.svg" alt="user" className="user"/>
                </div>
            </div>
            <div className={Styles.tags}>
                {
                    tags.map((tag,idx)=>{
                        return <span key={idx}>{tag}</span>
                    })
                }
            </div>
        </header>
    )
}

export default Header