import React from "react";

function MovieCard({ alMovieData, loading }) {
  return (
    <div>
      {loading ? (
        <div className="flex justify-center">
          <img
            className="w-16 py-20"
            src="htttps://i.gifer.com/ZZSH.gif"
            alt=""
          />
        </div>
      ) : (
        <div className="main flex px-4 flex-wrap lg:px-10">
          {alMovieData.map((item, index) => {
            const { Poster, Title, Year } = item;
            return (
              <div key={index} className="p-2 child lg:w-1/4 w-full">
                <div className="sub_child bg-[#002e4b] p-3 rounded-2xl">
                  <img className="w-full rounded-lg mb-2" alt="" src={Poster} />
                  <h2 className=" text-white text-xl font-bold">{Title}</h2>
                  <h2 className=" text-white text-xl font-bold">
                    Year:: {Year}
                  </h2>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default MovieCard;
