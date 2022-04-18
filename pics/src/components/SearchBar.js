import React from "react";
import './Selection.css'

class SearchBar extends React.Component {
    state = { term: ''  }

    onFormSubmit = (event) => {
        event.preventDefault()
    
        this.props.onSubmit(this.state.term)
    }
    


    render(){
        return (
            <div className="field">
                <form onSubmit={this.onFormSubmit} className="box">
                    <input 
                        className="input is-rounded is-primary" 
                        type="text" 
                        placeholder="Favorite among us" value={this.state.term} 
                        onChange={(e) => this.setState({ term: e.target.value })} 
                    />
                </form>
            </div>
        )
    }
}

export default SearchBar