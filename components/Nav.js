import * as React from 'react';
import { View, StatusBar, AppRegistry  } from 'react-native';
import Decks from './Decks'
import NewDeck from './NewDeck'
import AddCard from './AddCard'
import DeckPreview from './DeckPreview'
import Quiz from './Quiz'
import {gray, purple, White} from '../utils/colors'
import {createBottomTabNavigator  } from '@react-navigation/bottom-tabs'
import { NavigationContainer  } from '@react-navigation/native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { createStackNavigator } from '@react-navigation/stack';

import {connect} from 'react-redux'

const Stack = createStackNavigator()

function myStack() {
return(
    <Stack.Navigator>
    <Stack.Screen name="Decks" component={Decks}  />
      <Stack.Screen name="Deck Preview" component={DeckPreview}  />
      <Stack.Screen name="Add Card" component={AddCard}  />
      <Stack.Screen name="Quiz" component={Quiz}  />
    </Stack.Navigator>
)
}


const Tab = createBottomTabNavigator ()

 function Nav() {  
  return (
    <View style={{flex: 1}}>
    <StatusBar 
    barStyle = "light-content" 
    hidden = {false} 
    backgroundColor = {purple} 
    translucent = {true}/>

      <NavigationContainer>
        <Tab.Navigator tabBarOptions={{activeBackgroundColor:purple}}>
          <Tab.Screen 
          name="Home"
          component={myStack}
          options = {{tabBarIcon:({size}) =>
          (<MaterialCommunityIcons name="home"  size={size} />)}}
          />

          <Tab.Screen 
          name="New Deck"
          component={NewDeck}
          options = {{tabBarIcon:({ size}) =>
          (<MaterialCommunityIcons name="plus" size={size} />)}}
            />
        </Tab.Navigator>
        </NavigationContainer>
    </View>
  );
}

export default connect()(Nav)

AppRegistry.registerComponent('Stack', () => Stack);
AppRegistry.registerComponent('Tab', () => Tab);


