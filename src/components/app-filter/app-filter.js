import './app-filter.css'

const AppFilter = ({ filter, uptdateFilter}) => {
    return(
<div className='btn-group'>
  {btnArr.map(btn => (<button key={btn.name} className={`btn ${filter == btn.name ? "btn-dark" : "btn-outline-dark" }`} onClick={() => uptdateFilter(btn.name)} type='button'>{btn.label}</button>))}


</div>
    )
}
const btnArr  = [
  { name: "all", label:"Barcha kinolar"},
  { name: "popular", label:"Mashxur kinolar"},
  { name: "mostViewers", label: "Eng ko'p ko'rilgan kinolar"}
]
export default AppFilter