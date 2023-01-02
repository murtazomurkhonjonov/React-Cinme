import './search-panel.css'
import { Component } from 'react'
class SearchPanel extends Component{
    constructor(props){
        super(props)
        this.state = {
            temp: ""
        }
    }
    searchValue = (e) => {
     const value  = e.target.value.toLowerCase()
     this.setState({ temp: value})
     this.props.searchTemp(value)
    }
    render(){
    return(
        <input type="text" className='form-control search-input' placeholder='Kinolarni qidirish' onChange={this.searchValue} value={this.state.value}/>
    )
    }
}
export default SearchPanel