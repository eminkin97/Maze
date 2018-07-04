import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default class Square extends React.Component {
  constructor() {
	super()
	this.state = {
		press_status: false
	}
  }
  Press() {
	if (!this.state.press_status) {
		// Called when user presses the square
		// Change color of Square
		console.log("Square was pressed!")
		console.log(this.props.value)
		this.setState({
			press_status: true
		});

		//call function that updates how many moves are left
		this.props.onPressSquare()
	}
  }
  render() {
    return (
      <TouchableOpacity style={[styles.container, this.state.press_status ? styles.pressed : styles.unpressed]} onPress={this.Press.bind(this)}>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 0,
    width: 100,
    height: 100, 
    borderWidth: 0.5,
    borderColor: 'black'
  },
  unpressed: {
    backgroundColor: 'orange'
  },
  pressed: {
    backgroundColor: 'yellow'
  }
});
