import { Platform, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  containerPrincipal: {
    display: 'flex',
    flexDirection: 'column',
    marginBottom: '-35%',
    width: '100%',
    height: '30%',
    paddingTop: Platform.OS === 'ios' ? 25 : 0,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  linearGradient: {
    width: '100%',
    height: '20%',
  },
});
export default styles;
