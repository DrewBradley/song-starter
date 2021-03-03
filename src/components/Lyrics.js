import React, { Component }  from 'react';
import './Song.css';
// import { fetchPoem } from '../network-calls'

class Lyrics extends Component {
  constructor() {
    super()
    this.state = {
      title: "",
      author: "",
      short: [],
      full: []
    }
  }

  componentDidMount() {
    fetch('https://poetrydb.org/random/1/title,lines,author')
      .then(response => response.json())
      .then(data => this.cleanData(data[0]))
  }

  cleanData = (data) => {
    this.setState({
        title: data.title,
        author: data.author,
        short: [data.lines[0], data.lines[1], data.lines[2], data.lines[3],],
        full: data.lines
    })
  }

  render(){
    const lyricsLines = this.state.short.map(line => {
      return <p>{line}</p>
    })
    return (
      <div className="Lyrics">
        <h1>Lyrics</h1>
        <div className="lyric-display">{lyricsLines}</div>
        <p>"{this.state.title}" by {this.state.author}</p>
      </div>
    );
  }
  
}

export default Lyrics;