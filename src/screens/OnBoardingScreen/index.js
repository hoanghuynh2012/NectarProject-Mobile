import React from 'react';
import {View, Text, Image, ImageBackground} from 'react-native';
import styles from './style';
import {image} from '@assets/image';
const index = () => {
  return (
    <View styles={styles.container}>
      <ImageBackground
        source={require('@assets/image/onboarding.png')}
        resizeMode="cover"
        style={styles.image}>
        <Image style={styles.logo} source={image.logo_white} />
        <Text style={styles.text}>Welcome to our store</Text>
      </ImageBackground>
    </View>
  );
};

export default index;
