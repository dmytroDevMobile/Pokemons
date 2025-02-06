import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  touch: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderRadius: 15,
  },
  abilityContainer: {
    borderWidth: 1,
    borderColor: '#A9B4BE',
    paddingHorizontal: 12,
    paddingVertical: 12,
    marginTop: 8,
    borderRadius: 8,
  },
  defaulText: {
    color: '#475E75',
    fontSize: 16,
  },
  title: {
    color: '#161C21',
    fontSize: 24,
    fontWeight: '600',
  },
  toggleColor: {
    color: '#0040B0',
  },
});

export default styles;
