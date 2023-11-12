import { useContext } from "react"
import { GlobalContext } from "../context/GlobalContext"
import IconHeart from "./IconHeart"




const Card = ({ photos })=> {
    const { favorites, toggleFav } = useContext(GlobalContext)

    const isFavorite = ()=> {
        return favorites.includes(photos)
    }

    return (
        <div 
            className={`card ${ isFavorite() ? 'favorite' : '' }`} 
            onClick={()=> toggleFav(photos)}
        >

            <div className="img-txt">   
                    <img src={photos.src.tiny} alt={photos.src.alt} />
                    <IconHeart filled={photos.liked}></IconHeart>


                <div className="txt-foto">
                    <p><strong>{photos.photographer}</strong></p>
                    <p> {photos.alt}</p>
                </div>



            </div> 
        </div>
    )
}

export default Card