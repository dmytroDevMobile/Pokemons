import { getListAsync, selectList } from '@/features/list/listSlice';
import React, { useCallback, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useAppNavigation } from '@/hooks/useAppNavigation';
import { useAppDispatch } from '@/store';
import { FlashList } from '@shopify/flash-list';
import { StyleSheet, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { Screens } from '@/navigation/types';
import { ActivityIndicator } from 'react-native-paper';
import { HomeHeader } from '@/components/HomeHeader';
import { _cardWidth } from '@/components/HomeCard/constants';
import { HomeCard, HomeCardProps } from '@/components/HomeCard';
import { PokemonListItem } from '@/features/list/types';

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

  const renderItem = ({item, index}: Omit<HomeCardProps, 'onItemPress'>) =>
    <HomeCard item={item} index={index} onItemPress={onItemPress}/>;

  return (
    <>
      <StatusBar style='dark' />
      <View style={styles.root}>
        <HomeHeader />
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
  contentContainerStyle: {
    paddingBottom: 16,
    paddingTop: 16,
  },
  typeView: {
    borderRadius: 4,
    paddingHorizontal: 4,
    paddingVertical: 2,
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 4,
  },
});

export default Home;
