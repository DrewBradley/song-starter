import React, { Component } from 'react';
// import { Chord } from "tonal"
// import * as Key from "tonal-key";
import './App.css';
import {Switch, Route} from 'react-router-dom'
import Song from './Song'
import Poem from './Poem'
import Saved from './Saved'
import Header from './Header'
import { fetchPoem } from '../network-calls'

class App extends Component {
  constructor() {
    super()
    this.state = {
      key: "",
      lyrics: "",
      progression: "",
    }
  }

  createNewSong = () => {
    fetchPoem()
    .then(data => this.setState({
      lyrics: data})
    )
  }

  render(){
        console.log("this.state", this.state.lyrics)
    return (
      <div className="App">
        <Header createNewSong={this.createNewSong}/>
        <Switch>
          <Route exact path="/"   
          render={() => {
          return <Song lyrics={ this.state.lyrics }/>
          }}/>
          <Route path="/poem" 
            render={() => {
            return <Poem lyrics={ this.state.lyrics }/>
          }}/>
          <Route path="/saved" component={ Saved }/>
        </Switch>
      </div>
    ); 
  }
}

export default App;
