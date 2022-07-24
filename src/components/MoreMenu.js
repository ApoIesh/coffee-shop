import React, {Component} from 'react';
import {
  StatusBar,
  TouchableOpacity,
  View,
  Text,
  Image,
  ImageBackground,
  ScrollView,
  Linking,
} from 'react-native';
import {L} from '../config';
import styles, {black_color, hp, white_color, wp} from './Assets/style/styles';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {navigate, reset} from '../NavigationActions';

class MoreMenu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: 'Mohammed ApoIesh',
      city: 'Mansoura',
      image: require('./Assets/image/ApoIesh.jpg'),
    };
  }

  render() {
    //STATE
    const {userName, city, image, points} = this.state;
    //PROPS

    //OTHER

    return (
      <View style={styles.container_black}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.view_92}>
            <View style={{marginTop: hp(2)}}>
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
            </View>

            <View
              style={{
                borderWidth: wp(0.1),
                borderColor: '#424242',
                marginTop: hp(4),
              }}
            />

            <View style={{marginTop: hp(2)}} />

            <View style={{alignSelf: 'center'}}>
              <TouchableOpacity activeOpacity={0.9}>
                <View style={styles.sec_icons_menu}>
                  <View style={styles.view_icon_menu}>
                    <Image
                      source={require('./Assets/image/Icon-feather-heart.png')}
                      style={styles.image_icon_menu}
                    />
                  </View>
                  <Text style={styles.Regular_16pt_white}>{L.favourites}</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity
                activeOpacity={0.9}
                onPress={() => navigate(L.my_orders)}>
                <View style={styles.sec_icons_menu}>
                  <View style={styles.view_icon_menu}>
                    <MaterialCommunityIcons
                      name="radar"
                      color={white_color}
                      size={wp(7.5)}
                    />
                  </View>
                  <Text style={styles.Regular_16pt_white}>{L.my_orders}</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity
                activeOpacity={0.9}
                onPress={() => navigate(L.settings)}>
                <View style={styles.sec_icons_menu}>
                  <View style={styles.view_icon_menu}>
                    <Image
                      source={require('./Assets/image/settings.png')}
                      style={styles.image_icon_menu}
                    />
                  </View>
                  <Text style={styles.Regular_16pt_white}>{L.settings}</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity
                activeOpacity={0.9}
                onPress={() => reset('SignIn')}>
                <View style={styles.sec_icons_menu}>
                  <View style={styles.view_icon_menu}>
                    <Image
                      source={require('./Assets/image/power-settings-new.png')}
                      style={styles.image_icon_menu}
                    />
                  </View>
                  <Text style={styles.Regular_16pt_white}>{L.Logout}</Text>
                </View>
              </TouchableOpacity>
              <View style={{marginTop: hp(2)}} />
            </View>

            <View
              style={{
                borderWidth: wp(0.1),
                borderColor: '#424242',
                //   marginTop: hp(4),
                marginBottom: hp(4),
              }}
            />

            <View
              style={{
                flexDirection: 'row',
                alignSelf: 'center',
                alignItems: 'center',
                width: wp(80),
                justifyContent: 'space-evenly',
                marginBottom: hp(3),
              }}>
              <Text style={styles.Regular_10pt_white}>{L.follow}</Text>

              <View
                style={{
                  borderWidth: wp(0.1),
                  width: wp(4),
                  borderColor: '#fff',
                  marginStart: wp(-1),
                }}
              />
              <TouchableOpacity
                onPress={() => Linking.openURL('https://github.com/ApoIesh')}>
                <Image
                  source={require('./Assets/image/git.png')}
                  style={{
                    resizeMode: 'cover',
                    tintColor: white_color,
                    width: wp(6),
                    height: wp(6),
                    borderRadius: wp(6 / 2),
                  }}
                />
              </TouchableOpacity>

              <TouchableOpacity
                onPress={() =>
                  Linking.openURL('https://www.facebook.com/M.H.aboaesh')
                }>
                <Image
                  source={require('./Assets/image/facebook.png')}
                  style={{width: wp(7), height: wp(7)}}
                />
              </TouchableOpacity>

              <TouchableOpacity
                onPress={() =>
                  Linking.openURL(
                    'https://www.linkedin.com/in/mohammed-hassan-mahmoud-3263801a9/',
                  )
                }>
                <Image
                  source={require('./Assets/image/LinkedIn_icon_circle.svg.png')}
                  style={{width: wp(7), height: wp(7)}}
                />
              </TouchableOpacity>

              <TouchableOpacity
                onPress={() =>
                  Linking.openURL('https://twitter.com/MOHAMMEDAPOIESH')
                }>
                <Image
                  source={require('./Assets/image/twitter.png')}
                  style={{width: wp(7), height: wp(7)}}
                />
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() =>
                  Linking.openURL('https://www.instagram.com/apoiesh/')
                }>
                <Image
                  source={require('./Assets/image/instagram.png')}
                  style={{
                    width: wp(7),
                    height: wp(7),
                    borderRadius: wp(7 / 2),
                  }}
                />
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </View>
    );
  }
}

export default MoreMenu;
