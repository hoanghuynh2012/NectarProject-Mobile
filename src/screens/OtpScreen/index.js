import React, {useState} from 'react';
import {
  View,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
  ImageBackground,
} from 'react-native';
import {Header, CustomText} from '@components';
import styles from './style';
import {Colors, Fonts} from '@styles';
import {scaleSize, scaleFont} from '@utils/func';
import Entypo from 'react-native-vector-icons/Entypo';
import {image} from '@assets/image';

const index = ({navigation, props, route}) => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}>
      <ImageBackground source={image.ImageBackground} style={styles.container}>
        <Header goBack={true} navigation={navigation} />
        <View style={styles.body}>
          <CustomText style={styles.textHeader}>
            {route.params.phone}
          </CustomText>
          <CustomText style={styles.textHeader}>
            Enter your 4-digit code
          </CustomText>
          <CustomText
            style={{
              fontFamily: Fonts.FONT_SEMIBOLD,
              fontSize: scaleFont(16),
              color: Colors.Gray,
              marginTop: scaleSize(27),
            }}>
            Code
          </CustomText>
          <TextInput
            style={styles.input}
            placeholder={'- - - -'}
            keyboardType="numeric"
            placeholderTextColor="black"
            maxLength={4}
          />
        </View>
        <View style={styles.viewBottom}>
          <CustomText
            style={{
              fontSize: scaleFont(18),
              fontFamily: Fonts.FONT_MEDIUM,
              color: Colors.Green,
            }}>
            Resemd Code
          </CustomText>
          <TouchableOpacity
            style={styles.btnContinue}
            onPress={() => navigation.navigate('SelectLocation')}>
            <Entypo name="chevron-right" size={30} color={Colors.White} />
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </KeyboardAvoidingView>
  );
};

export default index;
