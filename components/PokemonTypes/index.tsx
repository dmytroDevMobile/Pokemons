import React from 'react';
import { View } from 'react-native';
import { Text } from 'react-native-paper';

import { PokemonTypeColors } from '@/constants/Colors';
import { capitalizeFirstLetter } from '@/utils/helpers';
import { PokemonDetails } from '@/features/list/types';

import styles from './styles';

interface PokemonTypesProps {
  types: PokemonDetails['types'];
  id: number;
}

export const PokemonTypes = ({ types, id }: PokemonTypesProps) => (
  types?.map((typeItem, idx) => (
    <View
      key={`key-${id}-${typeItem.type.name}-${idx}`}
      style={[
        styles.typeView,
        {
          backgroundColor: PokemonTypeColors?.[typeItem.type.name]?.bg
        }
      ]}>
      <Text style={{ color: PokemonTypeColors?.[typeItem.type.name]?.text || 'black' }}>
        {capitalizeFirstLetter(typeItem.type.name)}
      </Text>
    </View>
  ))
);
