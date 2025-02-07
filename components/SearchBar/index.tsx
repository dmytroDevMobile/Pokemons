import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity } from 'react-native';
import {
  ActivityIndicator,
  Button,
  Dialog,
  Portal,
  Text,
} from 'react-native-paper';
import { FAB } from '@react-native-material/core';
import Icon from "@expo/vector-icons/MaterialCommunityIcons";

import { useAppNavigation } from '@/hooks/useAppNavigation';
import { fetchDetails } from '@/features/requests/fetchDetails';
import { Screens } from '@/navigation/types';
import { isIOS } from '@/constants/device';

import styles from './styles';

export const Search = () => {
  const navigation = useAppNavigation();

  const [search, setSearch] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);
  const [visible, setVisible] = useState<boolean>(false);
  const [dialogContent, setDialogContent] = useState({title: '', content: ''});

  const hideDialog = () => setVisible(false);
  const showDialog = (title: string, content: string) => {
    setDialogContent({title, content});
    setVisible(true);
  }

  const onChangeText = (text: string) => setSearch(text);

  const go = async () => {
    if (!search || !search?.length) {
      showDialog('Ooops', 'Looks like search field is empty');
      return;
    }

    setLoading(true);

    try {
      const details = await fetchDetails(search.toLowerCase());
      navigation.navigate(Screens.Details, {details});
    } catch (e) {
      setSearch('');
      showDialog('Hm...', 'Something went wrong. Try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Portal>
        <Dialog visible={visible} onDismiss={hideDialog}>
          <Dialog.Title>{dialogContent.title}</Dialog.Title>
          <Dialog.Content>
            <Text variant="bodyMedium">{dialogContent.content}</Text>
          </Dialog.Content>
          <Dialog.Actions>
            <Button onPress={hideDialog}>Done</Button>
          </Dialog.Actions>
        </Dialog>
      </Portal>
      <View style={styles.searchView}>
        <View style={styles.searchRow}>
          <TextInput
            value={search}
            onChangeText={onChangeText}
            placeholder='E.g. Pikachu'
            style={!isIOS && styles.androidInputPadding}
          />
          <FAB
            onPress={go}
            color='#354A5F'
            style={styles.searchGoButton}
            loading={loading}
            icon={props => <Icon name='search-web' {...props} />}
          />
        </View>
      </View>
    </>
  );

};
