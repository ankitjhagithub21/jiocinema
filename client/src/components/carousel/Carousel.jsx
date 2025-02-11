import Styles from "./carousel.module.css"

const Carousel = () => {
    const imgs = [ "https://v3img.voot.com/resizeMedium,w_914,h_514/v3Storage/assets/tv-1737455056722.jpg","https://v3img.voot.com/resizeMedium,w_914,h_514/v3Storage/assets/isl_highlights_m125_bfc_vs_jfc_clean_ctv-1739119784901.jpg","https://v3img.voot.com/resizeMedium,w_914,h_514/v3Storage/assets/tv-1726683379800.jpg"]
  return (
    <div className={Styles.carousel}>
       {
        imgs.map((img,idx)=>{
            return <img key={idx} src={img} alt="poster"/>
        })
       }
    </div>
  )
}

export default Carousel