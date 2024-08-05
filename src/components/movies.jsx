
 import { NavLink } from 'react-router-dom';
import { useGlobalContext } from './context'

function Movies() {
  const {movie}=useGlobalContext()
  return (
       <>
       <section className='movie-page'>
         
        <div className='grid grid-4-col' >
          {movie.map((curMovie )=>{
          

            return(
            <NavLink key={curMovie.imdbID} to={`movie/${curMovie.imdbID}`} >
              <div className='card' >
                <div className='card-info'>
              <h2>{curMovie.Title}</h2>
              <img src={curMovie.Poster} alt="" />
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
