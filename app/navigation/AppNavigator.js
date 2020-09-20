import React from 'react';
import { Text } from 'react-native';
import { createStackNavigator, StackView } from '@react-navigation/stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


import { Home, Guest, Stats } from '../screens/';

const Tab = createBottomTabNavigator();
export const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarLabel: ({ focused, color }) => {
          let name;
          if (route.name === "Home") {
            name = "Home";
          } else if (route.name === "Guests") {
            name = "Guests";
          } else if (route.name === "Stats") {
            name = "Stats";
          }

          let text = <Text style={{
            color: focused ? "#0D4196" : "#A6A6A6",
            fontSize: 16,
          }}>
            {name}
          </Text>

          return text;
        }
      })}
      tabBarOptions={{
        activeTintColor: '#000000',
        inactiveTintColor: '#ffffff'
      }}
    >
      <Tab.Screen name={"Home"} component={HomeStackScreen} />
      <Tab.Screen name={"Guests"} component={GuestStackScreen} />
      <Tab.Screen name={"Stats"} component={StatsStackScreen} />
    </Tab.Navigator>
  );
}

const HomeStack = createStackNavigator();
const HomeStackScreen = () => {
  return (
    <HomeStack.Navigator headerMode={"none"}>
      <HomeStack.Screen name={"Home"} component={Home} />
    </HomeStack.Navigator>
  );
}


const GuestStack = createStackNavigator();
const GuestStackScreen = () => {
  return (
    <GuestStack.Navigator headerMode={"none"}>
      <GuestStack.Screen name={"Guests"} component={Guest} />
    </GuestStack.Navigator>
  );
}


const StatsStack = createStackNavigator();
const StatsStackScreen = () => {
  return (
    <StatsStack.Navigator headerMode={"none"}>
      <StatsStack.Screen name={"Stats"} component={Stats} />
    </StatsStack.Navigator>
  );
} 