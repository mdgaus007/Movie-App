import { useEffect, useState } from "react";
import MovieCard from "../components/MovieCard";
import "../css/Home.css"
import { searchMovies, getPopularMovies } from "../services/api.js"

function Home() {

    const [searchQuery, setSearchQuery] = useState("");
    const [movies, setMovies] = useState([]);
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(true);

    useEffect(() => {

        const loadPopularMovies = async () => {
            try {
                const popularMovies = await getPopularMovies();
                setMovies(popularMovies)
            }
            catch (err) {
                console.log(err);
                setError("Failed to load movies...")
            }
            finally {
                setLoading(false);
            }
        }

        loadPopularMovies();
    }, [])

    let handleChange = (e) => {
        let val = e.target.value
        setSearchQuery(val);
        // console.log(val);
    }

    let handleSearch = async (e) => {
        e.preventDefault();

        if (!searchQuery.trim()) return
        if (loading) return

        setLoading(true)

        try {
            const searchResults = await searchMovies(searchQuery);
            console.log(searchResults);

            setMovies(searchResults)
            setError(null)
        }
        catch (err) {
            console.log(err);
            setError("Failed to search for movies...")
        }
        finally {
            setLoading(false)
        }

        setSearchQuery("");
    }

    return (
        <>
            <div className="Home">

                <form action="" onSubmit={handleSearch} className="search-form">
                    <input
                        type="text"
                        placeholder="Search for movies..."
                        className="search-input"
                        value={searchQuery}
                        onChange={handleChange}
                    />

                    <button type="submit" className="search-button">Search</button>
                </form>

                {error && <div className="error-message">{error}</div>}

                {
                    loading ? (<div className="loading">loading....</div>) : (<div className="movies-grid">
                        {
                            movies.map((movie) => {
                                return <MovieCard movie={movie} key={movie.id}></MovieCard>

                            })
                        }
                    </div>)
                }


            </div>
        </>
    )
}

export default Home;