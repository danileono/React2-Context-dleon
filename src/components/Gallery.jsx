import { useContext } from 'react'
import { GlobalContext } from '../context/GlobalContext'

import Card from '../components/Card.jsx'

const Gallery = ()=> {
    const { photos, search } = useContext(GlobalContext)

    const filteredPhotos = photos.filter((photos)=> photos.photographer.toLowerCase().includes(search.toLowerCase()) )

    return (
        <section className='gallery'>
            {
                filteredPhotos.map((photos)=>{
                    return (
                        <Card key={photos.id} photos={photos} />
                    )
                })
            }

            {
                filteredPhotos.length === 0 &&
                <h3>No hay resultados</h3>
            }
        </section>
    )
}


export default Gallery;
