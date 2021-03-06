import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Square from './Square.js';

export default class Board extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
	pressed_squares_id: []		//array contains ids of squares that have been pressed
    }
  }
  resetLevel(start_square_id) {
	// reset the board when the replay button is pressed
	// find the start square
	let new_arr = []
	new_arr.push(start_square_id);

	this.setState({
		//pressed_squares_id: [this.state.pressed_squares_id[0]]
		pressed_squares_id: new_arr
        });
  }
  squarePressOk(id, isStartSquare, square_value) {
    // this function checks to see if the square pressed has neighbors that have been pressed
    // i.e. is it a valid press

    //check to see if square is already pressed
    if (this.state.pressed_squares_id.indexOf(id) != -1) {
	return false
    }

    // startSquare is exception, check if it's startSquare and append to pressed squares array if it is
    if (isStartSquare) {
	this.setState({pressed_squares_id: this.state.pressed_squares_id.concat(id)})
	return true
    }

    //if there are no more moves left, cannot click square
    if (this.props.movesLeft <= 0) {
	return false
    } else if (this.props.movesLeft - square_value < 0) {
	return false
    }

    console.log("pressed squares ids: " + this.state.pressed_squares_id)

    let row_column_length = Math.sqrt(this.props.numsquares)

    // check if the square has a left neighbor
    if (this.state.pressed_squares_id.indexOf(id-1) != -1) {
	//check if left neighbor is valid
	let a = (id - 1) % row_column_length
	let b = id % row_column_length

	if (b == a + 1) {
		//left neighbor is valid and pressed
		this.setState({pressed_squares_id: this.state.pressed_squares_id.concat(id)})
		return true
	}
	
    }

    // check if the square has a right neighbor
    if (this.state.pressed_squares_id.indexOf(id+1) != -1) {
	//check if right neighbor is valid
	let a = (id + 1) % row_column_length
	let b = id % row_column_length

	if (b == a - 1) {
		//right neighbor is valid and pressed
		this.setState({pressed_squares_id: this.state.pressed_squares_id.concat(id)})
		return true
	}
	
    }

    // check if the square has a top neighbor
    if (this.state.pressed_squares_id.indexOf(id - row_column_length) != -1) {
	this.setState({pressed_squares_id: this.state.pressed_squares_id.concat(id)})
	return true
    }

    // check if the square has a bottom neighbor
    if (this.state.pressed_squares_id.indexOf(id + row_column_length) != -1) {
	this.setState({pressed_squares_id: this.state.pressed_squares_id.concat(id)})
	return true
    }

    //otherwise, no pressed neighbors so return false
    return false
  }
  render() {
    // repeats squares until we have the amount necessary
    var squareList = []
    let row_column_length = Math.sqrt(this.props.numsquares)
    let width_height = (Math.round((350/row_column_length) * 1000) - 1)/1000 
    console.log(350/row_column_length)
    console.log(width_height)

    for (var i = 0; i < this.props.numsquares; i++) {
	squareList.push(<Square key={this.props.squares[i].id}
		pk={this.props.squares[i].id}
		value={this.props.squares[i].value}
		start={this.props.squares[i].start}
		end={this.props.squares[i].end}
		color={this.props.color}
		width_height={width_height}
		pressed_squares_id={this.state.pressed_squares_id}
		squarePressOk={this.squarePressOk.bind(this)}
		onPressSquare={this.props.onPressSquare.bind(this)}/>)
    }

    return (
      <View style={styles.container}>
	{ squareList }
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'orange',
    flex: 0,
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 50,
    width: 350,
    height: 350 
  },
});
