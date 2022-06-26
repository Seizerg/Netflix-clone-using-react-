
import React,{useState, useEffect} from 'react'
import axios from "../axios"
import "./Row.css";
import YouTube from "react-youtube";
import movieTrailer from "movie-trailer"
require("dotenv").config()
 

function Row({title,fetched,isLargeRow}) {
 const [movies,setMovie]=useState([]);
 const [trailerUrl, setTrailerUrl]= useState("");

useEffect(()=>{
    async function fetchdata(){
        const moviedata= await axios.get(fetched);
        setMovie(moviedata.data.results)
        return moviedata;
    }
    fetchdata();
},[fetched])

const opts={
    height:"390",
    width:"100%",
    playerVars:{
        autoplay:1
    }
}

const handleClick= (movie)=>{
    if(trailerUrl){
        setTrailerUrl("");
    }else{
        movieTrailer(movie? (movie.name? movie.name : movie.title): "")
        .then((url)=>{
            console.log(url);
            const urlParams= new URLSearchParams(new URL(url).search);
            console.log(urlParams);
            setTrailerUrl(urlParams.get("v"));
        })
        .catch((error)=>{
            console.log(error);
        })
        
}
}

    return (
        
         <div className="row">
             <h2>{title}</h2>
         
         <div className="row-poster">
         {movies.map(movie=>{
            
            return <img className={`row-posters ${isLargeRow&&"big-row"}`} onClick={()=>handleClick(movie)} key={movie.id} src={`${process.env.REACT_APP_BASE_URL}${isLargeRow?(movie?.poster_path):(movie?.backdrop_path)}`} alt={movie.name}/>
            
         })}
        
         </div>
         {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}   
         
            
        </div>
    )
}

export default Row
