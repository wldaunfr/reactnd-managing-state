import React, { Component } from 'react';
import Equation from './Equation.js';
import Score from './Score.js';

function randomNumber(ceil) {
  return Math.floor(Math.random() * ceil)
}

class Game extends Component {
  state = {
    numQuestions: 0,
    numCorrect: 0,
    ...this.newEquation()
  };

  newEquation() {
    const value1 = randomNumber(100);
    const value2 = randomNumber(100);
    const value3 = randomNumber(100);
    const proposedAnswer = randomNumber(3) + value1 + value2 + value3;

    return { value1, value2, value3, proposedAnswer };
  }

  handleClick(givenAnswer) {
    const correctAnswer = this.state.value1 + this.state.value2 + this.state.value3

    if ((this.state.proposedAnswer === correctAnswer) === givenAnswer) {
      this.setState((currentState) => ({numCorrect: currentState.numCorrect + 1 }));
    }

    this.setState((currentState) => ({ ...this.newEquation(), numQuestions: currentState.numQuestions + 1 }));
  }

  render() {
    return (
      <div className="game">
        <h2>Mental Math</h2>
        <Equation summand1={this.state.value1} summand2={this.state.value2} summand3={this.state.value3} sum={this.state.proposedAnswer} />
        <button onClick={() => this.handleClick(true)}>True</button>
        <button onClick={() => this.handleClick(false)}>False</button>
        <Score numCorrect={this.state.numCorrect} numQuestions={this.state.numQuestions} />
      </div>
    );
  }
}

export default Game;
