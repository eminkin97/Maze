import React from 'react';
import { StyleSheet, Text, View, ScrollView, TouchableHighlight } from 'react-native';

var level_meta_data = require('../levels/level_metadata.json')

export default class StageSelect extends React.Component {
  stagePress(key) {
	console.log(key)
	let dir;
	let title;

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
  render() {
    return (
	<ScrollView directionalLockEnabled={false}>
		
		<TouchableHighlight style={[styles.stage_blocks, styles.orange]}
			key={1}
			onPress={() => this.stagePress(1)}>
			<Text>Meow</Text>
		</TouchableHighlight>
	</ScrollView>
    );
  }
}

const styles = StyleSheet.create({
	stage_blocks: {
		width: 300,
		height: 300
	},
	orange: {
		backgroundColor: 'orange'
	}
});
