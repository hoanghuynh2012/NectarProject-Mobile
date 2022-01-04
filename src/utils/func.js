import { Dimensions, PixelRatio, Platform } from 'react-native';
export const width = Dimensions.get('window').width;
export const height = Dimensions.get('window').height;
const guidelineBaseWidth = 350;

export const scaleSize = size => (width / guidelineBaseWidth) * size;
export const scaleFont = size => size * PixelRatio.getFontScale();
