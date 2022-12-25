import "./movie-list.css"
import MovieItem from "../movie-list-item/movie-item"
const MovieList = ({ data, onDeleteItem }) => {
  return (
    <ul className="movie-list">
        {data.map(item => (
          <MovieItem name={item.name} viewers={item.viewers} favorite={item.favorite} onDeleteItem={() => onDeleteItem(item.id)}/>
        ))}
    </ul>
  )
}

export default MovieList