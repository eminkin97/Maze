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
	let val = this.state.value
	let color = this.props.color

	if (val >= 95) {
		background_color = styles["unpressed_val_19_" + color]
	} else if (val >= 90) {
		background_color = styles["unpressed_val_18_" + color]
	} else if (val >= 85) {
		background_color = styles["unpressed_val_17_" + color]
	} else if (val >= 80) {
		background_color = styles["unpressed_val_16_" + color]
	} else if (val >= 75) {
		background_color = styles["unpressed_val_15_" + color]
	} else if (val >= 70) {
		background_color = styles["unpressed_val_14_" + color]
	} else if (val >= 65) {
		background_color = styles["unpressed_val_13_" + color]
	} else if (val >= 60) {
		background_color = styles["unpressed_val_12_" + color]
	} else if (val >= 55) {
		background_color = styles["unpressed_val_11_" + color]
	} else if (val >= 50) {
		background_color = styles["unpressed_val_10_" + color]
	} else if (val >= 45) {
		background_color = styles["unpressed_val_9_" + color]
	} else if (val >= 40) {
		background_color = styles["unpressed_val_8_" + color]
	} else if (val >= 35) {
		background_color = styles["unpressed_val_7_" + color]
	} else if (val >= 30) {
		background_color = styles["unpressed_val_6_" + color]
	} else if (val >= 25) {
		background_color = styles["unpressed_val_5_" + color]
	} else if (val >= 20) {
		background_color = styles["unpressed_val_4_" + color]
	} else if (val >= 15) {
		background_color = styles["unpressed_val_3_" + color]
	} else if (val >= 10) {
		background_color = styles["unpressed_val_2_" + color]
	} else if (val >= 5) {
		background_color = styles["unpressed_val_1_" + color]
	} else if (val >= 0) {
		background_color = styles["unpressed_val_0_" + color]
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
  unpressed_val_0_orange: {
    backgroundColor: '#F7CFAA'
  },
  unpressed_val_1_orange: {
    backgroundColor: '#F5C08D'
  },
  unpressed_val_2_orange: {
    backgroundColor: '#F5B57A'
  },
  unpressed_val_3_orange: {
    backgroundColor: '#F3AB67'
  },
  unpressed_val_4_orange: {
    backgroundColor: '#F19D4F'
  },
  unpressed_val_5_orange: {
    backgroundColor: '#F19640'
  },
  unpressed_val_6_orange: {
    backgroundColor: '#F08B2D'
  },
  unpressed_val_7_orange: {
    backgroundColor: '#EF8623'
  },
  unpressed_val_8_orange: {
    backgroundColor: '#EF811A'
  },
  unpressed_val_9_orange: {
    backgroundColor: '#E37611'
  },
  unpressed_val_10_orange: {
    backgroundColor: '#DB710F'
  },
  unpressed_val_11_orange: {
    backgroundColor: '#CD6A0E'
  },
  unpressed_val_12_orange: {
    backgroundColor: '#C4650C'
  },
  unpressed_val_13_orange: {
    backgroundColor: '#B65E0B'
  },
  unpressed_val_14_orange: {
    backgroundColor: '#B15B0B'
  },
  unpressed_val_15_orange: {
    backgroundColor: '#A7560A'
  },
  unpressed_val_16_orange: {
    backgroundColor: '#9F5108'
  },
  unpressed_val_17_orange: {
    backgroundColor: '#924A06'
  },
  unpressed_val_18_orange: {
    backgroundColor: '#854204'
  },
  unpressed_val_19_orange: {
    backgroundColor: '#7C3D02'
  },
  unpressed_val_0_blue: {
    backgroundColor: '#ABADFB'
  },
  unpressed_val_1_blue: {
    backgroundColor: '#9899FA'
  },
  unpressed_val_2_blue: {
    backgroundColor: '#898BFA'
  },
  unpressed_val_3_blue: {
    backgroundColor: '#7577FA'
  },
  unpressed_val_4_blue: {
    backgroundColor: '#6063FA'
  },
  unpressed_val_5_blue: {
    backgroundColor: '#5558FA'
  },
  unpressed_val_6_blue: {
    backgroundColor: '#4649FB'
  },
  unpressed_val_7_blue: {
    backgroundColor: '#383BF9'
  },
  unpressed_val_8_blue: {
    backgroundColor: '#292CF9'
  },
  unpressed_val_9_blue: {
    backgroundColor: '#1A1DF9'
  },
  unpressed_val_10_blue: {
    backgroundColor: '#0509F9'
  },
  unpressed_val_11_blue: {
    backgroundColor: '#0509E9'
  },
  unpressed_val_12_blue: {
    backgroundColor: '#0509DF'
  },
  unpressed_val_13_blue: {
    backgroundColor: '#0609CF'
  },
  unpressed_val_14_blue: {
    backgroundColor: '#0407BC'
  },
  unpressed_val_15_blue: {
    backgroundColor: '#0407B3'
  },
  unpressed_val_16_blue: {
    backgroundColor: '#0507A3'
  },
  unpressed_val_17_blue: {
    backgroundColor: '#060897'
  },
  unpressed_val_18_blue: {
    backgroundColor: '#050789'
  },
  unpressed_val_19_blue: {
    backgroundColor: '#050779'
  },
  unpressed_val_0_purple: {
	backgroundColor: '#A13EA1'
  },
  unpressed_val_1_purple: {
	backgroundColor: '#963596'
  },
  unpressed_val_2_purple: {
	backgroundColor: '#8F2D8F'
  },
  unpressed_val_3_purple: {
	backgroundColor: '#862786'
  },
  unpressed_val_4_purple: {
	backgroundColor: '#752375'
  },
  unpressed_val_5_purple: {
	backgroundColor: '#6F1F6F'
  },
  unpressed_val_6_purple: {
	backgroundColor: '#691B69'
  },
  unpressed_val_7_purple: {
	backgroundColor: '#5C145C'
  },
  unpressed_val_8_purple: {
	backgroundColor: '#4F104F'
  },
  unpressed_val_9_purple: {
	backgroundColor: '#4D0E4D'
  },
  unpressed_val_10_purple: {
	backgroundColor: '#460B46'
  },
  unpressed_val_11_purple: {
	backgroundColor: '#470A47'
  },
  unpressed_val_12_purple: {
	backgroundColor: '#440844'
  },
  unpressed_val_13_purple: {
	backgroundColor: '#3C053C'
  },
  unpressed_val_14_purple: {
	backgroundColor: '#340334'
  },
  unpressed_val_15_purple: {
	backgroundColor: '#2B022B'
  },
  unpressed_val_16_purple: {
	backgroundColor: '#270027'
  },
  unpressed_val_17_purple: {
	backgroundColor: '#270027'
  },
  unpressed_val_18_purple: {
	backgroundColor: '#270027'
  },
  unpressed_val_19_purple: {
	backgroundColor: '#270027'
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
