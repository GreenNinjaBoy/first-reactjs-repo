import React, { Component } from 'react'

export default class SearchBar extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         
      }
    }
    
  render() {
    return (
      <div>
        <h1>Search for a Name</h1>
        <form>
          <input type="text" placeholder="Search..." />
          <input type="submit" value="Search" />
          </form>
      </div>
    )
  }
}
