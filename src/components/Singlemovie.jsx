
import { useParams } from 'react-router-dom'


function Singlemovie() {
  const {id}=useParams();
  

  return (
    <div>
      movie {id}
    
    </div>
  )
}

export default Singlemovie
