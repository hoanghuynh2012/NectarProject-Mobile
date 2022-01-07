import React, {useState, useEffect, useRef} from 'react';
import {
  View,
  Platform,
  Animated,
  Keyboard,
  Image,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import styles from './style';
import {image} from '@assets/image';
import {Colors, Fonts} from '@styles';
import {scaleSize, scaleFont} from '@utils/func';
import {CustomText, CustomTextInput} from '@components';

const Index = () => {
  const [value, setValue] = useState('hoanghuynh2012');
  const [hidePw, setHidePw] = useState(true);
  const translateY = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    const showSubscription = Keyboard.addListener('keyboardDidShow', () => {
      Animated.timing(translateY, {
        toValue: -200,
        duration: 200,
        useNativeDriver: true,
      }).start();
    });
    const hideSubscription = Keyboard.addListener('keyboardDidHide', () => {
      Animated.timing(translateY, {
        toValue: 0,
        duration: 200,
        useNativeDriver: true,
      }).start();
    });

    return () => {
      showSubscription.remove();
      hideSubscription.remove();
    };
  }, [translateY]);
  console.log('heightBottom', translateY);
  return (
    <Animated.ScrollView
      style={[styles.container, {transform: [{translateY: translateY}]}]}>
      <View style={styles.header}>
        <Image
          style={styles.imageHeader}
          source={image.small_logo}
          resizeMode="contain"
        />
      </View>
      <View style={styles.body}>
        <CustomText style={styles.textHeader}>Sign Up</CustomText>
        <CustomText style={styles.textSmall}>
          Enter your credentials to continue
        </CustomText>
        <CustomText style={styles.textTitle}>Username</CustomText>
        <CustomTextInput
          onChangeText={val => setValue(val)}
          styleTextInput={styles.textInput}
          value={value}
        />
        <CustomText style={styles.textTitle}>Email</CustomText>
        <CustomTextInput
          onChangeText={val => setValue(val)}
          styleTextInput={styles.textInput}
          value={value + '@gmail.com'}
        />
        <CustomText style={[styles.textTitle, {marginTop: scaleSize(30)}]}>
          Password
        </CustomText>
        <CustomTextInput
          onChangeText={val => setValue(val)}
          hidePassword={() => setHidePw(!hidePw)}
          secureTextEntry={hidePw}
          styleTextInput={styles.textInput}
          value={value}
          password={true}
        />
        <CustomText
          style={[
            styles.textTitle,
            {
              fontFamily: Fonts.FONT_MEDIUM,
              fontSize: scaleFont(14),
              color: Colors.Black,
              marginTop: scaleSize(20),
              lineHeight: 20,
            },
          ]}>
          By continuing you agree to our{' '}
          <CustomText
            style={[
              styles.textTitle,
              {
                fontFamily: Fonts.FONT_MEDIUM,
                fontSize: scaleFont(14),
                color: Colors.Green,
                marginTop: scaleSize(20),
              },
            ]}>
            Terms of Service
          </CustomText>{' '}
          and{' '}
          <CustomText
            lineHeight={9}
            style={[
              styles.textTitle,
              {
                fontFamily: Fonts.FONT_MEDIUM,
                fontSize: scaleFont(14),
                color: Colors.Green,
                marginTop: scaleSize(20),
              },
            ]}>
            Privacy Policy.
          </CustomText>
        </CustomText>
        <TouchableOpacity style={styles.buttonLogin}>
          <CustomText style={styles.textLogin}>Sign Up</CustomText>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => console.log('Sign Up')}>
          <CustomText
            style={[
              styles.textTitle,
              {
                fontSize: scaleFont(14),
                textAlign: 'center',
                color: Colors.Black,
                marginTop: scaleSize(25),
              },
            ]}>
            Already have an account?
            <CustomText
              style={[
                styles.textTitle,
                {fontSize: scaleFont(14), color: Colors.Green},
              ]}>
              {' '}
              Login
            </CustomText>
          </CustomText>
        </TouchableOpacity>
      </View>
    </Animated.ScrollView>
  );
};

export default Index;
