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
  getBackgroundColor() {
	// background color depends on value of square
	let background_color;
	if (this.state.value == 0) {
		background_color = styles.unpressed_val_0;
	} else if (this.state.value == 1) {
		background_color = styles.unpressed_val_1;
	} else if (this.state.value == 2) {
		background_color = styles.unpressed_val_2;
	} else if (this.state.value == 3) {
		background_color = styles.unpressed_val_3;
	} else if (this.state.value == 4) {
		background_color = styles.unpressed_val_4;
	} else if (this.state.value == 5) {
		background_color = styles.unpressed_val_5;
	} else if (this.state.value == 6) {
		background_color = styles.unpressed_val_6;
	} else if (this.state.value == 7) {
		background_color = styles.unpressed_val_7;
	} else if (this.state.value == 8) {
		background_color = styles.unpressed_val_8;
	} else if (this.state.value == 9) {
		background_color = styles.unpressed_val_9;
	} else if (this.state.value == 10) {
		background_color = styles.unpressed_val_10;
	} else if (this.state.value == 11) {
		background_color = styles.unpressed_val_11;
	} else if (this.state.value == 12) {
		background_color = styles.unpressed_val_12;
	} else if (this.state.value == 13) {
		background_color = styles.unpressed_val_13;
	} else if (this.state.value == 14) {
		background_color = styles.unpressed_val_14;
	} else if (this.state.value == 15) {
		background_color = styles.unpressed_val_15;
	}
	return background_color;
  }
  render() {
    if (this.props.end) {
	// different style for end square
	return (
      		<TouchableOpacity style={[{width: this.props.width_height, height: this.props.width_height}, 
			styles.container, this.getPressStatus() ? styles.end_square_pressed : styles.end_square_unpressed]}
			onPress={this.Press.bind(this)}>
		<Text style={[styles.end_square_text, styles.square_text]}>{this.state.value}</Text>
      		</TouchableOpacity>
    	);

    } else {
	let value;
	if (this.props.start) {
		value = "start";
	} else {
		value = this.state.value;
	}

	let background_color = this.getBackgroundColor()

    	return (
      		<TouchableOpacity style={[{width: this.props.width_height, height: this.props.width_height}, 
			styles.container, this.getPressStatus() ? styles.pressed : background_color ]}
			onPress={this.Press.bind(this)}>
		<Text style={[styles.square_text]}>{ value }</Text>
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
  unpressed_val_0: {
    backgroundColor: '#fff0e6'
  },
  unpressed_val_1: {
    backgroundColor: '#ffe0cc'
  },
  unpressed_val_2: {
    backgroundColor: '#ffd1b3'
  },
  unpressed_val_3: {
    backgroundColor: '#ffe0cc'
  },
  unpressed_val_4: {
    backgroundColor: '#ffc299'
  },
  unpressed_val_5: {
    backgroundColor: '#ffb380'
  },
  unpressed_val_6: {
    backgroundColor: '#ffa366'
  },
  unpressed_val_7: {
    backgroundColor: '#ff944d'
  },
  unpressed_val_8: {
    backgroundColor: '#ff8533'
  },
  unpressed_val_9: {
    backgroundColor: '#ff751a'
  },
  unpressed_val_10: {
    backgroundColor: '#ff6600'
  },
  unpressed_val_11: {
    backgroundColor: '#e65c00'
  },
  unpressed_val_12: {
    backgroundColor: '#cc5200'
  },
  unpressed_val_13: {
    backgroundColor: '#b34700'
  },
  unpressed_val_14: {
    backgroundColor: '#993d00'
  },
  unpressed_val_15: {
    backgroundColor: '#803300'
  },
  pressed: {
    backgroundColor: 'yellow'
  },
  end_square_pressed: {
    backgroundColor: 'black'
  },
  end_square_unpressed: {
    backgroundColor: '#333333'
  },
  end_square_text: {
    color: 'white'
  },
  square_text: {
    fontSize: 20,
    fontWeight: 'bold'
  }
});
