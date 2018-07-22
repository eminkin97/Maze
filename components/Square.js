import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default class Square extends React.Component {
  constructor(props) {
	super(props)
	this.state = {
		pk: this.props.pk,
		value: this.props.value
	}
  }
  componentDidMount() {
	if (this.props.start) {
		//this square is the start_square
		this.Press()
	}
  }
  Press() {
	console.log("Pressed square id: " + this.state.pk)
	if (this.props.start) {
		this.props.squarePressOk(this.state.pk, true, this.state.value)

	} else if (!this.state.press_status && this.props.squarePressOk(this.state.pk, false, this.state.value)) {
		// Called when user presses the square
		// Change color of Square
		// check to see if a neighbor of this square has been pressed
		// if neighbor square has been pressed then we're all good to go

		//call function that updates how many moves are left
		//if the square is the end square then this ends the round
		if (this.props.end) {
			this.props.onPressSquare(this.state.value, true)
		} else {
			this.props.onPressSquare(this.state.value, false)
		}
	}
  }
  getPressStatus() {
	// check if this square has been pressed
	if (this.props.pressed_squares_id.indexOf(this.state.pk) != -1) {
		return true;
	} else {
		return false;
	}
  }
  render() {
    if (this.props.end) {
	// different style for end square
	return (
      		<TouchableOpacity style={[{width: this.props.width_height, height: this.props.width_height}, 
			styles.container, this.getPressStatus() ? styles.end_square_pressed : styles.end_square_unpressed]}
			onPress={this.Press.bind(this)}>
		<Text style={styles.end_square_text}>{this.state.value}</Text>
      		</TouchableOpacity>
    	);

    } else {
	let value;
	if (this.props.start) {
		value = "start";
	} else {
		value = this.state.value;
	}

    	return (
      		<TouchableOpacity style={[{width: this.props.width_height, height: this.props.width_height}, 
			styles.container, this.getPressStatus() ? styles.pressed : styles.unpressed]}
			onPress={this.Press.bind(this)}>
		<Text>{ value }</Text>
      		</TouchableOpacity>
    	);
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 0,
    borderWidth: 0.5,
    borderColor: 'black',
    justifyContent: 'center',
    alignItems: 'center'
  },
  unpressed: {
    backgroundColor: 'orange'
  },
  pressed: {
    backgroundColor: 'yellow'
  },
  end_square_pressed: {
    backgroundColor: 'black'
  },
  end_square_unpressed: {
    backgroundColor: 'gray'
  },
  end_square_text: {
    color: 'white'
  }
});
