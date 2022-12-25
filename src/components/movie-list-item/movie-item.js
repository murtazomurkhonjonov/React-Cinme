import "./movie-item.css"
import { Component } from "react"
class MovieItem extends Component {
  constructor(props){
    super(props)
    this.state = {
      favourite: false,
      like: false
    }
  }
  addFovuirite = () => {
    this.setState(prevState => ({
      favourite: !prevState.favourite
  }))
  }
  addLike = () => {
    this.setState(prevState => ({
      like: !prevState.like
    }))
  }
  render(){
    const { name, viewers, onDeleteItem } = this.props
    const { favourite, like } = this.state
    return (
      <li className={`list-group-item d-flex justify-content-between ${favourite && "favorite"} ${like && "like"}`}>
         <span className="list-group-item-label" onClick={this.addLike}>{name}</span>
         <input type="number" className="list-group-item-input" defaultValue={viewers} />
         <div className="d-flex justify-content-center align-items-center">
             <button type="button" className="btn-cookie btn-sm">
              <i className="fas fa-cookie" onClick={this.addFovuirite}></i>
             </button>
             <button type="button" className="btn-trash btn-sm" onClick={onDeleteItem}>
              <i className="fas fa-trash"></i>
             </button>
             <i className="fas fa-star"></i>
         </div>
      </li>
    )
  }
}


export default MovieItem