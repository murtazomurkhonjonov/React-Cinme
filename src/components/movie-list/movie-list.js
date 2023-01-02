import "./movie-list.css"
import MovieItem from "../movie-list-item/movie-item"
const MovieList = ({ data, onDeleteItem, addFavourite, favorite, like }) => {
  return (
    <ul className="movie-list">
        {data.map(item => (
          <MovieItem name={item.name}
          viewers={item.viewers}
          favorite={item.favorite}
          key={item.id}
          onDeleteItem={() => onDeleteItem(item.id)}
          like={item.like}
          addFavourite={(e) => addFavourite(item.id, e.currentTarget.getAttribute("data-toggle"))}/>
        ))}
    </ul>
  )
}

export default MovieList