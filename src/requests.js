const API_key= "e9b18c074ba79a43508ea36288a81ee2"
const requests= {
    fetchTrending:`/trending/all/week?api_key=${API_key}&language=en-US`,
    fetchNetflixOriginals:`/discover/tv?api_key=${API_key}&with_networks=23`,
    fetchTopRated:`/movie/top_rated?api_key=${API_key}&language=en-US`,
    fetchActionMovies:`/discover/movie?api_key=${API_key}&with_genres=28`,
    fetchComedyMovies:`/discover/movie?api_key=${API_key}&with_genres=35`,
    fetchHorrorMovies:`/discover/movie?api_key=${API_key}&with_genres=27`,
    fetchRomanceMovies:`/discover/movie?api_key=${API_key}&with_genres=10749`,
    fetchDocumentariesMovies:`/discover/movie?api_key=${API_key}&with_genres=99`
}
export default requests;