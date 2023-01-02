import "./movie-item.css"

const MovieItem = (props) => {
  const { name, viewers, onDeleteItem,addFavourite, favorite, like } = props
  return (
    <li className={`list-group-item d-flex justify-content-between ${favorite && "favorite"} ${like && "like"}`}>
       <span className="list-group-item-label" onClick={addFavourite} data-toggle={"like"}>{name}</span>
       <input type="number" className="list-group-item-input" defaultValue={viewers} />
       <div className="d-flex justify-content-center align-items-center">
           <button type="button" className="btn-cookie btn-sm">
            <i className="fas fa-cookie" onClick={addFavourite} data-toggle={"favorite"}></i>
           </button>
           <button type="button" className="btn-trash btn-sm" onClick={onDeleteItem}>
            <i className="fas fa-trash"></i>
           </button>
           <i className="fas fa-star"></i>
       </div>
    </li>
  )
}
export default MovieItem