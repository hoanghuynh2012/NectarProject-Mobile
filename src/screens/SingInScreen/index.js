/* eslint-disable react-hooks/rules-of-hooks */
import React, {useState, useEffect, useRef} from 'react';
import {
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  Keyboard,
  Animated,
} from 'react-native';
import styles from './style';
import {image} from '@assets/image';
import CountryPicker from 'react-native-country-picker-modal';
import {Colors} from '@styles';
import {scaleSize} from '@utils/func';

const index = ({navigation}) => {
  const [countryCode, setCountryCode] = useState('VN');
  const [country, setCountry] = useState(null);
  const [withCountryNameButton, setWithCountryNameButton] = useState(false);
  const [withFlag, setWithFlag] = useState(true);
  const [withEmoji, setWithEmoji] = useState(true);
  const [withFilter, setWithFilter] = useState(true);
  const [withAlphaFilter, setWithAlphaFilter] = useState(false);
  const [withCallingCode, setWithCallingCode] = useState(false);
  const translateY = useRef(new Animated.Value(-140)).current;
  const onSelect = country => {
    setCountryCode(country.cca2);
    setCountry(country);
  };
  useEffect(() => {
    const showSubscription = Keyboard.addListener('keyboardDidShow', () => {
      Animated.timing(translateY, {
        toValue: -170,
        duration: 200,
        useNativeDriver: true,
      }).start();
    });
    const hideSubscription = Keyboard.addListener('keyboardDidHide', () => {
      Animated.timing(translateY, {
        toValue: -140,
        duration: 200,
        useNativeDriver: true,
      }).start();
    });
    return () => {
      showSubscription.remove();
      hideSubscription.remove();
    };
  }, [translateY]);
  return (
    <View style={styles.container}>
      <View style={styles.imageHeader}>
        <Image style={styles.image} source={image.image_singin} />
      </View>
      <Animated.View
        style={[styles.body, {transform: [{translateY: translateY}]}]}>
        <Text style={styles.text}>Get your groceries with nectar</Text>
        <View style={styles.viewPhoneNumber}>
          <CountryPicker
            {...{
              countryCode,
              withFilter,
              withFlag,
              withCountryNameButton,
              withAlphaFilter,
              withCallingCode,
              withEmoji,
              onSelect,
            }}
          />
          {country !== null ? (
            <Text style={styles.callingCode}>
              {'+' + country.callingCode[0]}
            </Text>
          ) : (
            <Text style={styles.callingCode}>{'+' + '84'}</Text>
          )}
          <TextInput
            style={styles.inputPhone}
            keyboardType="numeric"
            onSubmitEditing={() => navigation.navigate('OtpScreen')}
          />
        </View>
        <TouchableOpacity
          style={styles.buttonLogin}
          onPress={() => navigation.navigate('OtpScreen')}>
          <Text style={styles.textGoogle}>Login</Text>
        </TouchableOpacity>
        <Text style={styles.textBottom}>Or connect with social media</Text>
        <TouchableOpacity style={styles.button}>
          <Image style={styles.imageLogo} source={image.icon_gg} />
          <Text style={styles.textGoogle}> Continue with Google</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.button,
            {backgroundColor: Colors.BACKGROUND_FACEBOOK},
          ]}>
          <Image
            style={[
              styles.imageLogo,
              {width: scaleSize(12), height: scaleSize(24)},
            ]}
            source={image.icon_fb}
          />
          <Text style={styles.textGoogle}> Continue with Facebook</Text>
        </TouchableOpacity>
      </Animated.View>
    </View>
  );
};

export default index;
