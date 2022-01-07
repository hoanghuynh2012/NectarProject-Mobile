import React, {useState} from 'react';
import {View, ImageBackground, Image, TouchableOpacity} from 'react-native';
import styles from './style';
import {image} from '@assets/image';
import {Colors} from '@styles';
import {scaleSize, scaleFont} from '@utils/func';
import {CustomText, CustomTextInput} from '@components';

const Index = () => {
  const [value, setValue] = useState('hoanghuynh5555@gmail.com');
  const [hidePw, setHidePw] = useState(true);
  return (
    <ImageBackground source={image.backgroundblur} style={styles.container}>
      <View style={styles.header}>
        <Image
          style={styles.imageHeader}
          source={image.small_logo}
          resizeMode="contain"
        />
      </View>
      <View style={styles.body}>
        <CustomText style={styles.textHeader}>Login</CustomText>
        <CustomText style={styles.textSmall}>
          Enter your emails and password
        </CustomText>
        <CustomText style={styles.textTitle}>Email</CustomText>
        <CustomTextInput
          onChangeText={val => setValue(val)}
          styleTextInput={styles.textInput}
          value={value}
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
              fontSize: scaleFont(14),
              textAlign: 'right',
              color: Colors.Black,
              marginTop: scaleSize(20),
            },
          ]}>
          Forgot Password?
        </CustomText>
        <TouchableOpacity style={styles.buttonLogin}>
          <CustomText style={styles.textLogin}>Login</CustomText>
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
            Don’t have an account?
            <CustomText
              style={[
                styles.textTitle,
                {fontSize: scaleFont(14), color: Colors.Green},
              ]}>
              {' '}
              Sign up
            </CustomText>
          </CustomText>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

export default Index;
