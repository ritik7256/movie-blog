import { useContext, useEffect, useState } from "react";
import { createContext } from "react";

const AppContext = createContext();

const API_URL = `http://www.omdbapi.com/?apikey=4dd29536&s=titanic`;

const AppProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [movie, setMovie] = useState([]);
  const [isError, setIsError] = useState({ show: false, msg: "" });

  const getMovies = async (url) => {
    try {
      const res = await fetch(url);
      const data = await res.json();

      if (data.Response === 'True') {  // Case-sensitive check
        setIsLoading(false);
        setMovie(data.Search);
        console.log(data.Search);
      } else {
        setIsError({
          show: true,
          msg: data.Error,  // Error field in the OMDB response
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
    getMovies(API_URL);
  }, []);

  return (
    <AppContext.Provider value={{ isLoading, isError, movie }}>
      {children}
    </AppContext.Provider>
  );
};

const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider, useGlobalContext };
