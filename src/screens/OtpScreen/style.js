import {StyleSheet} from 'react-native';
import {Colors, Fonts} from '@styles';
import {scaleSize, scaleFont} from '@utils/func';
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.BACKGROUND_COLOR,
    flexDirection: 'column',
  },
  body: {
    flexDirection: 'column',
    marginHorizontal: scaleSize(24),
    marginTop: scaleSize(65),
  },
  textHeader: {
    fontFamily: Fonts.FONT_SEMIBOLD,
    fontSize: scaleFont(26),
  },
  input: {
    marginTop: scaleSize(10),
    borderBottomWidth: 0.7,
    borderColor: Colors.Gray,
    height: scaleSize(39),
  },
});
export default styles;
