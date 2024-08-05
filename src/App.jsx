import{BrowserRouter,Routes,Route} from "react-router-dom"
import Home from "./components/Home"
import Singlemovie from "./components/Singlemovie"
import { AppProvider } from "./components/context"

import './App.css'


function App() {
  

  return (
    <>
    <AppProvider>

   
     <BrowserRouter>
       <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="movie/:id" element={<Singlemovie/>} />
       </Routes>
     </BrowserRouter>
     </AppProvider>
    </>
  )
}

export default App
