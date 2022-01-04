import {StyleSheet} from 'react-native';
import {Colors} from '@styles';
import {scaleSize} from '@utils/func';
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: scaleSize(48.47),
    height: scaleSize(56.36),
  },
  text: {
    color: 'white',
    fontSize: 42,
    lineHeight: 84,
    fontWeight: 'bold',
    textAlign: 'center',
    backgroundColor: '#000000c0',
  },
});
export default styles;
