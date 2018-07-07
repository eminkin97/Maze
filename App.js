import React from 'react';
import { StyleSheet, Text, View, Modal, Button } from 'react-native';

import Board from './components/Board.js';
import data from './levels/level1.json';

export default class App extends React.Component {
  constructor() {
	super()
	this.state = {
		level: 1,
		movesLeft: data.total_moves,
		end_message_visible: false
	}
  }
  closeModal() {
	console.log("Level is over")
	this.setState({
		end_message_visible: false
	})
  }
  onPressSquare(value, isEnd) {
	// when square is pressed decrease the amount of moves left by the value of the square
	if (isEnd) {
		this.setState({
			end_message_visible: true
		})
	}
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
      	<Modal
	    style={styles.end_message}
	    visible={this.state.end_message_visible}
	    onRequestClose={() => this.closeModal()}>
	  <Text>End</Text>
	  <Button title="close" onPress={() => this.closeModal()}/>
      	</Modal>
	<Board numsquares={data.numsquares}
		squares={data.squares}
		movesLeft={this.state.movesLeft}
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
  end_message: {
    flex: 1,
    backgroundColor: 'orange',
    width: 300,
    height: 300
  }
});
