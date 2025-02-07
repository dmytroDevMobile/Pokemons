import { deviceWidth } from "@/constants/device";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  header: {
    width: deviceWidth,
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
  headerTitleLogoImage: {
    width: 100,
    height: 45,
    marginLeft: -60,
  },
  headerPikachuLogoImage: {
    height: 45,
    width: 35,
  },
});

export default styles;
