import React from 'react';
import { Image, View } from 'react-native';
import { TouchableRipple } from 'react-native-paper';

import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useAppNavigation } from '@/hooks/useAppNavigation';

import { deviceHeight } from '@/constants/device';
import styles from './styles';

const DetailsHeader = () => {
  const navigation = useAppNavigation();
  const insets = useSafeAreaInsets();

  const goBack = () => navigation.goBack();

  return (
    <View style={[styles.header, {height: deviceHeight * 0.075 + insets.top}]}>
      <TouchableRipple
        onPress={goBack}
        hitSlop={{ top: 25, right: 35, bottom: 25, left: 35 }}
        rippleColor={'rgba(0, 0, 0, 0.05)'}
      >
        <Image source={require('../../assets/images/go_back.png')} style={styles.goBackImage}/>
      </TouchableRipple>
      <Image source={require('../../assets/images/pokemon_logo.png')} style={styles.headerTitleLogoImage}/>
      <Image source={require('../../assets/images/pikachu.png')} style={styles.headerPikachuLogoImage} />
    </View>
  );
};

export {DetailsHeader};
