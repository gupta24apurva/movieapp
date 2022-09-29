import React from 'react'
import { NavLink } from 'react-router-dom';
import { useGlobalContext } from './Context'
import Loading from './Loading';

const Movies = () => {
  const { movie, isLoading } = useGlobalContext();
  if(isLoading)
  {
    return(
      <><Loading/></>
    );
  }
  return (
    <>
      <section className="movie-page">
        <div className="d-flex flex-wrap" style={{justifyContent:"center"}}>
          {movie.map((currMovie) => {
            const { Title, imdbID, Poster } = currMovie;
            const movieName=Title.substring(0,15);
            return(
              <>
              <NavLink to={`movie/${imdbID}`} key={imdbID}>
              <div className="card mx-2 my-2" style={{width: "18rem", border: "2px solid black", borderRadius: "15px", padding: "30px", backgroundColor:"#D3D3D3"}}>
                <img src={Poster} alt="..." className="card-img-top" style={{height:"300px"}}/>
                  <div className="card-body">
                    <h5 className="card-title" style={{textAlign:"center"}}>{Title.length>15?`${movieName}...`:movieName}</h5>
                  </div>
              </div>
            </NavLink>
            </>
            ) 
          })}
        </div>
      </section>
    </>
  )
}

export default Movies
