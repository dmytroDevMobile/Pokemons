/**
 * Below are the colors that are used in the app. The colors are defined in the light and dark mode.
 * There are many other ways to style your app. For example, [Nativewind](https://www.nativewind.dev/), [Tamagui](https://tamagui.dev/), [unistyles](https://reactnativeunistyles.vercel.app), etc.
 */

import { TextStyle, ViewStyle } from "react-native";

const tintColorLight = '#0a7ea4';
const tintColorDark = '#fff';

export const Colors = {
  light: {
    text: '#11181C',
    background: '#fff',
    tint: tintColorLight,
    icon: '#687076',
    tabIconDefault: '#687076',
    tabIconSelected: tintColorLight,
  },
  dark: {
    text: '#ECEDEE',
    background: '#151718',
    tint: tintColorDark,
    icon: '#9BA1A6',
    tabIconDefault: '#9BA1A6',
    tabIconSelected: tintColorDark,
  },
};

export const StatColors: Record<string, {bg: ViewStyle['backgroundColor'], color: ViewStyle['backgroundColor']}> = {
  hp: {
    bg: "rgba(0, 255, 0, 0.3)",
    color: "rgba(0, 255, 0, 0.8)",
  },
  attack: {
    bg: "rgba(255, 0, 0, 0.3)",
    color: "rgba(255, 0, 0, 0.8)"
  },
  defense: {
    bg: "rgba(0, 0, 255, 0.3)",
    color: "rgba(0, 0, 255, 0.8)",
  },
  "special-attack": {
    bg: "rgba(128, 0, 128, 0.3)",
    color: "rgba(128, 0, 128, 0.8)",
  },
  "special-defense": {
    bg: "rgba(75, 0, 130, 0.3)",
    color: "rgba(75, 0, 130, 0.8)",
  },
  speed: {
    bg: "rgba(255, 165, 0, 0.3)",
    color: "rgba(255, 165, 0, 0.8)",
  },
};

export const PokemonTypeColors: Record<string, {bg: ViewStyle['backgroundColor']; text: TextStyle['color'];}> = {
  normal: {
    bg: '#D3D3D3',
    text: '#000000',
  },
  flying: {
    bg: '#87CEEB',
    text: '#000000',
  },
  fire: {
    bg: '#FF4500',
    text: '#FFFFFF',
  },
  water: {
    bg: '#1E90FF',
    text: '#FFFFFF',
  },
  electric: {
    bg: '#FFD700',
    text: '#000000',
  },
  grass: {
    bg: '#32CD32',
    text: '#FFFFFF',
  },
  ice: {
    bg: '#ADD8E6',
    text: '#000000',
  },
  fighting: {
    bg: '#B22222',
    text: '#FFFFFF',
  },
  poison: {
    bg: '#8A2BE2',
    text: '#FFFFFF',
  },
  psychic: {
    bg: '#9370DB',
    text: '#FFFFFF',
  },
  bug: {
    bg: '#6B8E23',
    text: '#FFFFFF',
  },
  ghost: {
    bg: '#A9A9A9',
    text: '#000000',
  },
  steel: {
    bg: '#A9A9A9',
    text: '#000000',
  },
  dragon: {
    bg: '#0000FF',
    text: '#FFFFFF',
  },
  dark: {
    bg: '#2F4F4F',
    text: '#FFFFFF',
  },
  fairy: {
    bg: '#FFB6C1',
    text: '#000000',
  },
  rock: {
    bg: '#D2B48C',
    text: '#000000',
  },
  ground: {
    bg: '#8B4513',
    text: '#FFFFFF',
  },
  psychicDark: {
    bg: '#4B0082',
    text: '#FFFFFF',
  },
  unknown: {
    bg: '#808080',
    text: '#FFFFFF',
  },
  shadow: {
    bg: '#000000',
    text: '#FFFFFF',
  }
};
