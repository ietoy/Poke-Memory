# Poke-Memory
A Pokemon themed memory game! How many can you click before clicking the same one twice?

## Table of Contents
1. Introduction
2. Technologies Used
3. Requirements
4. Under the Hood
5. The App in Action!
6. Authors
7. Acknowledgements

## Introduction
Poke-Memory is a simple memory game built using React. Upon load, the user is shown a tableau of 12 different Pokemon. The game begins when the user clicks a Pokemon.

If the user clicks a Pokemon that the havent clicked before, the tableau shuffles the images and the users score goes up by one! If the user clicks a Pokemon they have already clicked, they lose! Their score resets to zero and the tableau shuffles again. If their last score is the highest they've earned yet, however, it will be stored as the high score!

## Technologies Used
* HTML
* CSS
* JavaScript
* [Materialize](https://materializecss.com/)
* [React](https://reactjs.org/)

## Requirements
This game can be played on a browser with JavaScript.

## Under the Hood
This game leverages the power and utility of state-ful components using the React JavaScript library.

In our App.js file, we instantiate a new "state" object after importing our needed components:
    
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
    ...
    }

The applicaiton uses this "state" object to track the game state. We instantiate this object by establishing a few key-value pairs, defining the initial bannerText to be displayed when the user first visits the page, as well as the begining scores, the array of clicked Pokemon, and a JSON object of Pokemon containing the names, ids, and image source links for each of the Pokemon displayed in this game.

Upon load, this is what the user sees:
![dashboard-load](/pokememory/dashboard-load.png)

As the user plays, this state object is updated using an event listener added to each of the tile components on render:

    // our handleClick function takes in an id as a parameter
    handleClick = id => {

        // if we have already clicked this pokemon...
        if (this.state.clickedPkmn.includes(id)) {

            // and if the user has a new high score, we update that here
            if (this.state.curScore > this.state.topScore) {
                this.setState({ topScore: this.state.curScore })
            }

        // we update our state object using the setState method
        // to change the text shown on the nav bar
        this.setState({ bannerText: "Oh no! You clicked that one     already! Try again?" })
        // as well as reseting the game state to play again!
        this.setState({ clickedPkmn: [] });
        this.setState({ curScore: 0 });
        
        // otherwise, we increase the score by one and add that clicked
        // Pokemon's id to our clickedPkmn array using a spread operator
        // and the setState method
        } else {
        this.setState({ bannerText: "You guessed correctly! Keep going!"})
        this.setState({ clickedPkmn: [...this.state.clickedPkmn, id]});
        var newScore = this.state.curScore + 1;
        this.setState({ curScore: newScore});
        }

        // after we update the game state, we shuffle our list of Pokemon
        this.pokeShuffle(this.state.pokemon)
    };

## The App in Action!
![Application Preview](/pokememory/poke-demo.gif)

Want to play? Try it out!
* [See Live Site](https://ietoy.github.io/Poke-Memory/) 

## Authors
Ian Toy
* [GitHub](https://github.com/ietoy)
* [LinkedIn](https://www.linkedin.com/in/ian-toy-265077196/)

## Acknowledgements
Special thanks to our instructor Jerome, our TAs Mahisha and Kerwin, and my colleagues Ken and Manuel for all of their help. Couldn't have done it without y'all!