import "./movie-add.css"
import { Component } from "react"
export class MovieAddForm extends Component{
  constructor(props){
    super(props)
    this.setState = {
      name: '',
      viewers: ""
    }
  }
  OnChangeElements = e => {
    this.setState = {
      [e.target.name] : e.target.value
    }
  }
  render(){

  return (
    <div className="movie-add-form">
        <h3>Yangi kino qo'shish</h3>
         <form className="add-form d-flex">
           <input type="text"
           className="form-control new-post-label"
           placeholder="Qanday kino?"
           onChange={this.OnChangeElements}
           name="name"
           />

           <input type="number"
           className="form-control new-post-label"
           placeholder="Necha marotaba ko'rilgan?"
           onChange={this.OnChangeElements}
           name="viewers"
           />
           <button type="submit" className="btn btn-outline-dark">
            Qo'shish
           </button>
         </form>
    </div>
  )
  }
}
