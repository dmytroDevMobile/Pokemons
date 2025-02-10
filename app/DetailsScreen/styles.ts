import { deviceWidth } from "@/constants/device";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: 'white',
  },
  flex: {
    flex: 1,
  },
  pokemonTypesRow: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  infoSection: {
    flex: 1,
    paddingTop: 32,
    alignItems: 'center',
  },
  content: {
    paddingHorizontal: 16,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  rightContainer: {
    flex: 1,
    justifyContent: 'space-between',
    paddingVertical: 16,
    alignItems: 'flex-end',
  },
  pokemonImage: {
    width: deviceWidth * 0.5,
    height: deviceWidth * 0.5,
  },
  card: {
    width: '100%',
    marginVertical: 16,
    paddingVertical: 16,
    paddingHorizontal: 16,
    shadowColor: '#000000',
    shadowOpacity: 0.2,
    borderRadius: 8,
    backgroundColor: '#FFFFFF',
    shadowRadius: 8,
    shadowOffset: {
      width: 2,
      height: 5,
    },
    elevation: 4,
  },
  subtitle: {
    color: '#161C21',
    fontSize: 18,
    fontWeight: '600',
  },
  title: {
    color: '#161C21',
    fontSize: 24,
    fontWeight: '600',
  },
  name: {
    color: '#475E75',
    fontSize: 32,
    fontWeight: '600',
  },
  defaulText: {
    color: '#475E75',
    fontSize: 16,
  },
  abilityContainer: {
    borderWidth: 1,
    borderColor: '#A9B4BE',
    paddingHorizontal: 12,
    paddingVertical: 12,
    marginTop: 8,
    borderRadius: 8,
  },
  breedingView: {
    borderWidth: 1,
    borderRadius: 8,
    height: 35,
    width: '70%',
    backgroundColor: '#EAECEE',
    borderColor: '#A9B4BE	',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 8,
  },
});

export default styles;
