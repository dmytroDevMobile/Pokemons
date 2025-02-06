import { deviceHeight, deviceWidth } from "@/constants/device";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  headerImage: {
    width: deviceWidth,
    height: deviceHeight * .25,
    shadowColor: '#000000',
    shadowOpacity: 0.2,
    elevation: 4,
    shadowOffset: {
      width: 0,
      height: 5,
    },
    backgroundColor: 'black',
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
});

export default styles;
