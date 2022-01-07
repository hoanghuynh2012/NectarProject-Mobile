import {StyleSheet} from 'react-native';
import {Colors, Fonts, Insets} from '@styles';
import {scaleSize, scaleFont} from '@utils/func';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.BACKGROUND_COLOR,
    flexDirection: 'column',
    marginTop: Insets.TOP,
  },
});
export default styles;
