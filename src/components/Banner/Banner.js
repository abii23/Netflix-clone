import React, { useState } from 'react'
import {useEffect} from 'react'
import {Api_key,imageUrl} from '../../components/constants/constants'
import './Banner.css'
import axios from '../../axios'
function Banner() {
const [movie, setMovie] = useState()


useEffect(() => {
   
    axios.get(`https://api.themoviedb.org/3/trending/all/week?api_key=${Api_key}&language=en-US`).then((Response)=>{

console.log(Response.data)
setMovie(Response.data.results[0])

    

    })
}, [])

    return (
        <div 
        style={{backgroundImage:`url(${movie ? imageUrl+movie.backdrop_path : ""})`}}
         className='banner'>
            <div className='content' >
                <h1 className='title'>{movie ? movie.title : ""}  </h1>
                <div className='banner_buttons' >
                    <button className='button' >Play</button>
                    <button className='button' >My list</button>
                </div>
                <h1 className='description'>{movie ? movie.overview : ""}</h1>
            </div>
        <div className="fade_bottom"></div>
        </div>
    )
}

export default Banner