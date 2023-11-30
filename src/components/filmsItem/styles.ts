import { StyleSheet } from 'react-native';
import colors from '../../styles/colors';

import fontsSize from '../../styles/fontSize';

const styles = StyleSheet.create({
  container: {
    width: '92%',
    height: 150,
    marginTop: 5,
    marginBottom: 5,
    marginLeft: '5%',
    borderRadius: 10,
    borderWidth: 5,
    borderColor: colors.purple,
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  containerImagem: {
    width: '100%',
    height: '60%',
    alignItems: 'center',
    // borderColor: colors.grayLigth,
    // borderBottomWidth: 1,
  },
  icon: {
    resizeMode: 'center',
    height: '95%',
    width: '75%',
    padding: 5,
    marginBottom: 10,
    transform: [{ scale: 0.9 }],

  },
  text: {
    color: colors.black,
    fontSize: fontsSize.text,
    textAlign: 'center',
  },
  textProduction: {
    fontSize: 16, 
    color: colors.gray, 
    textAlign: 'center',
    textAlignVertical:'center',
    marginStart: 50,
    marginEnd: 50,

  }
});

export default styles;
