import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Square from './Square.js';

export default class Board extends React.Component {
  render() {
    // repeats squares until we have the amount necessary
    var squareList = []

    for (var i = 0; i < this.props.numsquares; i++) {
	squareList.push(<Square key={this.props.squares[i].id}
		pk={this.props.squares[i].id}
		value={this.props.squares[i].value}
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
    margin: 50,
    width: 300,
    height: 300 
  },
});
