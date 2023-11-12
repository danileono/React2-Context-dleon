import { useContext } from 'react'
import { GlobalContext } from '../context/GlobalContext'

import Card from '../components/Card.jsx'

const FavGallery = ()=> {
    const { favorites } = useContext(GlobalContext)

    return (
        <section className='gallery  grid-columns-5'>
            {
                favorites.map((photos)=>{
                    return (
                        <Card key={photos.id} photos={photos} />
                    )
                })
            }

            {
                favorites.length === 0 &&
                <h3>No hay favoritos</h3>
            }
        </section>
    )
}

export default FavGallery