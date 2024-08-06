
import { useParams } from 'react-router-dom'
import { API_URL } from './context';
import { useState,useEffect } from 'react';
import { NavLink } from 'react-router-dom';
function Singlemovie() {
  const {id}=useParams();


  const [isLoading, setIsLoading] = useState(true);
  const [movie, setMovie] = useState("");
  const [isError, setIsError] = useState({ show: false, msg: "" });

  const getMovies = async (url) => {
    try {
      const res = await fetch(url);
      const data = await res.json();

      if (data.Response === 'True') {  
        setIsLoading(false);
        setMovie(data);
        console.log(data);
      } else {
        setIsError({
          show: true,
          msg: data.Error, 
        });
      }
    } catch (error) {
      console.log(error);
      setIsError({
        show: true,
        msg: "Something went wrong!",
      });
    }
  };

  useEffect(() => {
   const timerout= setTimeout(() => {
      getMovies(`${API_URL}&i=${id}`);
    }, 1000);
    return ()=>clearTimeout(timerout)
  }, [id]);
 
 if(isLoading){
  return(
    <div className='movie-section'>
      <div className='loading'>
      Loading...
      </div>

    </div>
  )
 }

  

  return (
    
      <section className='movie-section'>
        <div className='movie-card'>
          <figure>
            <img src={movie.Poster} alt="" />
          </figure>
          
          <div className='card-content'>
          <p className='title'>{movie.Title}</p>
          
          <p className='card-text'>{movie.Released}</p>
          <p className='card-text'>{movie.Genre}</p>
          <p className='card-text'>{movie.imdbRating}</p>
          <p className='card-text'>{movie.Country}</p>

          <NavLink to={'/'}className={"back-btn"} >Go Back</NavLink>
          

          </div>
        </div>


      </section>

    
    
   
  )
}

export default Singlemovie
