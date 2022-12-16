import React from 'react'
import { useContext } from 'react'
import { useState } from 'react'
import { createContext } from 'react'
import axios from 'axios'

const ApiContext = createContext()

export const useApiContext = () => {
    const context = useContext(ApiContext)
    return context
}

const ApiContextProvider = ({children}) => {
    const url ='https://example-data.draftbit.com/books?_limit=20'
    const url_details = 'https://example-data.draftbit.com/books/'
    const [favs, setFavs] = useState([])
    const [books, setBooks] = useState([])
    
   
    const getBooks=()=> {
        axios.get(url)
        .then((res) => setBooks(res.data)) 
    }

    const addFav=(book)=>{
        setFavs([...favs,book])
       
        // console.log(book)
        // console.log(favs)


    }


    const delFromFav=(id)=>{
        setFavs(favs.filter(item => item.id !==id))
        

    }


  return (
    <ApiContext.Provider value={{favs, addFav, delFromFav, books, getBooks, url, url_details}}>
        {children}
    </ApiContext.Provider>
  )
}

export default ApiContextProvider