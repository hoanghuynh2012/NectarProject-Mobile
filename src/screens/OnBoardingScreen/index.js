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
const index = ({navigation}) => {
  return (
    <View styles={styles.container}>
      <ImageBackground
        source={require('@assets/image/onboarding.png')}
        resizeMode="cover"
        style={styles.image}>
        <Image style={styles.logo} source={image.logo_white} />
        <Text style={styles.textWelcome}>Welcome {'\n'} to our store</Text>
        <Text style={styles.textSmall}>
          Get your groceries in as fast as one hour
        </Text>
        <TouchableOpacity
          style={styles.buttonStart}
          onPress={() => navigation.replace('SingInScreen')}>
          <Text style={styles.textButton}>Get Started</Text>
        </TouchableOpacity>
      </ImageBackground>
    </View>
  );
};

export default index;
