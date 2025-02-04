import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { PokemonTypeColors } from '@/constants/Colors';
import { PokemonDetails } from '@/features/requests/fetchDetails';
import { capitalizeFirstLetter } from '@/utils/helpers';

export const PokemonTypes = ({ types, id }: {types: PokemonDetails['types'], id: number}) => {
  return (
    types?.map((typeItem, idx) => (
      <View key={`key-${id}-${typeItem.type.name}-${idx}`} style={[styles.typeView, {backgroundColor: PokemonTypeColors?.[typeItem.type.name]?.bg}]}>
        <Text style={{ color: PokemonTypeColors?.[typeItem.type.name]?.text || 'black' }}>
          {capitalizeFirstLetter(typeItem.type.name)}
        </Text>
      </View>
    ))
  )
};

const styles = StyleSheet.create({
  typeView: {
    borderRadius: 4,
    paddingHorizontal: 4,
    paddingVertical: 2,
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 4,
  },
});
