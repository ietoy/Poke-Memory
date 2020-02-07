import React, { Component } from 'react';
import './App.css';
import Banner from "./components/Banner";
import Footer from "./components/Footer";
import Game from './components/Game';
import Tile from "./components/Tile"

import pokemon from "./pokemon.json";

class App extends Component {

  state = {
    bannerText: "Hello world!",
    topScore: 0,
    curScore: 0,
    pokemon,
    clickedPkmn: []
  }
 
  // pokeShuffle = arr => {
  //   var newInd;
  //   for (var i = arr.length -1; i > 0; i--) {
  //     newInd = Math.floor(Math.random() * (i + 1))
  //     temp = arr[i];
  //     arr[i] = arr[newInd];
  //     arr[newInd] = temp;
  //   }
  //   return arr;
  // }

  // componentDidMount() {
  //   console.log(this.state.bannerText)
  // }


  // WRITE HANDLE CLICK FUNCTION
  handleClick = id => {
    this.setState({ clickedPkmn: [...this.state.clickedPkmn, id]})

    console.log(this.state.clickedPkmn)

  };




  render() {
    // console.log(pokemon);
    return (
      <div>
        <Banner />
  
        <Game>
          {this.state.pokemon.map(pkmn => (
            <Tile
              id={pkmn.id}
              key={pkmn.id}
              name={pkmn.name}
              img={pkmn.img}
              handleClick={this.handleClick}
            />
          ))}
        </Game>
        
        <Footer />
      </div>
    );
  }
}





export default App;
