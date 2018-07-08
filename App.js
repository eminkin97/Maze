import { createStackNavigator } from 'react-navigation';

import MainScreen from './components/Main.js'
import LevelSelect from './components/LevelSelect.js'

const App = createStackNavigator({
  Main: { screen: MainScreen },
  LevelSelect: { screen: LevelSelect }
},
{
  headerMode: 'none',
  navigationOptions: {
    headerVisible: false,
  }
});

export default App;
