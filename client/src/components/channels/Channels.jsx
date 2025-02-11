import Styles from "./channel.module.css"

const Channels = () => {
    const channels = [
        "https://v3img.voot.com/resizeMedium,w_216,h_216/v3Storage/assets/colors-hindirevised-1734374133792.png",
        "https://v3img.voot.com/resizeMedium,w_216,h_216/v3Storage/assets/mtv-1727006354793.jpg",
        "https://v3img.voot.com/resizeMedium,w_216,h_216/v3Storage/assets/colors-hindirevised-1734374133792.png",
        "https://v3img.voot.com/resizeMedium,w_216,h_216/v3Storage/assets/colors-hindirevised-1734374133792.png",
        "https://v3img.voot.com/resizeMedium,w_216,h_216/v3Storage/assets/colors-hindirevised-1734374133792.png",
        "https://v3img.voot.com/resizeMedium,w_216,h_216/v3Storage/assets/colors-hindirevised-1734374133792.png",
        "https://v3img.voot.com/resizeMedium,w_216,h_216/v3Storage/assets/colors-hindirevised-1734374133792.png",
        "https://v3img.voot.com/resizeMedium,w_216,h_216/v3Storage/assets/colors-hindirevised-1734374133792.png",
    ]
  return (
    <div className={Styles.channels}>
       {
        channels.map((ch,idx)=>{
            return <img key={idx} src={ch} alt="channel"/>
        })
       }

    </div>
  )
}

export default Channels