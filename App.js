import { createStackNavigator } from 'react-navigation';

import GameScreen from './components/Main.js'
import LevelSelect from './components/LevelSelect.js'
import StageSelect from './components/StageSelect.js'

const App = createStackNavigator({
  Home: { screen: StageSelect },
  Levels: { screen: LevelSelect },
  Game: { screen: GameScreen }
},
{
  headerMode: 'none',
  navigationOptions: {
    headerVisible: false,
  }
});

export default App;
