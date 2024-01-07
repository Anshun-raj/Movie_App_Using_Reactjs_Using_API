import { useState } from "react";
import "./App.css";
import MovieCard from "./MovieCard";
import SearchBar from "./SearchBar";
function App() {
  const [alMovieData, setAllMovieData] = useState([]);
  const [searchMovie, setSearchMovie] = useState("");
  const [loading, setLoading] = useState(false);

  const fetchMovieData = async () => {
    
    try {
      setLoading(true);
      const res = await fetch(
        `https://omdpadi.com/?s=${searchMovie}&apikey=a1de9591`
      );
      const data = await res.json();
      setAllMovieData(data.search);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };
  return (
    <div className="text-center">
      <h1 className="text-4xl font-bold text-red-500 border-solid border-2 border-indigo-100 py-2">
        Movie App
      </h1>
      <div className="bg">
        <SearchBar
          searchMovie={searchMovie}
          setSearchMovie={setSearchMovie}
          fetchMovieData={fetchMovieData}
        />
        <MovieCard alMovieData={alMovieData} loading={loading} />
      </div>
    </div>
  );
}

export default App;
