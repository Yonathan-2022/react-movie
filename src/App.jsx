import  styles  from "./App.module.css";
import { BrowserRouter as Router, Routes, Route,Link} from "react-router-dom";
import { MovieDetails } from "./pages/MovieDetails";
import { LandingPages } from "./pages/LandingPages";

export function App(){
    return(
    <Router>
        <header>
             <Link to="/"><h1 className={styles.title}> Movies React 2024 </h1></Link>  
        </header> 
        <main>
             <Routes>
             <Route exact path="/movies/:movieId" element={<MovieDetails />} />
             <Route exact path="/" element={<LandingPages />} />
             </Routes>
        </main>
     </Router >);
}
