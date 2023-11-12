import { useState, useEffect, useContext } from "react"
import { GlobalContext } from "../context/GlobalContext"

import Loader from "../components/Loader"
import Search from "../components/Search"
import Gallery from "../components/Gallery"


const Home = ()=> {
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)

  const { photos, setPhotos } = useContext(GlobalContext)




  const getData = async(signal)=> {
      try {
          const res = await fetch('/photos.json', { signal })
          const json = await res.json()

          setError(false)
          setPhotos(json.photos)

      } catch(error) {
          console.log(error)
          setError(true)
      }

      setTimeout(()=> {
          setLoading(false)
      }, 1000)
  }



  useEffect(()=> {
      if(photos.length > 0) {
          setLoading(false)
          return
      }

      const controller = new AbortController()
      const signal = controller.signal

      getData(signal)

      return ()=> {
          controller.abort()
      }
  }, [])





  return (
    <div className="App">
    <main className={`container ${!loading ? 'loaded' : ''}`}>

        <Loader />

        { error && !loading && <h3 className="error">Ha ocurrido un error. Intente de nuevo más tarde</h3> }

        <div className="main-area">
            <h1>Natural Pic</h1>
            <Search />
            <Gallery />
        </div>

    </main>
    </div>
  );
};
export default Home;





