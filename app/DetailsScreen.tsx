import { Moves } from '@/components/Moves';
import { PokemonTypes } from '@/components/PokemonTypes';
import { StatColors } from '@/constants/Colors';
import { Stat } from '@/features/requests/fetchDetails';
import { useAppNavigation } from '@/hooks/useAppNavigation';
import { RootStackParamList, Screens } from '@/navigation/types';
import { capitalizeFirstLetter, splitAndCapitalizeWords } from '@/utils/helpers';
import { StaticScreenProps } from '@react-navigation/native';
import React, { useEffect, useMemo, useRef } from 'react';
import {View, Text, StyleSheet, Dimensions, TouchableOpacity, Image, Animated, ScrollView} from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const {width, height} = Dimensions.get('window');

const Header = () => {
  const navigation = useAppNavigation();
  const insets = useSafeAreaInsets();

  const goBack = () => navigation.goBack();

  return (
    <View style={[styles.header, {height: height * 0.075 + insets.top}]}>
      <TouchableOpacity
        activeOpacity={0.8}
        onPress={goBack}
        hitSlop={{ top: 25, right: 35, bottom: 25, left: 35 }}
      >
        <Image source={require('../assets/images/go_back.png')} style={styles.goBackImage}/>
      </TouchableOpacity>
      <Image source={require('../assets/images/pokemon_logo.png')} style={styles.headerTitleLogoImage}/>
      <Image source={require('../assets/images/pikachu.png')} style={styles.headerPikachuLogoImage} />
    </View>
  );
};

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
    <View style={{ marginTop: 16 }}>
    <Text style={styles.defaulText}>{splitAndCapitalizeWords(stat.stat.name)}</Text>
    <View
      style={{
        marginTop: 4,
        width: '85%',
        height: 10,
        borderRadius: 100,
        backgroundColor: StatColors[stat.stat.name].bg,
      }}
    >
      <Animated.View
        style={{
          position: 'absolute',
          width: statWidth,
          left: 0,
          height: 10,
          borderRadius: 100,
          backgroundColor: StatColors[stat.stat.name].color,
        }}
      />
    </View>
    </View>
  );
};

const Details = ({route}: StaticScreenProps<RootStackParamList[Screens.Details]>) => {
  const details = route.params.details;

  const renderStats = useMemo(() => details.stats?.map((stat, idx) => <Stats key={`key-${idx}-${stat.stat.name}`} stat={stat} />), [details]);

  const renderAbilities = useMemo(() => details.abilities?.map((ability, idx) => (
    <View key={`key-${idx}-${ability.ability.name}`} style={styles.abilityContainer}>
      <Text style={styles.defaulText}>{capitalizeFirstLetter(ability.ability.name)}</Text>
    </View>
  )), [details]);

  const renderMoves = useMemo(() => details.moves?.map(move => {
    if (details.moves.length > 5) {

    }
    return (
      <>
      <Text style={styles.title}>Moves</Text>
      <View style={styles.abilityContainer}>
        <Text style={styles.defaulText}>{capitalizeFirstLetter(move.move.name)}</Text>
      </View>
      </>
    );
  }), [details]);

  return (
    <View style={[styles.root]}>
      <Header />
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
  headerTitleLogoImage: {
    width: 100,
    height: 45,
  },
  headerPikachuLogoImage: {
    height: 45,
    width: 35,
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
    width: width * 0.5,
    height: width * 0.5,
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
  header: {
    width,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    paddingBottom: 8,
    backgroundColor: '#12171C',
    paddingRight: 12,
    paddingLeft: 8,
  },
  goBackImage: {
    width: 50,
    height: 35,
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
