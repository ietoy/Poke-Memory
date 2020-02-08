import React, { Component } from 'react';
import './App.css';
import Banner from "./components/Banner";
import Footer from "./components/Footer";
import Game from './components/Game';
import Tile from "./components/Tile"

import pokemon from "./pokemon.json";

class App extends Component {

  state = {
    bannerText: "Click a Pokemon to Start!",
    topScore: 0,
    curScore: 0,
    pokemon,
    clickedPkmn: []
  }
 

  // ERROR ABOUT TEMP NOT BEING DEFINED???
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


  // WRITE HANDLE CLICK FUNCTION
  handleClick = id => {

    if (this.state.clickedPkmn.includes(id)) {
      // console.log("You clicked that one already!");

      if (this.state.curScore > this.state.topScore) {
        this.setState({ topScore: this.state.curScore })
      }

      this.setState({ bannerText: "Oh no! You clicked that one already! Try again?" })
      this.setState({ clickedPkmn: [] });
      this.setState({ curScore: 0 });

    } else {

      this.setState({ bannerText: "You guessed correctly! Keep going!"})
      this.setState({ clickedPkmn: [...this.state.clickedPkmn, id]});
      var newScore = this.state.curScore + 1;
      this.setState({ curScore: newScore});
  
    
    }

  };




  render() {
    // console.log(pokemon);
    return (
      <div>
        <Banner 
          bannerText={this.state.bannerText}
          curScore={this.state.curScore}
          topScore={this.state.topScore}
        />
  
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
