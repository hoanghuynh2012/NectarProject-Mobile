import React, {useState} from 'react';
import {
  View,
  TextInput,
  TouchableOpacity,
  Platform,
  Modal,
  Image,
  ImageBackground,
} from 'react-native';
import {Header, CustomText} from '@components';
import styles from './style';
import {Colors, Fonts} from '@styles';
import {scaleSize, scaleFont} from '@utils/func';
import Icon from 'react-native-vector-icons/AntDesign';
import {image} from '@assets/image';

const index = ({navigation, props, route}) => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [visible, setVisible] = useState(false);

  return (
    <ImageBackground source={image.backgroundblur} style={styles.container}>
      <Header goBack={true} navigation={navigation} />
      <View style={styles.body}>
        <Image source={image.location} />
        <CustomText style={styles.textHeader}>Select Your Location</CustomText>
        <CustomText
          style={{
            fontFamily: Fonts.FONT_MEDIUM,
            fontSize: scaleFont(16),
            color: Colors.Gray,
            marginTop: scaleSize(27),
            textAlign: 'center',
          }}>
          Switch on your location to stay in tune with what’s happening in your
          area
        </CustomText>
      </View>
      <View style={styles.bottom}>
        <CustomText
          style={{
            fontFamily: Fonts.FONT_MEDIUM,
            fontSize: scaleFont(16),
            color: Colors.Gray,
            marginTop: scaleSize(27),
          }}>
          Your Zone
        </CustomText>
        <TouchableOpacity
          style={{
            borderColor: Colors.Gray,
            borderBottomWidth: 1,
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
          onPress={() => setVisible(!visible)}>
          <CustomText
            style={{
              fontFamily: Fonts.FONT_MEDIUM,
              fontSize: scaleFont(18),
              color: Colors.Black,
              marginTop: scaleSize(27),
            }}>
            Banasree
          </CustomText>
          <Icon
            name="down"
            color="gray"
            size={scaleSize(15)}
            style={{marginTop: scaleSize(16)}}
          />
        </TouchableOpacity>
        <Modal
          animationType="slide"
          transparent={true}
          visible={visible}
          onRequestClose={() => {
            setVisible(!visible);
          }}>
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <TouchableOpacity
                onPress={() => setVisible(!visible)}
                style={{borderColor: Colors.Gray, borderBottomWidth: 1}}>
                <CustomText
                  style={{
                    fontFamily: Fonts.FONT_MEDIUM,
                    fontSize: scaleFont(18),
                    color: Colors.Black,
                    marginTop: scaleSize(27),
                  }}>
                  Viet Nam
                </CustomText>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => setVisible(!visible)}
                style={{borderColor: Colors.Gray, borderBottomWidth: 1}}>
                <CustomText
                  style={{
                    fontFamily: Fonts.FONT_MEDIUM,
                    fontSize: scaleFont(18),
                    color: Colors.Black,
                    marginTop: scaleSize(27),
                  }}>
                  USA
                </CustomText>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => setVisible(!visible)}
                style={{borderColor: Colors.Gray, borderBottomWidth: 1}}>
                <CustomText
                  style={{
                    fontFamily: Fonts.FONT_MEDIUM,
                    fontSize: scaleFont(18),
                    color: Colors.Black,
                    marginTop: scaleSize(27),
                  }}>
                  China
                </CustomText>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => setVisible(!visible)}
                style={{borderColor: Colors.Gray, borderBottomWidth: 1}}>
                <CustomText
                  style={{
                    fontFamily: Fonts.FONT_MEDIUM,
                    fontSize: scaleFont(18),
                    color: Colors.Black,
                    marginTop: scaleSize(27),
                  }}>
                  Japan
                </CustomText>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
        <CustomText
          style={{
            fontFamily: Fonts.FONT_MEDIUM,
            fontSize: scaleFont(16),
            color: Colors.Gray,
            marginTop: scaleSize(27),
          }}>
          Your Area
        </CustomText>
        <TouchableOpacity
          style={{
            borderColor: Colors.Gray,
            borderBottomWidth: 1,
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
          onPress={() => setVisible(!visible)}>
          <CustomText
            style={{
              fontFamily: Fonts.FONT_MEDIUM,
              fontSize: scaleFont(18),
              color: Colors.Gray,
              marginTop: scaleSize(27),
            }}>
            Types of your area
          </CustomText>
          <Icon
            name="down"
            size={scaleSize(15)}
            color="gray"
            style={{marginTop: scaleSize(16)}}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.buttonSubmit}
          onPress={() => navigation.navigate('OtpScreen')}>
          <CustomText style={styles.textSubmit}>Submit</CustomText>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

export default index;
