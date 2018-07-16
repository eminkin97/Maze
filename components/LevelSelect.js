import React from 'react';
import { StyleSheet, Text, View, TouchableHighlight } from 'react-native';

const levels = [
	{
		num: 1,
        	data: require('../levels/level1.json')
	},
	{
		num: 2,
		data: require('../levels/level2.json')
	}
]

export default class LevelSelect extends React.Component {
  levelClick(data) {
	// user clicks a level box and we navigate to the game screen
	const { navigate } = this.props.navigation;
	navigate('Game', { data: data })

  }
  render() {
    // list of all the level components
    var levelList = []

    // go through all levels
    for (let i = 0; i < levels.length; i++) {
	levelList.push(<TouchableHighlight
			key={levels[i].num}
			onPress={() => this.levelClick(levels[i].data)}
			style={styles.level_box}>
				<Text style={styles.text}>{levels[i].num}</Text>
			</TouchableHighlight>)
    }

    return (
      <View style={styles.container}>
	{ levelList }
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-evenly'
  },
  level_box: {
    backgroundColor: 'green',
    flex: 0,
    height: 120,
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
  }
});
