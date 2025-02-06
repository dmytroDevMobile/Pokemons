import React from 'react';
import { ImageBackground, View } from 'react-native';
import { Text } from 'react-native-paper';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Search } from '../SearchBar';

import styles from './styles';

const HomeHeader = () => {
  const insets = useSafeAreaInsets();

  return (
    <ImageBackground source={require('../../assets/images/pokemons_header.png')} style={styles.headerImage}>
      <View style={[styles.headerContainer, {paddingTop: insets.top}]}>
        <Text style={styles.title}>
          Looking{"\n"}for someone?
        </Text>
        <Search />
      </View>
    </ImageBackground>
  );
};

export {HomeHeader};
