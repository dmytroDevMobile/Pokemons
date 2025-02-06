import React, { useMemo } from 'react';
import {View, Text, StyleSheet, Image, ScrollView} from 'react-native';
import { StaticScreenProps } from '@react-navigation/native';

import { Moves } from '@/components/Moves';
import { Stats } from '@/components/Stats';
import { DetailsHeader } from '@/components/DetailsHeader';
import { PokemonTypes } from '@/components/PokemonTypes';

import { deviceWidth } from '@/constants/device';
import { capitalizeFirstLetter } from '@/utils/helpers';
import { RootStackParamList, Screens } from '@/navigation/types';


const Details = ({route}: StaticScreenProps<RootStackParamList[Screens.Details]>) => {
  const details = route.params.details;

  const renderStats = useMemo(() => details.stats?.map(
    (stat, idx) =>
      <Stats
        key={`key-${idx}-${stat.stat.name}`}
        stat={stat}
      />
    ), [details]);

  const renderAbilities = useMemo(() => details.abilities?.map((ability, idx) => (
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
              <Text style={styles.defaulText}>Order: #{details.order}</Text>
              {renderStats}
            </View>
            <View style={styles.rightContainer}>
              <View style={styles.pokemonTypesRow}>
                <PokemonTypes types={details.types} id={details.id}/>
              </View>
              <Text style={styles.defaulText}>Exp: {details.base_experience}</Text>
              <Image source={{ uri: details.sprites.other.home.front_default }} style={styles.pokemonImage}/>
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

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: 'white',
  },
  flex: {
    flex: 1,
  },
  pokemonTypesRow: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  infoSection: {
    flex: 1,
    paddingTop: 32,
    alignItems: 'center',
  },
  content: {
    paddingHorizontal: 16,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  rightContainer: {
    flex: 1,
    justifyContent: 'space-between',
    paddingVertical: 16,
    alignItems: 'flex-end',
  },
  pokemonImage: {
    width: deviceWidth * 0.5,
    height: deviceWidth * 0.5,
  },
  card: {
    width: '100%',
    marginVertical: 16,
    paddingVertical: 16,
    paddingHorizontal: 16,
    shadowColor: '#000000',
    shadowOpacity: 0.2,
    borderRadius: 8,
    backgroundColor: '#FFFFFF',
    shadowRadius: 8,
    shadowOffset: {
      width: 2,
      height: 5,
    },
    elevation: 4,
  },
  subtitle: {
    color: '#161C21',
    fontSize: 18,
    fontWeight: '600',
  },
  title: {
    color: '#161C21',
    fontSize: 24,
    fontWeight: '600',
  },
  name: {
    color: '#475E75',
    fontSize: 32,
    fontWeight: '600',
  },
  defaulText: {
    color: '#475E75',
    fontSize: 16,
  },
  abilityContainer: {
    borderWidth: 1,
    borderColor: '#A9B4BE',
    paddingHorizontal: 12,
    paddingVertical: 12,
    marginTop: 8,
    borderRadius: 8,
  },
  breedingView: {
    borderWidth: 1,
    borderRadius: 8,
    height: 35,
    width: '70%',
    backgroundColor: '#EAECEE',
    borderColor: '#A9B4BE	',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 8,
  },
});

export default Details;
