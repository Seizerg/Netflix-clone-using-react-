import React from "react";
import Navbar from "./navbar"
import Row from "./Row"
import Banner from "./Banner"

import requests from "../requests"
function App(){
    return <div>
        <Navbar/>
        <Banner />
        <Row title="Netflix Originals" fetched={requests.fetchNetflixOriginals} isLargeRow/>
        <Row title="Trending Shows" fetched={requests.fetchTrending}/>
        <Row title="Top Rated" fetched={requests.fetchTopRated}/>
        <Row title="Action Movies" fetched={requests.fetchActionMovies}/>
        <Row title="Horror Movies" fetched={requests.fetchHorrorMovies}/>
        <Row title="Comedy Movies" fetched={requests.fetchComedyMovies}/>
        <Row title="Romantic Movies" fetched={requests.fetchRomanceMovies}/>
        <Row title="Documentaries" fetched={requests.fetchDocumentariesMovies}/>
    </div>
}
export default App;