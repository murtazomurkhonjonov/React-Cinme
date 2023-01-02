import './app.css'
import { Component } from 'react'
import AppInfo from "../app-info/app-info"
import SearchPanel from "../search-panel/search-panel"
import AppFilter from "../app-filter/app-filter"
import MovieList from "../movie-list/movie-list"
import { MovieAddForm } from "../movies-add-form/movie-add"
import { v4 as uuidv4 } from 'uuid'

export class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      data : [
        { name : "Emperia of Osman", viewers : "989", favorite: false, like: false, id:1},
        { name : "Payitaht Abdulhamid", viewers : "897", favorite: false, like: false, id: 2},
        { name : "Ertugrul", viewers : "900", favorite: false, like: false, id: 3}
      ],
      temp: "",
      filter: "all"
    }
  }

  onDeleteItem = id => this.setState(({ data }) => ({data: data.filter(c => c.id !== id)}))

  addElement = (item) => this.setState(({ data }) => ({data: [...data, {...item, favorite: false, like: false, id: uuidv4()}]}))

  addFavourite = (id, prop) => {
    this.setState(({ data }) => ({
          data: data.map(item => {
          if(item.id === id){
           return {...item, [prop]: !item[prop]}
          }
          return item
        }),
    }))
  }
  searchButton = (arr, temp) => {
    if(temp.length === 0){
      return arr
    }

return arr.filter(item  => item.name.toLowerCase().indexOf(temp) > -1)
  }


  filterHandel = (arr, filter) => {
    switch (filter) {
      case 'popular':
        return arr.filter(c => c.like)
      case "mostViewers" :
        return arr.filter(c => c.viewers > 900)
      default :
      return arr
    }
  }

  searchTemp = temp => {this.setState({ temp })}

  uptdateFilter = filter => {this.setState({ filter })}


  render() {
    const { data, temp, filter } = this.state
    const allMovies = data.length
    const favouriteMovies = data.filter(c => c.favorite).length
    const visibledate = this.filterHandel(this.searchButton(data, temp), filter)
    return(
      <div className="app font-monospace">
        <div className="content">
          <AppInfo allMovies={allMovies} favouriteMovies={favouriteMovies}/>
          <div className='search-panel'>
            <SearchPanel searchTemp={this.searchTemp}  />
            <AppFilter filter={filter} uptdateFilter={this.uptdateFilter}/>
          </div>
          <MovieList data={visibledate} onDeleteItem={this.onDeleteItem} addFavourite={this.addFavourite}/>
          <MovieAddForm addElement={this.addElement}/>
        </div>
      </div>
    )
  }
}
