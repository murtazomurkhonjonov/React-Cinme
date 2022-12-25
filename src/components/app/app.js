import './app.css'
import { Component } from 'react'
import AppInfo from "../app-info/app-info"
import SearchPanel from "../search-panel/search-panel"
import AppFilter from "../app-filter/app-filter"
import MovieList from "../movie-list/movie-list"
import { MovieAddForm } from "../movies-add-form/movie-add"

export class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      data : [
        { name : "Emperia of Osman", viewers : "989", favorite: false, like: false},
        { name : "Payitaht Abdulhamid", viewers : "897", favorite: false, like: false},
        { name : "Ertugrul", viewers : "900", favorite: false, like: false}
      ]
    }
  }

  onDeleteItem = id => {
  console.log(id)
  }
  render() {
    return(
      <div className="app font-monospace">
        <div className="content">
          <AppInfo />
          <div className='search-panel'>
            <SearchPanel />
            <AppFilter />
          </div>
          <MovieList data={this.state.data} onDeleteCin={this.onDeleteCinCin}/>
          <MovieAddForm />
        </div>
      </div>
    )
  }
}
