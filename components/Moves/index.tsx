import React, { useMemo, useState } from 'react';
import {View} from 'react-native';
import { Text, TouchableRipple } from 'react-native-paper';

import { PokemonDetails } from '@/features/list/types';
import { capitalizeFirstLetter } from '@/utils/helpers';

import styles from './styles'

interface MovesProps {
  moves: PokemonDetails['moves'];
}

const Moves = ({ moves }: MovesProps) => {
  const [isOpened, setOpened] = useState<boolean>(false);

  const dataToRender = useMemo(() => !isOpened ? moves.slice(0, 5) : moves, [moves, isOpened]);

  const onTogglePress = () => setOpened(v => !v);
  
  return (
    <>
      <TouchableRipple
        disabled={moves?.length <= 5}
        onPress={onTogglePress}
        style={styles.touch}
        rippleColor='rgba(0, 64, 176, 0.01)'
      >
        <>
          <Text style={styles.title}>Moves</Text>
          {
            moves?.length <= 5
            ? null
            : <Text style={[styles.defaulText, styles.toggleColor]}>
                {isOpened ? 'Show less' : 'Show more'}
              </Text>
          }
        </>
      </TouchableRipple>
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

export {Moves};
