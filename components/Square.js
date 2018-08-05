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
  unpressed_val_0_green: {
	backgroundColor: '#71C571'
  },
  unpressed_val_1_green: {
	backgroundColor: '#67C567'
  },
  unpressed_val_2_green: {
	backgroundColor: '#5DC45D'
  },
  unpressed_val_3_green: {
	backgroundColor: '#54C454'
  },
  unpressed_val_4_green: {
	backgroundColor: '#46C346'
  },
  unpressed_val_5_green: {
	backgroundColor: '#38BC38'
  },
  unpressed_val_6_green: {
	backgroundColor: '#32B832'
  },
  unpressed_val_7_green: {
	backgroundColor: '#2CAE2C'
  },
  unpressed_val_8_green: {
	backgroundColor: '#27A927'
  },
  unpressed_val_9_green: {
	backgroundColor: '#22A422'
  },
  unpressed_val_10_green: {
	backgroundColor: '#1F9D1F'
  },
  unpressed_val_11_green: {
	backgroundColor: '#198F19'
  },
  unpressed_val_12_green: {
	backgroundColor: '#137B13'
  },
  unpressed_val_13_green: {
	backgroundColor: '#0F700F'
  },
  unpressed_val_14_green: {
	backgroundColor: '#0B5F0B'
  },
  unpressed_val_15_green: {
	backgroundColor: '#085808'
  },
  unpressed_val_16_green: {
	backgroundColor: '#054605'
  },
  unpressed_val_17_green: {
	backgroundColor: '#033903'
  },
  unpressed_val_18_green: {
	backgroundColor: '#023002'
  },
  unpressed_val_19_green: {
	backgroundColor: '#012701'
  },
  unpressed_val_0_red: {
	backgroundColor: '#D25050'
  },
  unpressed_val_1_red: {
	backgroundColor: '#D43E3E'
  },
  unpressed_val_2_red: {
	backgroundColor: '#D52E2E'
  },
  unpressed_val_3_red: {
	backgroundColor: '#D22222'
  },
  unpressed_val_4_red: {
	backgroundColor: '#DB1919'
  },
  unpressed_val_5_red: {
	backgroundColor: '#C10F0F'
  },
  unpressed_val_6_red: {
	backgroundColor: '#BB0A0A'
  },
  unpressed_val_7_red: {
	backgroundColor: '#A90404'
  },
  unpressed_val_8_red: {
	backgroundColor: '#920606'
  },
  unpressed_val_9_red: {
	backgroundColor: '#840F0F'
  },
  unpressed_val_10_red: {
	backgroundColor: '#6E0C0C'
  },
  unpressed_val_11_red: {
	backgroundColor: '#5D0D0D'
  },
  unpressed_val_12_red: {
	backgroundColor: '#520909'
  },
  unpressed_val_13_red: {
	backgroundColor: '#6A0606'
  },
  unpressed_val_14_red: {
	backgroundColor: '#5E0101'
  },
  unpressed_val_15_red: {
	backgroundColor: '#500101'
  },
  unpressed_val_16_red: {
	backgroundColor: '#400101'
  },
  unpressed_val_17_red: {
	backgroundColor: '#360101'
  },
  unpressed_val_18_red: {
	backgroundColor: '#2C0000'
  },
  unpressed_val_19_red: {
	backgroundColor: '#2C0000'
  },
  unpressed_val_0_brown: {
	backgroundColor: '#9D7752'
  },
  unpressed_val_1_brown: {
	backgroundColor: '#8F6337'
  },
  unpressed_val_2_brown: {
	backgroundColor: '#7A542D'
  },
  unpressed_val_3_brown: {
	backgroundColor: '#704923'
  },
  unpressed_val_4_brown: {
	backgroundColor: '#6C441C'
  },
  unpressed_val_5_brown: {
	backgroundColor: '#704419'
  },
  unpressed_val_6_brown: {
	backgroundColor: '#6E4215'
  },
  unpressed_val_7_brown: {
	backgroundColor: '#683D11'
  },
  unpressed_val_8_brown: {
	backgroundColor: '#62380D'
  },
  unpressed_val_9_brown: {
	backgroundColor: '#5B330A'
  },
  unpressed_val_10_brown: {
	backgroundColor: '#583008'
  },
  unpressed_val_11_brown: {
	backgroundColor: '#502B06'
  },
  unpressed_val_12_brown: {
	backgroundColor: '#4C2804'
  },
  unpressed_val_13_brown: {
	backgroundColor: '#492603'
  },
  unpressed_val_14_brown: {
	backgroundColor: '#402101'
  },
  unpressed_val_15_brown: {
	backgroundColor: '#371C00'
  },
  unpressed_val_16_brown: {
	backgroundColor: '#2C1600'
  },
  unpressed_val_17_brown: {
	backgroundColor: '#2C1600'
  },
  unpressed_val_18_brown: {
	backgroundColor: '#2C1600'
  },
  unpressed_val_19_brown: {
	backgroundColor: '#2C1600'
  },
  unpressed_val_0_aqua: {
	backgroundColor: '#90C4C4'
  },
  unpressed_val_1_aqua: {
	backgroundColor: '#8DC8C8'
  },
  unpressed_val_2_aqua: {
	backgroundColor: '#7DC8C8'
  },
  unpressed_val_3_aqua: {
	backgroundColor: '#64CDCD'
  },
  unpressed_val_4_aqua: {
	backgroundColor: '#55D2D2'
  },
  unpressed_val_5_aqua: {
	backgroundColor: '#3FD3D3'
  },
  unpressed_val_6_aqua: {
	backgroundColor: '#2FDEDE'
  },
  unpressed_val_7_aqua: {
	backgroundColor: '#1FE4E4'
  },
  unpressed_val_8_aqua: {
	backgroundColor: '#22EBEB'
  },
  unpressed_val_9_aqua: {
	backgroundColor: '#10F3F3'
  },
  unpressed_val_10_aqua: {
	backgroundColor: '#04E0E0'
  },
  unpressed_val_11_aqua: {
	backgroundColor: '#05C6C6'
  },
  unpressed_val_12_aqua: {
	backgroundColor: '#0BACAC'
  },
  unpressed_val_13_aqua: {
	backgroundColor: '#0A9393'
  },
  unpressed_val_14_aqua: {
	backgroundColor: '#086D6D'
  },
  unpressed_val_15_aqua: {
	backgroundColor: '#056565'
  },
  unpressed_val_16_aqua: {
	backgroundColor: '#025959'
  },
  unpressed_val_17_aqua: {
	backgroundColor: '#004141'
  },
  unpressed_val_18_aqua: {
	backgroundColor: '#002D2D'
  },
  unpressed_val_19_aqua: {
	backgroundColor: '#002D2D'
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
