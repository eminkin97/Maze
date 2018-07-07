import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Board from './components/Board.js';
import data from './levels/level1.json';

export default class App extends React.Component {
  constructor() {
	super()
	this.state = {
		level: 1,
		movesLeft: data.total_moves,
	}
  }
  onPressSquare(value) {
	// when square is pressed decrease the amount of moves left by the value of the square
	if (this.state.movesLeft > 0) {
		this.setState({
			movesLeft: this.state.movesLeft - value
		})
	}
	console.log(this.state.movesLeft)
  }
  render() {
    return (
      <View style={styles.container}>
	<Board numsquares={data.numsquares}
		squares={data.squares}
		onPressSquare={this.onPressSquare.bind(this)}/>

	<Text>{this.state.movesLeft}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
});
