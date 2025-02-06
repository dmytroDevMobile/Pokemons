import { StyleSheet } from "react-native";
import { _cardWidth } from "./constants";

const styles = StyleSheet.create({
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
  image: {
    width: _cardWidth * .6,
    height: _cardWidth * .6,
    marginBottom: 8,
  },
});

export default styles;
