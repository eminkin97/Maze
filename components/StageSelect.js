import React from 'react';
import { StyleSheet, Text, View, ScrollView, TouchableHighlight } from 'react-native';

var level_meta_data = require('../levels/level_metadata.json')

export default class StageSelect extends React.Component {
  stagePress(title, dir) {
	const { navigate } = this.props.navigation;
	navigate('Levels', { title: title, dir: dir })

  }
  render() {
    return (
	<ScrollView directionalLockEnabled={false}>
		{
			level_meta_data.maps.map(stage =>	
				<TouchableHighlight style={[styles.stage_blocks, { backgroundColor: stage.color }]}
					key={1}
					onPress={() => this.stagePress(stage.title, stage.dir)}>
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
