import { useContext, useEffect, useState } from "react";
import { createContext } from "react";

const AppContext = createContext();

 export const API_URL = `https://www.omdbapi.com/?apikey=${import.meta.env.VITE_API_KEY}`;

const AppProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [movie, setMovie] = useState([]);
  const [isError, setIsError] = useState({ show: false, msg: "" });
  const[query,setquery]=useState("Top gun")

  const getMovies = async (url) => {
    setIsLoading(true)
    try {
      const res = await fetch(url);
      const data = await res.json();

      if (data.Response === 'True') {  
        setIsLoading(false);
        setMovie(data.Search);
        console.log(data.Search);
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
      getMovies(`${API_URL}&s=${query}`);
    }, 1000);
    return ()=>clearTimeout(timerout)
  }, [query]);

  return (
    <AppContext.Provider value={{ isLoading, isError, movie ,query,setquery }}>
      {children}
    </AppContext.Provider>
  );
};

const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider, useGlobalContext };
