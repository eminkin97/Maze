import React from 'react';
import { StyleSheet, Text, View, ScrollView, TouchableHighlight } from 'react-native';

var level_meta_data = require('../levels/level_metadata.json')

export default class StageSelect extends React.Component {
  stagePress(title, dir, color) {
	const { navigate } = this.props.navigation;
	navigate('Levels', { title: title, dir: dir, color: color })

  }
  render() {
    return (
	<ScrollView directionalLockEnabled={false}>
		{
			level_meta_data.maps.map(stage =>	
				<TouchableHighlight style={[styles.stage_blocks, { backgroundColor: stage.color }]}
					onPress={() => this.stagePress(stage.title, stage.dir, stage.color)}>
					<Text style={styles.stage_text}>{ stage.title }</Text>
				</TouchableHighlight>
			)
		}
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
