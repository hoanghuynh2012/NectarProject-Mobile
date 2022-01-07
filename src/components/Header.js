import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';
import {Colors, Insets} from '@styles';
import {scaleSize, scaleFont} from '@utils/func';
import {image} from '@assets/image';
import Icon from 'react-native-vector-icons/Ionicons';

const Header = props => {
  const {goBack, navigation} = props;
  return (
    <View style={styles.container}>
      {goBack && (
        <TouchableOpacity
          style={styles.buttonLeft}
          onPress={() => navigation.goBack()}>
          <Icon name="ios-chevron-back-sharp" size={scaleFont(30)} />
        </TouchableOpacity>
      )}
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: Insets.TOP,
    height: scaleSize(50),
  },
  buttonLeft: {
    marginLeft: scaleSize(16),
  },
});
