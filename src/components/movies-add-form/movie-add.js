import "./movie-add.css"
import { Component } from "react"
export class MovieAddForm extends Component{
  constructor(props){
    super(props)
    this.state = {
      name: '',
      viewers: ''
    }
  }
  OnChangeElements = e => this.setState({[e.target.name] : e.target.value})

  onSubmitElement = e => {
    console.log(this.state)
    e.preventDefault()
    this.props.addElement({ name: this.state.name, viewers: this.state.viewers})
    this.setState({
      name: '',
      viewers: ""
    }
    )
  }

  render(){
  return (
    <div className="movie-add-form">
        <h3>Yangi kino qo'shish</h3>
         <form className="add-form d-flex" onSubmit={this.onSubmitElement}>
           <input type="text"
           className="form-control new-post-label"
           placeholder="Qanday kino?"
           onChange={this.OnChangeElements}
           name="name"
           value={this.state.name}
           />

           <input type="number"
           className="form-control new-post-label"
           placeholder="Necha marotaba ko'rilgan?"
           onChange={this.OnChangeElements}
           name="viewers"
           value={this.state.viewers}
           />
           <button type="submit" className="btn btn-outline-dark">
            Qo'shish
           </button>
         </form>
    </div>
  )
  }
}
