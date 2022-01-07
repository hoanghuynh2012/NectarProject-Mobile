import {StyleSheet} from 'react-native';
import {Colors, Fonts} from '@styles';
import {scaleSize, scaleFont} from '@utils/func';
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  logo: {
    width: scaleSize(48.47),
    height: scaleSize(56.36),
  },
  textWelcome: {
    marginTop: scaleSize(35.66),
    color: Colors.White,
    fontFamily: Fonts.FONT_SEMIBOLD,
    fontSize: scaleFont(48),
    textAlign: 'center',
  },
  textSmall: {
    marginTop: scaleSize(19),
    color: Colors.White,
    fontFamily: Fonts.FONT_REGULAR,
    fontSize: scaleFont(16),
    textAlign: 'center',
  },
  buttonStart: {
    width: scaleSize(310),
    marginLeft: scaleSize(30.5),
    marginRight: scaleSize(30.5),
    height: scaleSize(60),
    marginTop: scaleSize(40.88),
    backgroundColor: Colors.Green,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: scaleSize(19),
    marginBottom: scaleSize(90.84),
  },
  textButton: {
    color: Colors.White,
    fontFamily: Fonts.FONT_MEDIUM,
    fontSize: scaleFont(16),
    textAlign: 'center',
  },
});
export default styles;
