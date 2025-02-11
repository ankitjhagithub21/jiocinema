import {useState,useEffect} from "react"
import Carousel from "./components/carousel/Carousel"
import Channels from "./components/channels/Channels"
import Footer from "./components/footer/Footer"
import Header from "./components/header/Header"
import Shows from "./components/shows/Shows"
import SpotLight from "./components/spotlight/SpotLight"

const App = () => {
  const [movies,setMovies] = useState([])
  const [hindiMovies,setHindiMovies] = useState([])
  const [englishMovies,setEnglishMovies] = useState([])
  const [korenMovies,setKoreanMovies] = useState([])

  useEffect(()=>{
    const fetchMovies = async() => {
      try{
        const res = await fetch("http://localhost:3000/movies");
        const data = await res.json();
        setMovies(data)
        const hindi = data.filter((movie)=> movie.language === "Hindi");
        setHindiMovies(hindi)

        const english = data.filter((movie)=> movie.language === "English");
        setEnglishMovies(english)
        
        const koren = data.filter((movie)=> movie.language === "Korean");
        setKoreanMovies(koren)


      }catch(error){
        console.log(error)
      }
    }
    fetchMovies()
  },[])
  return (
    <>
    <Header movies={movies}/>
    <Carousel/>
    <Channels/>
    <SpotLight/>
    <Shows title="Top Hindi Movies" movies={hindiMovies}/>
    <Shows title="Top English Movies" movies={englishMovies}/>
    <Shows title="Top Korean Movies" movies={korenMovies}/>
    {/* <Shows title="Must Watch Movies"/> */}
    <Footer/>
    </>
  )
}

export default App