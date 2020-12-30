import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import StartScreen from './screens/StartScreen';
import GameScreen from './screens/GameScreen';
import { Image } from 'react-native';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerTitle: props => (
            <Image
              source={require('./assets/logo.png')}
              style={{ width: 100, height: 50 }}
              resizeMode='contain'
            />
          ),
          headerTitleAlign: 'center',
        }}
      >
        <Stack.Screen
          name="Start"
          component={StartScreen}
        />
        <Stack.Screen
          name="Game"
          component={GameScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
