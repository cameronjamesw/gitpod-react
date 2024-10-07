import React, { Component } from 'react'
import names from '../names'

export class SearchBar extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
        names : names
      }
    }

    handleChange = (e) => {
        const inputText = e.target.value.toLowerCase();
        const filteredNames = names.filter(name => {
            return name.toLowerCase().includes(inputText)
        })
        this.setState({
            names: filteredNames
        })
    }

    render() {
        return (
            <div>
                <h1>Name Search...</h1>
                <p>Matching names found: {this.state.names.length}</p>
                <form>
                    <input placeholder="Search Names"
                           type="text"
                           onChange={(e) => this.handleChange(e)}></input>
                    <div>
                        {this.state.names.map(name => {
                            return <p key={name}>{name}</p>
                        })}
                    </div>
                </form>
            </div>
        )
    }
}

export default SearchBar