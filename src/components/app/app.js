import './app.css'
import AppInfo from "../app-info/app-info"
import SearchPanel from "../search-panel/search-panel"
import AppFilter from "../app-filter/app-filter"
import MovieList from "../movie-list/movie-list"
import MovieAddForm from "../movies-add-form/movie-add"
const App = () =>{
  const data = [
    { name : "Emperia of Osman", viewers : "989", favorite: true},
    { name : "Payitaht Abdulhamid", viewers : "897", favorite: false},
    { name : "Ertugrul", viewers : "900", favorite: false}
  ]
  return(
    <div className="app font-monospace">
      <div className="content">
        <AppInfo />
        <div className='search-panel'>
          <SearchPanel />
          <AppFilter />
        </div>
        <MovieList data={data}/>
        <MovieAddForm />
      </div>
    </div>
  )
}
export default App