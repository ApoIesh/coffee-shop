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

class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user_name: null,
      email: null,
      phone: null,
      password: null,
      confirm_password: null,
      password_secure: true,
      confirm_password_secure: true,
      agrre: false,
    };
  }

  render() {
    //STATE
    const {
      user_name,
      email,
      phone,
      password,
      confirm_password,
      password_secure,
      confirm_password_secure,
      agrre,
    } = this.state;

    //PROPS

    //OTHER
    const eye_password = password_secure == true ? 'eye-off' : 'eye';

    const eye_confirm_password =
      confirm_password_secure == true ? 'eye-off' : 'eye';

    return (
      <View style={styles.container_Primary}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.logo_text}>
            <Text style={styles.custom_light_white_2}>{L.welcome_to}</Text>
            <Text style={styles.custom_bold_white_2}>{'Cafe'}</Text>
          </View>

          <View style={styles.white_view_style}>
            <View style={styles.view_88}>
              <Text style={styles.Extrabold_20pt_black}>{L.sign_up}</Text>
              <View style={styles.sec_info}>
                <Text style={[styles.Light_12pt_gray, {lineHeight: wp(5.2)}]}>
                  {L.Please_fill}
                </Text>
              </View>

              <Input
                head_text={L.user_name}
                value={user_name}
                borderWidth={wp(0.2)}
                placeholder={L.user_name_p}
                onChangeText={user_name => this.setState({user_name})}
              />

              <Input
                head_text={L.email}
                value={email}
                borderWidth={wp(0.2)}
                placeholder={L.email_p}
                onChangeText={email => this.setState({email})}
              />

              <Input
                head_text={L.phone}
                value={phone}
                borderWidth={wp(0.2)}
                placeholder={L.phone_p}
                onChangeText={phone => this.setState({phone})}
                keyboardType={'phone-pad'}
              />

              <Input
                head_text={L.password}
                value={password}
                borderWidth={wp(0.2)}
                placeholder={L.password_p}
                onChangeText={password => this.setState({password})}
                secureTextEntry={password_secure}
                right={
                  <Feather
                    onPress={() =>
                      this.setState({password_secure: !password_secure})
                    }
                    name={eye_password}
                    size={wp(4.2)}
                    color={gray_color}
                  />
                }
              />

              <Input
                head_text={L.confirm_password}
                value={confirm_password}
                borderWidth={wp(0.2)}
                placeholder={L.confirm_password_p}
                onChangeText={confirm_password =>
                  this.setState({confirm_password})
                }
                secureTextEntry={confirm_password_secure}
                right={
                  <Feather
                    onPress={() =>
                      this.setState({
                        confirm_password_secure: !confirm_password_secure,
                      })
                    }
                    name={eye_confirm_password}
                    size={wp(4.2)}
                    color={gray_color}
                  />
                }
              />

              <View style={styles.agree_signUp_view_1}>
                <TouchableOpacity
                  onPress={() => this.setState({agrre: !agrre})}
                  activeOpacity={0.9}
                  style={{
                    ...styles.agree_signUp_view_2,
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
                <View>
                  <Text style={{...styles.Light_12pt_black}}>
                    {L.agreed_our_Terms}
                  </Text>
                  <TouchableOpacity>
                    <Text
                      style={{
                        ...styles.Regular_12pt_black,
                        marginTop: wp(1.5),
                        fontWeight: '700',
                      }}>
                      {L.Terms_Conditions}
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>

              <Button
                onPress={() => navigate('TabComponent')}
                activeOpacity={1}
                marginTop={hp(2)}
                width={wp(80)}
                label={L.sign_up}
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
                  {L.already_have_account}
                </Text>
                <TouchableOpacity
                  activeOpacity={0.9}
                  onPress={() => navigate('SignIn')}>
                  <Text style={[styles.Bold_12pt_black, {marginStart: wp(1)}]}>
                    {L.sign_in}
                  </Text>
                </TouchableOpacity>
              </View>
              <View style={{height: hp(15)}} />
            </View>
          </View>
          <View style={{height: hp(15)}} />
        </ScrollView>
      </View>
    );
  }
}

export default SignUp;
