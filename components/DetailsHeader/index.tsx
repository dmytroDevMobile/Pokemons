import React from 'react';
import { View } from 'react-native';
import { Image } from 'expo-image';
import { Button } from "@react-native-material/core";

import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useAppNavigation } from '@/hooks/useAppNavigation';

import { deviceHeight } from '@/constants/device';
import styles from './styles';

const HeaderTitleLogo = require('../../assets/images/pokemon_logo.png');
const HeaderRightPikachu = require('../../assets/images/pikachu.png');

const DetailsHeader = () => {
  const navigation = useAppNavigation();
  const insets = useSafeAreaInsets();

  const goBack = () => navigation.goBack();

  return (
    <View style={[styles.header, {height: deviceHeight * 0.075 + insets.top}]}>
      <Button title='Go Back' onPress={goBack}/>
      <Image source={HeaderTitleLogo} style={styles.headerTitleLogoImage}/>
      <Image source={HeaderRightPikachu} style={styles.headerPikachuLogoImage} />
    </View>
  );
};

export {DetailsHeader};
