import React, { useEffect, useRef } from 'react';
import { Animated, View } from 'react-native';
import { Text } from 'react-native-paper';

import { splitAndCapitalizeWords } from '@/utils/helpers';
import { StatColors } from '@/constants/Colors';
import styles from './styles';
import { Stat } from '@/features/list/types';

const Stats = ({ stat }: {stat: Stat}) => {
  const aV = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(
      aV,
      {
        duration: 1000,
        toValue: Math.round(stat.base_stat),
        useNativeDriver: false,
      },
    ).start();
  }, []);

  const statWidth = aV.interpolate({
    inputRange: [0, 100],
    outputRange: ['0%', '85%'],
  });

  return (
    <View style={styles.statContainer}>
      <Text style={styles.defaulText}>{splitAndCapitalizeWords(stat.stat.name)}</Text>
      <View
        style={[styles.bgStatView, {backgroundColor: StatColors[stat.stat.name].bg}]}
      >
        <Animated.View
          style={[
            styles.animatedStat,
            {
              width: statWidth,
              backgroundColor: StatColors[stat.stat.name].color,
            },
          ]}
        />
      </View>
    </View>
  );

};

export {Stats};
