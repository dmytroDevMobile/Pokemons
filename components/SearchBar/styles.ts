import {StyleSheet} from 'react-native';
import { deviceWidth } from '@/constants/device';


const styles = StyleSheet.create({
  searchView: {
    alignSelf: 'flex-end',
    backgroundColor: 'white',
    borderRadius: 100,
    width: deviceWidth * .5,
    height: 35,
    paddingLeft: 12,
    paddingRight: 4,
    paddingVertical: 4,
  },
  androidInputPadding: {
    paddingTop: -2,
    paddingBottom: 0,
  },
  searchRow: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  searchGoButton: {
    height: '100%',
    width: 45,
    backgroundColor: '#354A5F',
    borderRadius: 100,
    alignItems: 'center',
    justifyContent: 'center',
  },
  goButtonText: {
    color: '#F5F6F7',
  },
});

export default styles;
