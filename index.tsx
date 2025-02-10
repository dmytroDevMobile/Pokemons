import '@expo/metro-runtime';
import 'react-native-gesture-handler';

import App from './app/App';
import { renderRootComponent } from 'expo-router/build/renderRootComponent';

renderRootComponent(App);
