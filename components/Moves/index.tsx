import { PokemonDetails } from '@/features/list/types';
import { capitalizeFirstLetter } from '@/utils/helpers';
import React, { useMemo, useState } from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';

interface MovesProps {
  moves: PokemonDetails['moves'];
}

const Moves = ({ moves }: MovesProps) => {
  const [isOpened, setOpened] = useState<boolean>(false);

  const dataToRender = useMemo(() => !isOpened ? moves.slice(0, 5) : moves, [moves, isOpened]);

  const onTogglePress = () => setOpened(v => !v);
  
  return (
    <>
      <TouchableOpacity
        activeOpacity={0.9}
        disabled={moves?.length <= 5}
        onPress={onTogglePress}
        style={styles.touch}
      >
        <Text style={styles.title}>Moves</Text>
        {
          moves?.length <= 5
          ? null
          : <Text style={[styles.defaulText, styles.toggleColor]}>
              {isOpened ? 'Show less' : 'Show more'}
            </Text>
        }
      </TouchableOpacity>
      {
        dataToRender.map((move, idx) => (
          <View key={`key-${idx}-${move.move.name}`} style={styles.abilityContainer}>
            <Text style={styles.defaulText}>{capitalizeFirstLetter(move.move.name)}</Text>
          </View>
        ))
      }
    </>
  );
};

const styles = StyleSheet.create({
  touch: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  abilityContainer: {
    borderWidth: 1,
    borderColor: '#A9B4BE',
    paddingHorizontal: 12,
    paddingVertical: 12,
    marginTop: 8,
    borderRadius: 8,
  },
  defaulText: {
    color: '#475E75',
    fontSize: 16,
  },
  title: {
    color: '#161C21',
    fontSize: 24,
    fontWeight: '600',
  },
  toggleColor: {
    color: '#0040B0',
  },
});

export {Moves};