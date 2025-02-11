import Styles from "./footer.module.css"

const Footer = () => {
    const icons = [
        "https://www.jiocinema.com/images/facebook.svg",
        "https://www.jiocinema.com/images/x.svg",
        "https://www.jiocinema.com/images/instagram.svg",
        "https://www.jiocinema.com/images/youtube.svg"
    ]

    return (
        <footer className={Styles.footer}>
            <div className={Styles.footerTop}>
                <div className={Styles.footerTopLeft}>
                    <div>
                        <h2>Jio Cinema</h2>
                        <ul>
                            <li>For You</li>
                            <li>Sports</li>
                            <li>Movies</li>
                            <li>TV Shows</li>
                        </ul>
                    </div>
                    <div>
                        <h2>Support</h2>
                        <ul>
                            <li>Help Center</li>
                            <li>Terms of Use</li>
                            <li>Privacy Policy</li>
                            <li>Content Complaints</li>
                        </ul>
                    </div>
                </div>
                <div className={Styles.footerTopRight}>
                    <div>
                        <h2>Connect With Us</h2>
                        <div className={Styles.socialMedia}>
                            {
                                icons.map((icon, idx) => {
                                    return <div key={idx} className={Styles.icon}>
                                        <img src={icon} alt="icon" />
                                    </div>
                                })
                            }
                        </div>
                    </div>
                    <div>
                        <h2>Download The App</h2>
                        <div className={Styles.mobileApp}>
                            <img src="https://www.jiocinema.com/images/googlePlay.svg" alt="google play" />
                            <img src="https://www.jiocinema.com/images/appleStore.svg" alt="apple store" />
                        </div>
                    </div>
                </div>
            </div>
            <div className={Styles.footerBottom}>
                <p>Copyright © Star India Private Limited, 2024. All rights reserved.</p>
                <img src="https://www.jiocinema.com/images/payments/jio-logo.png" alt="logo" />
            </div>
        </footer>
    )
}

export default Footer