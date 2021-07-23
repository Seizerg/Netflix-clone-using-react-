
import { func } from 'prop-types';
import React,{useState,useEffect} from 'react'
import axios from "../axios"
import requests from "../requests"
import "./Banner.css"
require("dotenv").config()

function Banner() {
    const [banner,setBanner]=useState([]);
    useEffect(()=>{
        async function fetch(){
            const req= await axios.get(requests.fetchTrending)
            setBanner(req.data.results[ Math.floor(Math.random()*req.data.results.length-1)]);
            return req;
        }
        fetch();
    },[])
    console.log(banner);
    
    
    return (
        <div>
            <header className="heading" style={{backgroundImage:`url("${process.env.REACT_APP_BASE_URL}${banner?.backdrop_path}")`}}>
            <div className="text" >
            <h3 >{banner?.title||banner?.name||banner?.original_name}</h3>
                  <button className="play"><i className="bi bi-play-fill play-icon"></i><span>Play</span></button>
                  <button className="list"><i className="bi bi-list list-icon"></i><span>My List</span></button>
                  <p>{banner?.overview}</p>


            </div>
                
            </header>
        </div>
    )
}

export default Banner
