import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';
import {Colors, Insets} from '@styles';
import {scaleSize} from '@utils/func';
import {image} from '@assets/image';

const Header = props => {
  const {goBack} = props;
  return (
    <View style={styles.container}>
      {goBack && (
        <TouchableOpacity style={styles.buttonLeft}>
          <Image source={image.icon_goBack} style={styles.imageLeft} />
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
    marginLeft: scaleSize(24),
  },
});
