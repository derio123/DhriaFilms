import { Platform, StyleSheet } from 'react-native';
import colors from '../../styles/colors';
  
const styles = StyleSheet.create({
  containerArrowBack: {
    alignItems: 'center',
    width: '100%',
    height: Platform.OS === 'ios' ? 120 : '36%',
    flexDirection: 'row',
  },
  iconArrowBack: {
    flexDirection: 'row',
    width: '10%',
    height: '115%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '80%',
    height: '100%',
    justifyContent: 'center',
  },
  title: {
    textAlign: 'center',
    fontSize: 23,
    color: colors.white,
  },
});

export default styles;
