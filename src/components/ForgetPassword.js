import React, {Component} from 'react';
import {StatusBar, View, Text, ImageBackground, ScrollView} from 'react-native';
import {L} from '../config';
import styles, {hp, Primary_color, wp} from './Assets/style/styles';
import {navigate} from '../NavigationActions';
import {Button, Input} from './Assets/common/';

class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user_name: null,
    };
  }

  render() {
    //STATE
    const {user_name} = this.state;
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

          <View style={styles.white_view_style}>
            <View style={styles.view_88}>
              <Text style={styles.Extrabold_20pt_black}>
                {L.ForgetPassword}
              </Text>
              <View style={styles.sec_info_1}>
                <Text style={styles.Light_12pt_gray}>{L.enter_email}</Text>
              </View>

              <Input
                head_text={L.user_name_phone}
                value={user_name}
                borderWidth={wp(0.2)}
                placeholder={L.user_name_phone_p}
                onChangeText={user_name => this.setState({user_name})}
              />

              <Button
                onPress={() => navigate('VarifyCode')}
                activeOpacity={1}
                marginTop={hp(1)}
                width={wp(80)}
                height={hp(7.5)}
                label={L.send}
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

              <View style={{height: hp(8)}} />
            </View>
          </View>
        </ScrollView>
      </View>
    );
  }
}

export default SignUp;
