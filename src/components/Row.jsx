
import React,{useState, useEffect} from 'react'
import axios from "../axios"
import "./Row.css"
require("dotenv").config()
 

function Row({title,fetched,isLargeRow}) {
 const [movies,setMovie]=useState([])

useEffect(()=>{
    async function fetchdata(){
        const moviedata= await axios.get(fetched);
        setMovie(moviedata.data.results)
        return moviedata;
    }
    fetchdata();
},[fetched])



    return (
        
         <div className="row">
             <h2>{title}</h2>
         
         <div className="row-poster">
         {movies.map(movie=>{
            
            return <img className={`row-posters ${isLargeRow&&"big-row"}`} key={movie.id} src={`${process.env.REACT_APP_BASE_URL}${isLargeRow?(movie?.poster_path):(movie?.backdrop_path)}`} alt={movie.name}/>
            
         })}
        
         </div>
            
         
            
        </div>
    )
}

export default Row
