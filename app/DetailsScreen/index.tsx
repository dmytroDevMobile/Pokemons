import React, { useMemo } from 'react';
import {View, Text, ScrollView} from 'react-native';
import { StaticScreenProps } from '@react-navigation/native';

import { Moves } from '@/components/Moves';
import { Stats } from '@/components/Stats';
import { DetailsHeader } from '@/components/DetailsHeader';
import { PokemonTypes } from '@/components/PokemonTypes';
import PaperView from '@/components/Paper';

import { capitalizeFirstLetter } from '@/utils/helpers';
import { RootStackParamList, Screens } from '@/navigation/types';
import { Ability, Stat } from '@/features/list/types';
import { Image } from 'expo-image';

import styles from './styles';

const Details = ({route}: StaticScreenProps<RootStackParamList[Screens.Details]>) => {
  const details = route.params.details;

  const renderStats = useMemo(() => details.stats?.map(
    (stat: Stat, idx: number) =>
      <Stats
        key={`key-${idx}-${stat.stat.name}`}
        stat={stat}
      />
    ), [details]);

  const renderAbilities = useMemo(() => details.abilities?.map((ability: Ability, idx: number) => (
    <View key={`key-${idx}-${ability.ability.name}`} style={styles.abilityContainer}>
      <Text style={styles.defaulText}>{capitalizeFirstLetter(ability.ability.name)}</Text>
    </View>
  )), [details]);


  return (
    <View style={[styles.root]}>
      <DetailsHeader />
      <ScrollView>
        <View style={styles.content}>
          <View style={[styles.card, styles.row]}>
            <View style={styles.flex}>
              <Text style={styles.name}>{capitalizeFirstLetter(details.name)}</Text>
              <PaperView text={`Order: #${details.order}`}/>
              {renderStats}
            </View>
            <View style={styles.rightContainer}>
              <View style={styles.pokemonTypesRow}>
                <PokemonTypes types={details.types} id={details.id}/>
              </View>
              <Text style={styles.defaulText}>Exp: {details.base_experience}</Text>
              <Image
                source={{ uri: details.sprites.other.home.front_default }}
                style={styles.pokemonImage}
              />
            </View>
          </View>
          <View style={styles.card}>
            <Text style={styles.title}>Breeding</Text>
            <View style={styles.row}>
              <View style={styles.infoSection}>
                <Text style={styles.defaulText}>Height</Text>
                <View style={styles.breedingView}>
                  <Text style={styles.defaulText}>{details.height}</Text>
                </View>
              </View>
              <View style={styles.infoSection}>
                <Text style={styles.defaulText}>Weight</Text>
                <View style={styles.breedingView}>
                  <Text style={styles.defaulText}>{details.weight}</Text>
                </View>
              </View>
            </View>
          </View>
          <View style={styles.card}>
            <Text style={styles.title}>Abilities</Text>
            {renderAbilities}
          </View>
          <View style={styles.card}>
            <Moves moves={details.moves}/>
          </View>
        </View>
      </ScrollView>
    </View>
  )
};

export default Details;
