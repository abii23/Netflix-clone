import React, { useEffect,useState } from 'react'
import Youtube from 'react-youtube'
import './RowPost.css'
import {imageUrl,Api_key } from '../constants/constants'
import axios from '../../axios'
function RowPost(props) {

    const [movie, setmovie] = useState([])
    const [urlId, seturlid] = useState('')

    useEffect(() => {
      
        axios.get(props.url).then((Response)=>{

  setmovie(Response.data.results)
    
    }).catch(err=>{

    })
      
    }, [])

    const opts = {
        height: '390',
        width: '100%',
        playerVars: {
          // https://developers.google.com/youtube/player_parameters
          autoplay: 1,
        },
      };    
      
      const handleMovie=(id)=>{
          console.log(id)
          axios.get(`movie/${id}/videos?api_key=${Api_key}&language=en-US&=580489`).then(response=>{
            if(response.data.results.length!==0)
            {
                seturlid(response.data.results[0])
            } 
          })
      }
    return (
        <div className='row'>
            <h2>{props.title}</h2>
            <div className='posters'>
              {movie.map((obj)=>

              <img onClick={()=>handleMovie(obj.id)} className={props.isSmall ? 'smallPoster':'poster'} alt='poster' src={`${imageUrl+obj.backdrop_path}`} />
              )}
            </div>
           { urlId && <Youtube opts={opts} videoId={urlId.key}/>  } 
        </div>
    )
}

export default RowPost