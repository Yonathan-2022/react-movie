import { Link } from "react-router-dom";
import style from "./MovieCard.module.css"
import placeholder from "../placeholder.jpg";


export function MovieCard({movie}){
    const urlImagen = movie.poster_path ? "https://image.tmdb.org/t/p/w300" + movie.poster_path : placeholder; 
    return (
    <li className={style.movieCard}>
        <Link to={"/movies/"+ movie.id}>
            <img width={230} height={345} className={style.movieImage} src={urlImagen} alt=""/>
            <div>{movie.title}</div>
        </Link>
    </li>);
}