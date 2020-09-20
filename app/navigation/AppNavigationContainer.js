import React, { useEffect } from 'react';
import { View, Text } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import { BottomTabNavigator } from './AppNavigator';
import * as actions from '../store/actions/'


const AppNavigationContainer = props => {
  return (
    <NavigationContainer>
      <BottomTabNavigator />
    </NavigationContainer>
  );
};

export default AppNavigationContainer;