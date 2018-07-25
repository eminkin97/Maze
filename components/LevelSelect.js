import React from 'react';
import { StyleSheet, Text, View, ScrollView, TouchableHighlight } from 'react-native';

const levels = [
	{
		num: 1,
        	data: require('../levels/level1.json')
	},
	{
		num: 2,
		data: require('../levels/level2.json')
	},
	{
		num: 3,
		data: require('../levels/level3.json')
	},
	{
		num: 4,
		data: require('../levels/level4.json')
	},
	{
		num: 5,
		data: require('../levels/level5.json')
	},
	{
		num: 6,
		data: require('../levels/level6.json')
	},
	{
		num: 7,
		data: require('../levels/level7.json')
	},
	{
		num: 8,
		data: require('../levels/level8.json')
	},
	{
		num: 9,
		data: require('../levels/level9.json')
	},
	{
		num: 10,
		data: require('../levels/level10.json')
	},
	{
		num: 11,
		data: require('../levels/level11.json')
	},
	{
		num: 12,
		data: require('../levels/level12.json')
	},
	{
		num: 13,
		data: require('../levels/level13.json')
	},
	{
		num: 14,
		data: require('../levels/level14.json')
	},
	{
		num: 15,
		data: require('../levels/level15.json')
	},
	{
		num: 16,
		data: require('../levels/level16.json')
	},
	{
		num: 17,
		data: require('../levels/level17.json')
	},
	{
		num: 18,
		data: require('../levels/level18.json')
	},
	{
		num: 19,
		data: require('../levels/level19.json')
	},
	{
		num: 20,
		data: require('../levels/level20.json')
	},
	{
		num: 21,
		data: require('../levels/level21.json')
	},
	{
		num: 22,
		data: require('../levels/level22.json')
	},
	{
		num: 23,
		data: require('../levels/level23.json')
	},
	{
		num: 24,
		data: require('../levels/level24.json')
	},
	{
		num: 25,
		data: require('../levels/level25.json')
	},
	{
		num: 26,
		data: require('../levels/level26.json')
	},
	{
		num: 27,
		data: require('../levels/level27.json')
	},
	{
		num: 28,
		data: require('../levels/level28.json')
	},
	{
		num: 29,
		data: require('../levels/level29.json')
	},
	{
		num: 30,
		data: require('../levels/level30.json')
	},
	{
		num: 31,
		data: require('../levels/level31.json')
	},
	{
		num: 32,
		data: require('../levels/level32.json')
	},
	{
		num: 33,
		data: require('../levels/level33.json')
	},
	{
		num: 34,
		data: require('../levels/level34.json')
	},
	{
		num: 35,
		data: require('../levels/level35.json')
	},
	{
		num: 36,
		data: require('../levels/level36.json')
	},
	{
		num: 37,
		data: require('../levels/level37.json')
	},
	{
		num: 38,
		data: require('../levels/level38.json')
	},
	{
		num: 39,
		data: require('../levels/level39.json')
	},
	{
		num: 40,
		data: require('../levels/level40.json')
	},
	{
		num: 41,
		data: require('../levels/level41.json')
	},
	{
		num: 42,
		data: require('../levels/level42.json')
	},
	{
		num: 43,
		data: require('../levels/level43.json')
	},
	{
		num: 44,
		data: require('../levels/level44.json')
	},
	{
		num: 45,
		data: require('../levels/level45.json')
	},
	{
		num: 46,
		data: require('../levels/level46.json')
	},
	{
		num: 47,
		data: require('../levels/level47.json')
	},
	{
		num: 48,
		data: require('../levels/level48.json')
	},
	{
		num: 49,
		data: require('../levels/level49.json')
	}
]

export default class LevelSelect extends React.Component {
  levelClick(num) {
	// user clicks a level box and we navigate to the game screen
	const { navigate } = this.props.navigation;
	navigate('Game', { levels: levels, num: num })

  }
  render() {
    // list of all the level components
    var levelList = []

    // go through all levels
    for (let i = 0; i < levels.length; i++) {
	levelList.push(<TouchableHighlight
			key={levels[i].num}
			onPress={() => this.levelClick(levels[i].num)}
			style={styles.level_box}>
				<Text style={styles.text}>{levels[i].num}</Text>
			</TouchableHighlight>)
    }

    return (
      <ScrollView contentContainerStyle={styles.container}>
	{ levelList }
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 0,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-evenly'
  },
  level_box: {
    backgroundColor: '#ff6600',
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
