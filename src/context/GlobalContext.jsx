import { createContext, useState } from "react";

export const GlobalContext = createContext()


///////////
const GlobalProvider = ({ children }) => {
    const [photos, setPhotos] = useState([])
    const [favorites, setFavorites] = useState([])
    const [search, setSearch] = useState("")



    const toggleFav = (photo) => {
        photo.liked = !photo.liked;
        setFavorites((favorites) => {
        if (favorites.includes(photo)) {
            return favorites.filter((favorite) => favorite.id !== photo.id);
        }
        return [...favorites, photo];
        });
    };



    const state = { photos, setPhotos, search, setSearch, favorites, setFavorites, toggleFav }



    return (
        <GlobalContext.Provider value={state}>
            {children}
        </GlobalContext.Provider>
    )
}

export default GlobalProvider
//////////