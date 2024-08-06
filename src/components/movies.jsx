
 import { NavLink } from 'react-router-dom';
import { useGlobalContext } from './context'

function Movies() {
  const {movie,isLoading}=useGlobalContext()

  if(isLoading){
    return(
      <div className=''>
        <div className='loading'>
        Loading...
        </div>
  
      </div>
    )
   }
 

  return (
       <>
       <section className='movie-page'>
         
        <div className='grid grid-4-col' >
          {movie.map((curMovie )=>{
          const{imdbID,Title,Poster}=curMovie;
            const movieName=Title.substring(0,15);

            return(
            <NavLink key={imdbID} to={`movie/${imdbID}`} >
              <div className='card' >
                <div className='card-info'>
              <h2>{movieName.length>=15?`${movieName}...`:movieName}</h2>
              <img src={Poster} alt="" />
                </div>
              </div>
            </NavLink>
            )
          })}
        </div>



       </section>
       

       </>
    


  )

}

export default Movies
