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
    flex: 2,
    flexDirection: 'column',
    marginHorizontal: scaleSize(24),
    marginTop: scaleSize(65),
    justifyContent: 'center',
    alignItems: 'center',
  },
  textHeader: {
    fontFamily: Fonts.FONT_SEMIBOLD,
    fontSize: scaleFont(26),
    marginTop: scaleSize(16),
  },
  bottom: {
    flex: 3,
    flexDirection: 'column',
    marginHorizontal: scaleSize(24),
    marginTop: scaleSize(65),
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalView: {
    backgroundColor: Colors.BACKGROUND_COLOR,
    borderRadius: 10,
    padding: scaleSize(15),
    width: scaleSize(200),
    borderColor: Colors.Gray,
    borderWidth: 0.2,
    alignItems: 'center',
  },
  buttonSubmit: {
    marginTop: scaleSize(20),
    height: scaleSize(60),
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: scaleSize(19),
    backgroundColor: Colors.Green,
  },
  textSubmit: {
    fontFamily: Fonts.FONT_SEMIBOLD,
    fontSize: scaleFont(18),
    color: Colors.White,
    textAlign: 'center',
  },
});
export default styles;
