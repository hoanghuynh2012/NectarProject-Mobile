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
  ImageBackground,
} from 'react-native';
import styles from './style';
import {image} from '@assets/image';
import CountryPicker from 'react-native-country-picker-modal';
import {Colors} from '@styles';
import {scaleSize} from '@utils/func';
import {CustomText} from '@components';

const index = ({navigation}) => {
  const [countryCode, setCountryCode] = useState('VN');
  const [country, setCountry] = useState(null);
  const [withCountryNameButton, setWithCountryNameButton] = useState(false);
  const [withFlag, setWithFlag] = useState(true);
  const [withEmoji, setWithEmoji] = useState(true);
  const [withFilter, setWithFilter] = useState(true);
  const [withAlphaFilter, setWithAlphaFilter] = useState(false);
  const [withCallingCode, setWithCallingCode] = useState(false);
  const [phone, setPhone] = useState();
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
    <ImageBackground source={image.backgroundblur} style={styles.container}>
      <View style={styles.imageHeader}>
        <Image style={styles.image} source={image.image_singin} />
      </View>
      <Animated.View
        style={[styles.body, {transform: [{translateY: translateY}]}]}>
        <CustomText style={styles.text}>
          Get your groceries with nectar
        </CustomText>
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
            <CustomText style={styles.callingCode}>
              {'+' + country.callingCode[0]}
            </CustomText>
          ) : (
            <CustomText style={styles.callingCode}>{'+' + '84'}</CustomText>
          )}
          <TextInput
            style={styles.inputPhone}
            value={phone}
            onChangeText={val => setPhone(val)}
            keyboardType="numeric"
            onSubmitEditing={() => navigation.navigate('OtpScreen')}
          />
        </View>
        <TouchableOpacity
          style={styles.buttonLogin}
          onPress={() => navigation.navigate('OtpScreen', {phone: phone})}>
          <CustomText style={styles.textGoogle}>Login</CustomText>
        </TouchableOpacity>
        <CustomText style={styles.textBottom}>
          Or connect with social media
        </CustomText>
        <TouchableOpacity style={styles.button}>
          <Image style={styles.imageLogo} source={image.icon_gg} />
          <CustomText style={styles.textGoogle}>
            Continue with Google
          </CustomText>
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
          <CustomText style={styles.textGoogle}>
            Continue with Facebook
          </CustomText>
        </TouchableOpacity>
      </Animated.View>
    </ImageBackground>
  );
};

export default index;
