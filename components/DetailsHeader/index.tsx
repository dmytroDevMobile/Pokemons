import React from 'react';

import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useAppNavigation } from '@/hooks/useAppNavigation';

import styles from './styles';
import { deviceHeight } from '@/constants/device';
import { Image, TouchableOpacity, View } from 'react-native';

const DetailsHeader = () => {
  const navigation = useAppNavigation();
  const insets = useSafeAreaInsets();

  const goBack = () => navigation.goBack();

  return (
    <View style={[styles.header, {height: deviceHeight * 0.075 + insets.top}]}>
      <TouchableOpacity
        activeOpacity={0.8}
        onPress={goBack}
        hitSlop={{ top: 25, right: 35, bottom: 25, left: 35 }}
      >
        <Image source={require('../../assets/images/go_back.png')} style={styles.goBackImage}/>
      </TouchableOpacity>
      <Image source={require('../../assets/images/pokemon_logo.png')} style={styles.headerTitleLogoImage}/>
      <Image source={require('../../assets/images/pikachu.png')} style={styles.headerPikachuLogoImage} />
    </View>
  );
};

export {DetailsHeader};
