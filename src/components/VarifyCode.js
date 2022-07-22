import React, {Component} from 'react';
import {
  StatusBar,
  TouchableOpacity,
  View,
  Text,
  ImageBackground,
  ScrollView,
} from 'react-native';
import {L} from '../config';
import styles, {
  fontBold,
  hp,
  Primary_color,
  white_color,
  wp,
} from './Assets/style/styles';
import {navigate} from '../NavigationActions';
import {Button, Input} from './Assets/common/';
import CodeInput from 'react-native-confirmation-code-input';

class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user_name: null,
    };
  }

  render() {
    //STATE
    //PROPS
    //OTHER

    return (
      <View style={styles.container_Primary}>
        <ImageBackground
          source={require('./Assets/image/login-pattern.png')}
          style={styles.image_bg}
        />
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.logo_text}>
            <Text style={styles.custom_light_white_2}>{L.welcome_to}</Text>
            <Text style={styles.custom_bold_white_2}>{'Cafe'}</Text>
          </View>

          <View
            style={{
              backgroundColor: white_color,
              width: wp(92),
              alignSelf: 'center',
              borderRadius: wp(2),
            }}>
            <View style={styles.view_88}>
              <Text style={styles.Extrabold_20pt_black}>
                {L.Code_Verification}
              </Text>
              <View style={styles.sec_info_1}>
                <Text style={styles.Light_12pt_gray}>
                  {L.enter_verification_code}
                </Text>
              </View>
              <View style={styles.code_view}>
                <CodeInput
                  keyboardType="phone-pad"
                  ref="refName"
                  secureTextEntry={false}
                  // compareWithCode="AsDW2"
                  activeColor="#151515"
                  inactiveColor="#ccc"
                  codeLength={4}
                  autoFocus={false}
                  ignoreCase={true}
                  inputPosition="center"
                  size={wp(13)}
                  space={10}
                  className={'border-b'}
                  selectionColor="#161616"
                  onFulfill={() => navigate('SignIn')}
                  containerStyle={{flexDirection: 'row'}}
                  codeInputStyle={{
                    borderButton: 2,
                    fontSize: wp(4.5),
                    fontFamily: fontBold,
                  }}
                />
              </View>

              <Button
                activeOpacity={1}
                marginTop={hp(1)}
                width={wp(80)}
                height={hp(7.5)}
                label={L.verify_code}
                image={
                  <ImageBackground
                    resizeMode="cover"
                    source={require('./Assets/image/group_2976.png')}
                    borderRadius={wp(10)}
                    style={{
                      width: wp(80),
                      height: hp(7),
                      position: 'absolute',
                    }}
                  />
                }
              />
              <TouchableOpacity>
                <View style={styles.ressend_code}>
                  <Text
                    style={[styles.Regular_12pt_black, {marginBottom: wp(1)}]}>
                    {L.resend_code}
                  </Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </View>
    );
  }
}

export default SignUp;
