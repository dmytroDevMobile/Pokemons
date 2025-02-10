import React, { useCallback, useEffect } from 'react';
import { View } from 'react-native';
import { useSelector } from 'react-redux';
import { FlashList } from '@shopify/flash-list';
import { StatusBar } from 'expo-status-bar';
import { ActivityIndicator } from 'react-native-paper';

import { useAppNavigation } from '@/hooks/useAppNavigation';
import { getListAsync, selectList } from '@/features/list/listSlice';
import { useAppDispatch } from '@/store';
import { Screens } from '@/navigation/types';
import { HomeHeader } from '@/components/HomeHeader';
import { _cardWidth } from '@/components/HomeCard/constants';
import { HomeCard, HomeCardProps } from '@/components/HomeCard';
import { PokemonListItem } from '@/features/list/types';

import styles from './styles';

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

export default Home;
