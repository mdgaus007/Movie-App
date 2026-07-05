
const API_KEY="616a2a4bd6aa1ece87bce75ec10c031d"
const BASE_URL="https://api.themoviedb.org/3"

export const getPopularMovies= async()=>{
     const response=await fetch(`${BASE_URL}/movie/popular?api_key=${API_KEY}`)
     const data= await response.json();
     return data.results;
}

export const searchMovies=async(query)=>{
    const response=await fetch(`${BASE_URL}/search/movie?api_key=${API_KEY}&query=${encodeURIComponent(query)}`);

    const data=await response.json();

    return data.results;
}