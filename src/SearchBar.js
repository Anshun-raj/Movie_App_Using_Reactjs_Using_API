import React from "react";

function SearchBar({searchMovie,setSearchMovie,fetchMovieData}) {
  return (
    <div className="flex justify-center py-3 my-3">
      <input
        type="text"
        placeholder="Search" value={searchMovie} onChange={(e)=>setSearchMovie(e.target.value)}
        className="rounded-l-lg w-80 bg-gray-200 placeholder-gray-500 px-2 py-2 outline-none border-2 border-gray-500 text-black"
      />
      <button className="bg-[#40407a] px-4 shadow-md border-gray-500 text-white rounded-r-lg border-b-2 border-b-2"
       onClick={fetchMovieData}>
        Search
      </button>
    </div>
  );
}

export default SearchBar;
