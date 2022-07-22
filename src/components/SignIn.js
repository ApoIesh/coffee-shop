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
  gray_color,
  hp,
  Primary_color,
  white_color,
  wp,
} from './Assets/style/styles';
import Feather from 'react-native-vector-icons/Feather';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {navigate} from '../NavigationActions';
import {Button, Input} from './Assets/common/';
import Icon from './Assets/common/Icon';

class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user_name: null,
      password: null,
      password_secure: true,
      agrre: false,
    };
  }

  render() {
    //STATE
    const {user_name, password, password_secure, agrre} = this.state;

    //PROPS

    //OTHER
    const eye_password = password_secure == true ? 'eye-off' : 'eye';

    return (
      <View style={styles.container_Primary}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.logo_text}>
            <Text style={styles.custom_light_white_2}>{L.welcome_to}</Text>
            <Text style={styles.custom_bold_white_2}>{'Cafe'}</Text>
          </View>

          <View style={styles.white_view_style}>
            <View style={styles.view_88}>
              <Text style={styles.Extrabold_20pt_black}>{L.sign_in}</Text>
              <View style={styles.sec_info}>
                <Text style={[styles.Light_12pt_gray, {lineHeight: wp(5)}]}>
                  {L.Please_fill}
                </Text>
              </View>

              <Input
                head_text={L.user_name_email}
                value={user_name}
                borderWidth={wp(0.2)}
                placeholder={L.user_name_email_p}
                onChangeText={user_name => this.setState({user_name})}
              />

              <Input
                head_text={L.password}
                value={password}
                borderWidth={wp(0.2)}
                placeholder={L.password_p}
                onChangeText={password => this.setState({password})}
                secureTextEntry={password_secure}
                right={
                  <Icon
                  type={"Feather"}
                    onPress={() =>
                      this.setState({password_secure: !password_secure})
                    }
                    name={eye_password}
                    size={wp(4.2)}
                    color={gray_color}
                  />
                }
              />

              <View style={styles.sec_agree_signIn}>
                <View style={styles.sec_agree_signIn_1}>
                  <TouchableOpacity
                    onPress={() => this.setState({agrre: !agrre})}
                    activeOpacity={0.9}
                    style={{
                      ...styles.sec_agree_signIn_2,
                      backgroundColor:
                        agrre == true ? Primary_color : white_color,
                    }}>
                    {agrre == true ? (
                      <Ionicons
                        name="ios-checkmark-sharp"
                        size={wp(4)}
                        color={white_color}
                      />
                    ) : null}
                  </TouchableOpacity>

                  <Text
                    style={{...styles.Regular_12pt_black, lineHeight: wp(4)}}>
                    {L.remember}
                  </Text>
                </View>
                <TouchableOpacity
                  activeOpacity={0.9}
                  onPress={() => navigate('ForgetPassword')}>
                  <Text
                    style={{...styles.Regular_12pt_black, lineHeight: wp(4)}}>
                    {L.forget}
                  </Text>
                </TouchableOpacity>
              </View>

              <Button
                onPress={() => navigate('TabComponent')}
                activeOpacity={1}
                marginTop={hp(2)}
                width={wp(80)}
                label={L.sign_in}
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
              <View style={styles.if_you_have}>
                <Text style={styles.Light_12pt_black}>
                  {L.dont_have_account}
                </Text>
                <TouchableOpacity
                  activeOpacity={0.9}
                  onPress={() => navigate('SignUp')}>
                  <Text style={[styles.Bold_12pt_black, {marginStart: wp(1)}]}>
                    {L.sign_up}
                  </Text>
                </TouchableOpacity>
              </View>
              <View style={{height: hp(13)}} />
            </View>
          </View>
          <View style={{height: hp(15)}} />
        </ScrollView>
      </View>
    );
  }
}

export default SignUp;
