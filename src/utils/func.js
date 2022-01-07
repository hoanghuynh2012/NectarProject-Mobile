import {Dimensions, PixelRatio, Platform} from 'react-native';
export const width = Dimensions.get('window').width;
export const height = Dimensions.get('window').height;
import Geolocation from 'react-native-geolocation-service';
const guidelineBaseWidth = 350;

export const scaleSize = size => (width / guidelineBaseWidth) * size;
export const scaleFont = size => size * PixelRatio.getFontScale();

export const getPosition = (options = {}) => {
  return new Promise((resolve, reject) => {
    Geolocation.getCurrentPosition(resolve, reject, {
      enableHighAccuracy: false,
      timeout: 15000,
      maximumAge: 10000,
    });
  });
};
