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
  onPressSquare() {
	if (this.state.movesLeft != 0) {
		this.setState({
			movesLeft: this.state.movesLeft - 1
		})
	}
	console.log(this.state.movesLeft)
  }
  render() {
    return (
      <View style={styles.container}>
	<Board numsquares={data.numsquares}
		square_values={data.square_values}
		onPressSquare={this.onPressSquare.bind(this)}
		start_square={data.start_square}
		end_square={data.end_square}>
	</Board>

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
