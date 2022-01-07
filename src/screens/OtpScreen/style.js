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
    fontSize: scaleFont(16),
  },
  viewBottom: {
    flex: 3,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginHorizontal: scaleSize(14),
  },
  btnContinue: {
    backgroundColor: Colors.Green,
    borderRadius: 50,
    width: scaleSize(50),
    height: scaleSize(50),
    alignItems: 'center',
    justifyContent: 'center',
  },
});
export default styles;
