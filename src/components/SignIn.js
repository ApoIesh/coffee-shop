import React, {Component} from 'react';
import {
  StatusBar,
  TouchableOpacity,
  View,
  Text,
  ImageBackground,
  ScrollView,
  LayoutAnimation,
  Platform,
  UIManager,
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

if (Platform.OS === 'android') {
  if (UIManager.setLayoutAnimationEnabledExperimental) {
    UIManager.setLayoutAnimationEnabledExperimental(true);
  }
}

if (Platform.OS === 'ios') {
  if (UIManager.setLayoutAnimationEnabledExperimental) {
    UIManager.setLayoutAnimationEnabledExperimental(true);
  }
}

class SignIn extends Component {
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
        <View style={styles.white_view_style}>
          <ScrollView showsVerticalScrollIndicator={false}>
            <View style={styles.view_88}>
              <View style={styles.sec_info}>
                <Text style={styles.Extrabold_20pt_black}>{L.sign_in}</Text>
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
                    type={'Feather'}
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
                    onPress={() => {
                      LayoutAnimation.configureNext(
                        LayoutAnimation.Presets.linear,
                      ),
                        this.setState({agrre: !agrre});
                    }}
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
                marginTop={hp(10)}
                width={wp(80)}
                label={L.sign_in}
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
            </View>
          </ScrollView>
        </View>
      </View>
    );
  }
}

export default SignIn;
