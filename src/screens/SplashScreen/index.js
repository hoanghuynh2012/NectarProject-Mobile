import React, {useEffect} from 'react';
import {View, Image} from 'react-native';
import styles from './style';
import {image} from '@assets/image';
const index = ({navigation}) => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {
    let goToOnBoarding = setTimeout(
      () => navigation.replace('OnBoardingScreen'),
      3000,
    );
    return () => {
      clearTimeout(goToOnBoarding);
    };
  }, [navigation]);
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={image.big_logo} />
    </View>
  );
};

export default index;
