import { RootStackParamList } from '@/navigation/types';
import { useNavigation } from '@react-navigation/core';
import { StackNavigationProp } from '@react-navigation/stack';

export const useAppNavigation = () => useNavigation<StackNavigationProp<RootStackParamList>>();
