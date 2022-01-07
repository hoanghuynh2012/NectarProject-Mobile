import React from 'react';
import {
  View,
  Text,
  Image,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import styles from './style';
import {image} from '@assets/image';
import {CustomText} from '@components';
const index = ({navigation}) => {
  return (
    <View styles={styles.container}>
      <ImageBackground
        source={require('@assets/image/onboarding.png')}
        resizeMode="cover"
        style={styles.image}>
        <Image style={styles.logo} source={image.logo_white} />
        <CustomText style={styles.textWelcome}>
          Welcome {'\n'} to our store
        </CustomText>
        <CustomText style={styles.textSmall}>
          Get your groceries in as fast as one hour
        </CustomText>
        <TouchableOpacity
          style={styles.buttonStart}
          onPress={() => navigation.replace('SingInScreen')}>
          <CustomText style={styles.textButton}>Get Started</CustomText>
        </TouchableOpacity>
      </ImageBackground>
    </View>
  );
};

export default index;
