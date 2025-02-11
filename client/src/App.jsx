import Carousel from "./components/carousel/Carousel"
import Channels from "./components/channels/Channels"
import Footer from "./components/footer/Footer"
import Header from "./components/header/Header"
import Shows from "./components/shows/Shows"
import SpotLight from "./components/spotlight/SpotLight"

const App = () => {
  return (
    <>
    <Header/>
    <Carousel/>
    <Channels/>
    <SpotLight/>
    <Shows title="Top Picks For You"/>
    <Shows title="Must Watch Movies"/>
    <Footer/>
    </>
  )
}

export default App