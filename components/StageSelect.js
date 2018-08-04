import React from 'react';
import { StyleSheet, Text, View, ScrollView, TouchableHighlight } from 'react-native';

var level_meta_data = require('../levels/level_metadata.json')

export default class StageSelect extends React.Component {
  stagePress(key) {
	console.log(key)
	let dir;
	let title;
	let color;

	// get info for stage selected
	for (let i = 0; i < level_meta_data.maps.length; i++) {
		if (level_meta_data.maps[i].id === key) {
			title = level_meta_data.maps[i].title
			dir = level_meta_data.maps[i].dir
		}
	}

	const { navigate } = this.props.navigation;
	navigate('Levels', { title: title, dir: dir })

  }
  getBackgroundColor(key) {
	// returns the background color for a stage
	for (let i = 0; i < level_meta_data.maps.length; i++) {
		if (level_meta_data.maps[i].id === key) {
			return level_meta_data.maps[i].color;
		}
	}
  }
  getTitle(key) {
	// returns the title for a stage
	for (let i = 0; i < level_meta_data.maps.length; i++) {
		if (level_meta_data.maps[i].id === key) {
			return level_meta_data.maps[i].title;
		}
	}
  }
  render() {
    return (
	<ScrollView directionalLockEnabled={false}>
		
		<TouchableHighlight style={[styles.stage_blocks, { backgroundColor: this.getBackgroundColor("orange1") }]}
			key={1}
			onPress={() => this.stagePress("orange1")}>
			<Text style={styles.stage_text}>{ this.getTitle("orange1") }</Text>
		</TouchableHighlight>
	</ScrollView>
    );
  }
}

const styles = StyleSheet.create({
	stage_blocks: {
		width: 100,
		height: 100,
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center'
	},
	stage_text: {
		fontWeight: 'bold',
		fontSize: 20
	}
});
