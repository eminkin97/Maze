import React from 'react';
import { StyleSheet, Text, View, Modal, TouchableHighlight } from 'react-native';
import { Icon } from 'react-native-elements';

import Board from './Board.js';

export default class GameScreen extends React.Component {
  board = null;
  data = null;
  levels = null;

  constructor(props) {
	super(props)
	levels = this.props.navigation.getParam('levels', 'SET DEFAULT VALUE LATER')
	num = this.props.navigation.getParam('num', 0)
	
	for (let i = 0; i < levels.length; i++) {
		if (levels[i].num == num) {
			data = levels[i].data
		}
	}

	this.state = {
		movesLeft: data.total_moves,
		end_message_visible: false,
		level_num: num
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
	this.setState({
		movesLeft: data.total_moves,
		end_message_visible: false
	});

	//find start square
	let start_square_id;
	for (let i = 0; i < data.numsquares; i++) {
		if (data.squares[i].start) {
			start_square_id = data.squares[i].id
		}
	}

	//call function to reset state in board
	board.resetLevel(start_square_id);
  }
  nextLevel() {
	this.setState({
		end_message_visible: false
	});
	this.props.navigation.push('Game', { levels: levels, num: this.state.level_num + 1});
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
		<View style={styles.popup_box_container}>
			<Text style={styles.popup_box_text}>Level Completed!</Text>
			<View style={styles.popup_box}>
	  			<TouchableHighlight style={styles.popup_btn} onPress={() => this.backToLevelSelect()}>
					<Icon name='arrow-left-bold' type='material-community' size={60} />
				</TouchableHighlight>
				<TouchableHighlight style={styles.popup_btn} onPress={() => this.resetLevel()}>
					<Icon name='replay' type='material-community' size={70} />
				</TouchableHighlight>
				<TouchableHighlight style={styles.popup_btn} onPress={() => this.nextLevel()}>
					<Icon name='menu-right' type='material-community' size={80} />
				</TouchableHighlight>

			</View>
		</View>
	  </View>
      	</Modal>
	<Board numsquares={data.numsquares}
		squares={data.squares}
		movesLeft={this.state.movesLeft}
		ref={(c) => board = c}
		onPressSquare={this.onPressSquare.bind(this)}/>

	<Text style={styles.moves_left}>{this.state.movesLeft}</Text>

	<TouchableHighlight style={styles.back_to_level_select} onPress={() => this.backToLevelSelect()}>
		<Icon name='arrow-left-bold' type='material-community' size={55} />
	</TouchableHighlight>

	<TouchableHighlight style={styles.replay_level_btn} onPress={() => this.resetLevel()}>
		<Icon name='replay' type='material-community' size={45} />
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
  popup_box_container: {
    flex: 0,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#404040',
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 10,
    width: 300,
    height: 175,
  },
  popup_box: {
    flex: 0,
    alignSelf: 'stretch',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
  },
  popup_btn: {
    flex: 0,
    justifyContent: 'center',
    alignItems: 'center',
    width: 80,
    height: 80,
    backgroundColor: '#e6e6e6',
    margin: 10,
    borderWidth: 3,
    borderRadius: 10
  },
  popup_box_text: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#e6e6e6'
  },
  back_to_level_select: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    backgroundColor: '#e6e6e6',
    flex: 0,
    justifyContent: 'center',
    alignItems: 'center',
    width: 70,
    height: 50,
    borderWidth: 3,
    borderBottomWidth: 0,
    borderLeftWidth: 0,
    borderTopRightRadius: 10
  },
  replay_level_btn: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    backgroundColor: '#e6e6e6',
    flex: 0,
    justifyContent: 'center',
    alignItems: 'center',
    width: 70,
    height: 50,
    borderWidth: 3,
    borderBottomWidth: 0,
    borderRightWidth: 0,
    borderTopLeftRadius: 10
  },
  moves_left: {
    margin: 50,
    fontWeight: 'bold',
    fontSize: 80,
    color: '#003300'
  }
});
