import React, {Component} from 'react';
import {
  StatusBar,
  TouchableOpacity,
  View,
  Text,
  Image,
  ScrollView,
} from 'react-native';
import {L} from '../config';
import styles, {
  hp,
  Primary_color,
  white_color,
  wp,
} from './Assets/style/styles';
import Feather from 'react-native-vector-icons/Feather';
import {navigate} from '../NavigationActions';

class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: 'Mohammed ApoIesh',
      city: 'Mansoura',
      image: require('./Assets/image/ApoIesh.jpg'),
      points: '820',
      userEmail: 'https://github.com/ApoIesh',
      userPhone: '+201006371563',
      userPassword: '*********',
    };
  }

  render() {
    //STATE
    const {userName, city, image, points, userEmail, userPhone, userPassword} =
      this.state;
    //PROPS

    //OTHER

    return (
      <View style={styles.container_black}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.view_92}>
            <View style={{marginTop: hp(7.4)}}>
              <View style={styles.sec_image}>
                <View style={{alignItems: 'center', justifyContent: 'center'}}>
                  <Image
                    resizeMode="contain"
                    source={image}
                    style={styles.image_register}
                  />
                </View>
              </View>
            </View>

            <View style={{alignSelf: 'center', alignItems: 'center'}}>
              <Text style={[styles.Bold_14pt_white, {lineHeight: hp(3.5)}]}>
                {userName}
              </Text>
              <Text style={[styles.Regular_14pt_gray, {lineHeight: hp(3)}]}>
                {city}
              </Text>
            </View>
            
            <TouchableOpacity
              activeOpacity={0.9}
              onPress={() => navigate(L.edit_profile)}>
              <View style={styles.sec_edit_profile}>
                <Feather name="edit-3" size={wp(3.5)} color={white_color} />
                <Text
                  style={[styles.Regular_12pt_white, {marginStart: wp(2.5)}]}>
                  {L.edit}
                </Text>
              </View>
            </TouchableOpacity>

            <View style={styles.line_profile} />

            <View style={{marginTop: hp(5)}}>
              <View style={styles.view_sec_details}>
                <Text style={styles.Regular_14pt_white}>{userName}</Text>
              </View>

              <View style={styles.view_sec_details}>
                <Text style={styles.Regular_14pt_white}>{userEmail}</Text>
              </View>

              <View style={styles.view_sec_details}>
                <Text style={styles.Regular_14pt_white}>{userPhone}</Text>
              </View>

              <View style={styles.view_sec_details}>
                <Text style={styles.Regular_14pt_white}>{userPassword}</Text>
              </View>
            </View>
            <View style={{height: hp(8)}} />
          </View>
        </ScrollView>
      </View>
    );
  }
}

export default Profile;
