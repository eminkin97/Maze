import React from 'react';
import { StyleSheet, Text, View, ScrollView, TouchableHighlight } from 'react-native';

// import the level data
import { LEVELS } from './level_library.js';

export default class LevelSelect extends React.Component {
  constructor(props) {
	super(props)
	let title = this.props.navigation.getParam('title', 'SET DEFAULT VALUE LATER')
	let dir = this.props.navigation.getParam('dir', 'SET DEFAULT LATER')
	let color = this.props.navigation.getParam('color', 'SET DEFAULT LATER')

	this.state = {
		title: title,
		dir: dir,
		color: color
	}
  }
  levelClick(level_num) {
	// user clicks a level box and we navigate to the game screen
	let level_data = LEVELS[this.state.dir]

	const { navigate } = this.props.navigation;
	navigate('Game', { levels: level_data, num: level_num, title: this.state.title, dir: this.state.dir, color: this.state.color })

  }
  render() {
    // list of all the level components
    var levelList = []

    // 50 levels in each stage
    for (let i = 1; i <= 50; i++) {
	levelList.push(<TouchableHighlight
			key={i}
			onPress={() => this.levelClick(i)}
			style={[styles.level_box, {backgroundColor: this.state.color}]}>
				<Text style={styles.text}>{i}</Text>
			</TouchableHighlight>)
    }

    return (
      <ScrollView contentContainerStyle={styles.scroll_container}>
	<Text style={styles.title}>{ this.state.title }</Text>
	<View style={styles.container}>
	{ levelList }
	</View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  scroll_container: {
    flex: 0,
    justifyContent: 'center',
    alignItems: 'center'
  },
  container: {
    flex: 0,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-evenly'
  },
  level_box: {
    flex: 0,
    height: 80,
    width: 80,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 10,
    borderRadius: 10,
    borderColor: '#003300',
    borderWidth: 3,
  },
  text: {
    fontSize: 40,
    fontWeight: 'bold',
    color: '#003300'
  },
  title: {
    fontSize: 50,
    fontWeight: 'bold'
  }
});
