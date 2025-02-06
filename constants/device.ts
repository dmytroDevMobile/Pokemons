import { Dimensions, Platform } from "react-native";

export const isIOS = Platform.OS === 'ios';
export const deviceWidth = Dimensions.get('window').width;
export const deviceHeight = Dimensions.get('window').height;
