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
  header: {
    height: scaleSize(180),
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageHeader: {
    width: scaleSize(47),
    height: scaleSize(56),
  },
  body: {
    flex: 1,
    flexDirection: 'column',
    marginHorizontal: scaleSize(24),
  },
  textHeader: {
    fontFamily: Fonts.FONT_SEMIBOLD,
    fontSize: scaleFont(26),
    color: Colors.Black,
  },
  textSmall: {
    marginTop: scaleSize(15),
    fontFamily: Fonts.FONT_MEDIUM,
    fontSize: scaleFont(16),
    color: Colors.Gray,
  },
  textTitle: {
    marginTop: scaleSize(40),
    fontFamily: Fonts.FONT_MEDIUM,
    fontSize: scaleFont(16),
    color: Colors.Gray,
  },
  textInput: {
    height: scaleSize(20),
    fontSize: scaleFont(18),
    fontFamily: Fonts.FONT_MEDIUM,
    color: Colors.Black,
  },
  buttonLogin: {
    marginTop: scaleSize(30),
    height: scaleSize(56),
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: scaleSize(19),
    backgroundColor: Colors.Green,
  },
  textLogin: {
    fontSize: scaleFont(18),
    fontFamily: Fonts.FONT_MEDIUM,
    color: Colors.White,
  },
});
export default styles;
