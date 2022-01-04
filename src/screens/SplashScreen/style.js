import {StyleSheet} from 'react-native';
import {Colors} from '@styles';
import {scaleSize} from '@utils/func';
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.Green,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: scaleSize(267.42),
    height: scaleSize(68.61),
  },
});
export default styles;
