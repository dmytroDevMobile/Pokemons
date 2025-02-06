// import { NavigationContainer } from '@react-navigation/native';
import { NavigationContainer } from '@react-navigation/native';
import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { createStaticNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../app/HomeScreen';
import DetailsScreen from '../app/DetailsScreen';
import { Screens } from './types';

const RootStack = createNativeStackNavigator({
  screenOptions: {headerShown: false},
  screens: {
    [Screens.Home]: HomeScreen,
    [Screens.Details]: DetailsScreen,
  },
});

const AppNavigation = createStaticNavigation(RootStack);

export {AppNavigation};
