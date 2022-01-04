import {StyleSheet} from 'react-native';
import {Colors, Fonts} from '@styles';
import {scaleSize, scaleFont} from '@utils/func';
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.BACKGROUND_COLOR,
    alignItems: 'center',
    justifyContent: 'center',
  },
  imageHeader: {
    flex: 1,
  },
  body: {
    flex: 1,
    width: scaleSize(300),
    marginHorizontal: scaleSize(20),
  },
  text: {
    width: scaleSize(222),
    marginTop: scaleSize(30),
    color: Colors.Back,
    fontFamily: Fonts.FONT_SEMIBOLD,
    fontSize: scaleFont(26),
  },
  viewPhoneNumber: {
    flexDirection: 'row',
    width: scaleSize(290),
    height: scaleSize(39.55),
    borderColor: Colors.Black,
    borderBottomWidth: 0.2,
    marginTop: scaleSize(30),
    alignItems: 'center',
  },
  callingCode: {
    width: scaleSize(42),
    height: scaleSize(20),
    color: Colors.Back,
    fontFamily: Fonts.FONT_MEDIUM,
    lineHeight: scaleFont(29),
    fontSize: scaleFont(18),
    textAlign: 'center',
  },
  inputPhone: {
    width: scaleSize(200),
    marginLeft: scaleSize(8),
    height: scaleSize(40),
  },
  buttonLogin: {
    marginTop: scaleSize(10),
    height: scaleSize(56),
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: scaleSize(19),
    backgroundColor: Colors.Green,
  },
  textBottom: {
    color: Colors.Gray,
    fontFamily: Fonts.FONT_SEMIBOLD,
    lineHeight: scaleFont(17),
    fontSize: scaleFont(14),
    textAlign: 'center',
    marginTop: scaleSize(40),
  },
  button: {
    backgroundColor: Colors.BACKGROUND_GOOGLE,
    height: scaleSize(56),
    width: scaleSize(300),
    borderRadius: scaleSize(19),
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: scaleSize(37),
    flexDirection: 'row',
  },
  textGoogle: {
    fontFamily: Fonts.FONT_SEMIBOLD,
    lineHeight: scaleFont(17),
    fontSize: scaleFont(18),
    textAlign: 'center',
    color: Colors.White,
  },
  imageLogo: {
    width: scaleSize(22),
    height: scaleSize(24),
    marginRight: scaleSize(40),
  },
});
export default styles;
