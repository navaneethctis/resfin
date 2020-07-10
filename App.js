import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import HomeScreen from './src/screens/HomeScreen';
import RestaurantScreen from './src/screens/RestaurantScreen';

const Stack = createStackNavigator(
  {
    HomeScreen,
    RestaurantScreen
  },
  {
    defaultNavigationOptions: {
      title: 'ResFin'
    },
    initialRouteName: 'HomeScreen'
  }
);

const App = createAppContainer(Stack);

export default App;
