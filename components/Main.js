import React from 'react';
import { StyleSheet, Text, View, Modal, TouchableHighlight } from 'react-native';

import Board from './Board.js';

export default class GameScreen extends React.Component {
  board = null;
  data = null;

  constructor(props) {
	super(props)
	data = this.props.navigation.getParam('data', 'SET DEFAULT VALUE LATER')

	this.state = {
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
  resetLevel() {
	// reset the level, clear the selected squares
	const data = this.props.navigation.getParam('data', 'SET DEFAULT VALUE LATER')

	this.setState({
		movesLeft: data.total_moves,
		end_message_visible: false
	});

	//call function to reset state in board
	board.resetLevel();

  }
  backToLevelSelect() {
	// goes back to level select screen

	const { navigate } = this.props.navigation;
	navigate('Home')
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
	    visible={this.state.end_message_visible}
	    transparent={true}
	    onRequestClose={() => console.log("Sorry back button does nothing here")}>
	  <View style={styles.popup_container}>
		<View style={styles.popup_box}>
	  		<TouchableHighlight style={styles.popup_btn} onPress={() => this.closeModal()}>
				<Text>Close</Text>
			</TouchableHighlight>
			<TouchableHighlight style={styles.popup_btn} onPress={() => this.resetLevel()}>
				<Text>Replay</Text>
			</TouchableHighlight>
		</View>
	  </View>
      	</Modal>
	<Board numsquares={data.numsquares}
		squares={data.squares}
		movesLeft={this.state.movesLeft}
		ref={(c) => board = c}
		onPressSquare={this.onPressSquare.bind(this)}/>

	<Text>{this.state.movesLeft}</Text>

	<TouchableHighlight style={styles.back_to_level_select} onPress={() => this.backToLevelSelect()}>
		<Text>Back</Text>
	</TouchableHighlight>
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
  popup_container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  popup_box: {
    flex: 0,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
    width: 300,
    height: 150,
    backgroundColor: 'red',
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 10
  },
  popup_btn: {
    flex: 0,
    justifyContent: 'center',
    alignItems: 'center',
    width: 100,
    height: 100,
    backgroundColor: 'blue',
    margin: 20
  },
  back_to_level_select: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    backgroundColor: 'blue',
    flex: 0,
    justifyContent: 'center',
    alignItems: 'center',
    width: 100,
    height: 50
  }
});
