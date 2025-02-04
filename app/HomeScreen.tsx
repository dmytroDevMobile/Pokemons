import { getListAsync, PokemonListItem, selectList } from '@/features/list/listSlice';
import React, { useCallback, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useAppNavigation } from '@/hooks/useAppNavigation';
import { useAppDispatch } from '@/store';
import { FlashList } from '@shopify/flash-list';
import {
  ActivityIndicator,
  Alert,
  Dimensions,
  Image,
  ImageBackground,
  Platform,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import { PokemonTypeColors } from '@/constants/Colors';
import { capitalizeFirstLetter } from '@/utils/helpers';
import { StatusBar } from 'expo-status-bar';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { fetchDetails } from '@/features/requests/fetchDetails';
import { Screens } from '@/navigation/types';
import { PokemonTypes } from '@/components/PokemonTypes';

const {width, height} = Dimensions.get('window');

const _cardWidth = (width - 32 - 16) / 2;

const Header = () => {
  const insets = useSafeAreaInsets();
  return (
    <ImageBackground source={require('../assets/images/pokemons_header.png')} style={styles.headerImage}>
      <View style={[styles.headerContainer, {paddingTop: insets.top}]}>
        <Text style={styles.title}>
          Looking{"\n"}for someone?
        </Text>
        <Search />
      </View>
    </ImageBackground>
  );
};

const Search = () => {
  const navigation = useAppNavigation();

  const [search, setSearch] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);

  const onChangeText = (text: string) => setSearch(text);

  const go = async () => {
    if (!search || !search?.length) {
      Alert.alert('Ooops', 'Looks like search field is empty');
      return;
    }

    setLoading(true);

    try {
      const details = await fetchDetails(search.toLowerCase());
      navigation.navigate(Screens.Details, {details});
    } catch (e) {
      setSearch('');
      Alert.alert('Hm...', 'Something went wrong. Try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={styles.searchView}>
      <View style={styles.searchRow}>
        <TextInput
          value={search}
          onChangeText={onChangeText}
          placeholder='E.g. Pikachu'
          style={Platform.OS !== 'ios' && styles.androidInputPadding}
        />
        <TouchableOpacity
          activeOpacity={0.9}
          hitSlop={{ top: 15, right: 15, bottom: 15, left: 15 }}
          onPress={go}
          style={styles.searchGoButton}
        >
          { !loading
            ? <Text style={{ color: '#F5F6F7' }}>Go</Text>
            : <ActivityIndicator size={'small'} color={'#F5F6F7'} />
          }
        </TouchableOpacity>
      </View>
    </View>
  );
};

const Home = () => {
  const navigation = useAppNavigation();
  const dispatch = useAppDispatch();
  const pokemonList = useSelector(selectList);

  const loadMore = useCallback(() => {
    if (pokemonList.list?.length !== pokemonList.count) {
      dispatch(getListAsync(pokemonList.list.length));
    }
  }, [pokemonList, dispatch]);

  const load = useCallback((skip: number) => dispatch(getListAsync(skip)), []);

  const initialLoad = useCallback(() => {
    load(0);
  }, [load]);
  
  useEffect(() => {
    initialLoad();
  }, [initialLoad]);

  const onItemPress = (details: PokemonListItem['details']) => {
    navigation.navigate(Screens.Details, {details});
  };

  const renderItem = ({item, index}: {item: PokemonListItem; index: number;}) => {
    const onPress = () => onItemPress(item.details);

    return (
      <TouchableOpacity
        key={`pokemon-${item.details.id}-key`}
        activeOpacity={0.9}
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
        <Image source={{ uri: item.details.sprites.other.home.front_default }} style={styles.image}/>
        <View style={styles.wrap}>
          <PokemonTypes types={item.details.types} id={item.details.id}/>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <>
      <StatusBar style='dark' />
      <View style={styles.root}>
        <Header />
        <View style={styles.content}>
          <FlashList
            data={pokemonList?.list}
            numColumns={2}
            renderItem={renderItem}
            contentContainerStyle={styles.contentContainerStyle}
            showsVerticalScrollIndicator={false}
            onEndReached={loadMore}
          />
          {
            pokemonList?.status === 'loading'
            ? <ActivityIndicator size={'large'} color={'black'} />
            : null
          }
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: 'white',
  },
  content: {
    flex: 1,
    paddingHorizontal: 16,
  },
  row: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  wrap: {
    flexDirection: 'row',
    alignItems: 'center',
    flexWrap: 'wrap',
  },
  headerImage: {
    width,
    height: height * .25,
    shadowColor: '#000000',
    shadowOpacity: 0.2,
    elevation: 4,
    shadowOffset: {
      width: 0,
      height: 5,
    },
    backgroundColor: 'black',
  },
  contentContainerStyle: {
    paddingBottom: 16,
    paddingTop: 16,
  },
  item: {
    width: _cardWidth,
    height: _cardWidth,
    backgroundColor: '#EBF8FF',
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 12,
    marginBottom: 8,
    alignItems: 'center',
    justifyContent: 'space-between',
    shadowColor: '#000000',
    shadowOpacity: 0.1,
    elevation: 2,
    shadowOffset: {
      width: 2,
      height: 2,
    },
  },
  extraCardMargin: {
    marginRight: 8,
  },
  image: {
    width: _cardWidth * .6,
    height: _cardWidth * .6,
    marginBottom: 8,
  },
  typeView: {
    borderRadius: 4,
    paddingHorizontal: 4,
    paddingVertical: 2,
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 4,
  },
  headerContainer: {
    flex: 1,
    justifyContent: 'space-between',
    paddingBottom: 24,
    paddingHorizontal: 16,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    alignSelf: 'flex-end',
    textAlign: 'right',
    color: 'white',
  },
  searchView: {
    alignSelf: 'flex-end',
    backgroundColor: 'white',
    borderRadius: 100,
    width: width * .5,
    height: 35,
    paddingLeft: 12,
    paddingRight: 4,
    paddingVertical: 4,
  },
  androidInputPadding: {
    paddingTop: -2,
    paddingBottom: 0,
  },
  searchRow: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  searchGoButton: {
    height: '100%',
    width: 45,
    backgroundColor: '#354A5F',
    borderRadius: 100,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Home;
