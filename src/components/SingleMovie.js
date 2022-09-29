import React from 'react'
import { NavLink } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import Loading from './Loading';
import { useEffect, useState } from 'react';


const API_URL=`https://www.omdbapi.com/`;
const SingleMovie = () => {
  const { id } = useParams();

  const [isLoading,setIsLoading]=useState(true);
  const [movie, setMovie] = useState("");
  const getMovies = async (url) => {
    setIsLoading(true);
    try {
      const res = await fetch(url);
      const data = await res.json();
      console.log(data);
      if (data.Response === "True") {
        setIsLoading(false);
        setMovie(data);
      }
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    let timerout = setTimeout(() => {
      getMovies(`${API_URL}?i=${id}&apikey=578cc606`);
    }, 500);
    return () => clearTimeout(timerout);
  }, [id]);

  if(isLoading)
  {
    return(<><Loading/></>)
  }
  else{
  return (
    <>
      <div className="card" style={{width: "40rem", flexDirection:"row", margin:"90px auto"}}>
        <img src={movie.Poster} className="card-img" alt="..." style={{width: "40%", marginRight:"20px"}}/>
          <div className="card-body">
            <h3 className="card-title">{movie.Title}</h3>
            <p className="card-text"><h5>Release: </h5>{movie.Released}</p>
            <p className="card-text"><h5>Genre: </h5>{movie.Genre}</p>
            <p className="card-text"><h5>Rating: </h5>{movie.imdbRating}/10</p>
            <p className="card-text"><h5>Cast: </h5>{movie.Actors}</p>
            <NavLink to="/" className="btn btn-primary" style={{marginTop:"30px"}}>Go Back</NavLink>
          </div>
      </div>
    </>
  )
  }
}

export default SingleMovie;
