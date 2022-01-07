import React, {useEffect} from 'react';
import {View, Text, Alert, ToastAndroid, Platform} from 'react-native';
import styles from './style';
import {
  check,
  openSettings,
  PERMISSIONS,
  request,
  RESULTS,
} from 'react-native-permissions';
import {getPosition} from '@utils/func';

const requestPermission = () => {
  if (Platform.OS == 'ios') {
    request(PERMISSIONS.IOS.LOCATION_WHEN_IN_USE).then(result => {
      if (result !== RESULTS.GRANTED) {
        Alert.alert(
          'Permission Location',
          "Your location setting is set to 'Off'.",
          [
            {
              text: 'Cancel',
              onPress: () => ToastAndroid.show('🥺 🥺 🥺', ToastAndroid.SHORT),
              style: 'cancel',
            },
            {text: `Let's Go`, onPress: () => openSettings()},
          ],
        );
      }
    });
  } else {
    request(PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION).then(result => {
      if (result !== RESULTS.GRANTED) {
        Alert.alert(
          'Permission Location',
          "Your location setting is set to 'Off'.",
          [
            {
              text: 'Cancel',
              onPress: () => ToastAndroid.show('🥺 🥺 🥺', ToastAndroid.SHORT),
              style: 'cancel',
            },
            {text: `Let's Go`, onPress: () => openSettings()},
          ],
        );
      }
    });
  }
};
// const checkPermission = () => {
//   if (Platform.OS == 'ios') {
//     check(PERMISSIONS.IOS.LOCATION_WHEN_IN_USE)
//       .then(async result => {
//         if (result == RESULTS.GRANTED) {
//           const position = await getPosition()} else {})
//       .catch(error => {});}
//   } else {
//     check(PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION)
//       .then(async result => {
//         if (result == RESULTS.GRANTED) {

//         } else {

//         }
//       })
//       .catch(error => {});
//   }
// };

const HomeScreen = () => {
  useEffect(() => {
    requestPermission();
  }, []);
  return (
    <View style={styles.container}>
      <Text></Text>
    </View>
  );
};

export default HomeScreen;
