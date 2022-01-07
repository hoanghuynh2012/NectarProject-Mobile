import {Colors, Fonts} from '@styles';
import {scaleFont} from '@utils/func';
import React from 'react';
import {StyleSheet, Text} from 'react-native';

const CustomText = React.memo(function CustomText(props) {
  return (
    <Text
      maxFontSizeMultiplier={1.1}
      allowFontScaling={false}
      style={[
        DefaultStyle.text,
        {fontFamily: props.bold ? Fonts.FONT_EXTRABOLD : Fonts.FONT_MEDIUM},
        props.style,
      ]}
      {...props}>
      {props.children}
    </Text>
  );
});

const DefaultStyle = StyleSheet.create({
  text: {
    fontSize: scaleFont(12),
    fontFamily: Fonts.FONT_MULI,
    color: Colors.Gray_10,
  },
});

export default CustomText;
