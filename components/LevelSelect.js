import React from 'react';
import { StyleSheet, Text, View, ScrollView, TouchableHighlight } from 'react-native';

export default class LevelSelect extends React.Component {
  constructor(props) {
	super(props)
	let title = this.props.navigation.getParam('title', 'SET DEFAULT VALUE LATER')
	let dir = this.props.navigation.getParam('dir', 0)

	this.state = {
		title: title,
		dir: dir
	}
  }
  levelClick(level_num) {
	// user clicks a level box and we navigate to the game screen
	console.log("level clicked")
	const uri = '../levels/' + this.state.dir + '/level' + level_num + '.json';
	console.log(uri)
	console.log("fetch worked")
	//const { navigate } = this.props.navigation;
	//navigate('Game', { levels: levels, num: num })

  }
  render() {
    // list of all the level components
    var levelList = []

    // 50 levels in each stage
    for (let i = 0; i < 50; i++) {
	levelList.push(<TouchableHighlight
			key={i}
			onPress={() => this.levelClick(i)}
			style={styles.level_box}>
				<Text style={styles.text}>{i}</Text>
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
