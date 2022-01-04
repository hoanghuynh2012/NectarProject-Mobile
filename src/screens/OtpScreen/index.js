import React from 'react';
import {View, Text, TextInput} from 'react-native';
import {Header} from '@components';
import styles from './style';
import {Colors, Fonts} from '@styles';
import {scaleSize, scaleFont} from '@utils/func';

const index = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Header goBack={true} navigation={navigation} />
      <View style={styles.body}>
        <Text style={styles.textHeader}>Enter your 4-digit code</Text>
        <Text
          style={{
            fontFamily: Fonts.FONT_SEMIBOLD,
            fontSize: scaleFont(16),
            color: Colors.Gray,
            marginTop: scaleSize(27),
          }}>
          Code
        </Text>
        <TextInput
          style={styles.input}
          placeholder="- - - -"
          keyboardType="numeric"
          placeholderTextColor="black"
          maxLength={4}
        />
      </View>
    </View>
  );
};

export default index;
