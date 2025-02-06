import React from 'react';
import { Image, View } from 'react-native';
import styles from './styles';
import { Card, Text } from 'react-native-paper';
import { capitalizeFirstLetter } from '@/utils/helpers';
import { PokemonTypes } from '../PokemonTypes';
import { PokemonListItem } from '@/features/list/types';

export interface HomeCardProps {
  item: PokemonListItem;
  index: number;
  onItemPress: (details: PokemonListItem['details']) => void;
};

const HomeCard = ({item, index, onItemPress}: HomeCardProps) => {
  const onPress = () => onItemPress(item.details);

  return (
    <Card
      key={`pokemon-${item.details.id}-key`}
      onPress={onPress}
      style={
        [
          styles.item,
          index === 0 || index % 2 === 0
            ? styles.extraCardMargin
            : null
        ]
      }
    >
      <View style={styles.row}>
        <Text>{capitalizeFirstLetter(item.details.name)}</Text>
        <Text># {item.details.order}</Text>
      </View>
      <Image
        source={{ uri: item.details.sprites.other.home.front_default }}
        style={[styles.image, styles.centerSelf]}
      />
      <View style={[styles.wrap, styles.centerSelf]}>
        <PokemonTypes types={item.details.types} id={item.details.id}/>
      </View>
    </Card>
  );
};

export {HomeCard};
