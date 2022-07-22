import React, {Component} from 'react';
import {
  StatusBar,
  TouchableOpacity,
  View,
  Text,
  Image,
  ScrollView,
  Modal,
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
import AntDesign from 'react-native-vector-icons/AntDesign';
import {navigate} from '../NavigationActions';
import {Input} from './Assets/common/';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import Icon from './Assets/common/Icon';

class EditProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: 'Mohammed ApoIesh',
      image: null,
      photo: require('./Assets/image/ApoIesh.jpg'),
      points: '820',
      userEmail: 'https://github.com/ApoIesh',
      userPhone: '+201006371563',
      userPassword: '123456',
      modalVisible: false,
      password_secure: true,
    };
  }

  setModalVisible = visible => {
    this.setState({modalVisible: visible});
  };

  render() {
    const {
      userName,
      image,
      points,
      userEmail,
      userPhone,
      userPassword,
      modalVisible,
      photo,
      password_secure,
    } = this.state;

    const eye_password = password_secure == true ? 'eye-off' : 'eye';
    return (
      <View style={styles.container_black}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.view_92}>
            <View style={{marginTop: hp(8)}}>
              <TouchableOpacity
                activeOpacity={0.9}
                onPress={() => navigate(L.Profile)}
                style={styles.done}>
                <Icon
                  type={'Feather'}
                  name="check"
                  size={wp(4)}
                  color={white_color}
                />
                <Text
                  style={[styles.Regular_12pt_white, {marginStart: wp(2.5)}]}>
                  {L.done}
                </Text>
              </TouchableOpacity>

              <View style={styles.sec_image}>
                <View style={{alignItems: 'center', justifyContent: 'center'}}>
                  <Image
                    source={image ? {uri: image} : photo}
                    style={styles.image_register}
                  />
                </View>

                <View
                  style={{
                    // position: 'absolute',
                    alignSelf: 'center',
                    marginTop: hp(1),
                    marginBottom: hp(-3),
                  }}>
                  <TouchableOpacity
                    activeOpacity={0.9}
                    onPress={() => this.setModalVisible(true)}>
                    <View style={{alignItems: 'center', height: wp(12)}}>
                      <AntDesign
                        name="camerao"
                        size={wp(4.5)}
                        color={white_color}
                      />

                      <Text style={styles.Light_12pt_white}>
                        {L.change_photo}
                      </Text>
                    </View>
                  </TouchableOpacity>
                </View>
              </View>
            </View>

            <View style={styles.line_profile} />

            <View style={{marginTop: hp(4.5)}}>
              <Input
                value={userName}
                borderRadius={wp(7)}
                onChangeText={userName => this.setState({userName})}
                placeholder={L.user_name_p}
              />

              <Input
                value={userEmail}
                borderRadius={wp(7)}
                onChangeText={userEmail => this.setState({userEmail})}
                placeholder={L.email}
              />

              <Input
                value={userPhone}
                borderRadius={wp(7)}
                onChangeText={userPhone => this.setState({userPhone})}
                placeholder={L.phone}
                keyboardType={'phone-pad'}
              />

              <Input
                value={userPassword}
                borderRadius={wp(7)}
                onChangeText={userPassword => this.setState({userPassword})}
                placeholder={L.password}
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
            </View>
          </View>
          <View style={{height: hp(10)}} />
        </ScrollView>

        <Modal
          animationType="fade"
          transparent={true}
          hardwareAccelerated={false}
          visible={modalVisible}
          onRequestClose={() => {
            this.setModalVisible(!modalVisible);
          }}>
          <View style={styles.view_1_modal_home}>
            <View style={styles.view_2_modal_home}>
              <AntDesign
                name="close"
                size={wp(4)}
                color={white_color}
                onPress={() => this.setModalVisible(!modalVisible)}
                style={{
                  alignSelf: 'flex-end',
                  marginHorizontal: wp(6),
                }}
              />
              <View style={styles.view_3_modal_home}>
                <TouchableOpacity
                  activeOpacity={0.9}
                  onPress={async () => {
                    const options = {
                      mediaType: 'photo',
                      includeBase64: true,
                    };
                    const response = await launchImageLibrary(options);
                    if (response?.assets?.length > 0) {
                      const formData = new FormData();
                      formData.append(
                        'image',
                        {
                          name: response.assets[0].fileName,
                          type: response.assets[0].type,
                          uri: response.assets[0].uri,
                        },
                        this.setState(
                          {
                            base64: response.assets[0].base64,
                            fileName: response.assets[0].fileName,
                            uri: response.assets[0].uri,
                          },
                          () =>
                            console.log(
                              'base64 fileName ',
                              this.state.fileName,
                            ),
                        ),
                        this.setState({image: this.state.uri}),
                        this.setModalVisible(!modalVisible),
                      );
                    }
                  }}>
                  <View style={{alignItems: 'center'}}>
                    <AntDesign
                      name="picture"
                      size={wp(10)}
                      color={white_color}
                    />
                    <Text style={styles.Bold_12pt_white}>{L.gallery}</Text>
                  </View>
                </TouchableOpacity>

                <TouchableOpacity
                  activeOpacity={0.9}
                  onPress={async () => {
                    const options = {
                      mediaType: 'photo',
                      includeBase64: true,
                    };
                    const response = await launchCamera(options);
                    if (response?.assets?.length > 0) {
                      const formData = new FormData();
                      formData.append(
                        'image',
                        {
                          name: response.assets[0].fileName,
                          type: response.assets[0].type,
                          uri: response.assets[0].uri,
                        },
                        this.setState(
                          {
                            base64: response.assets[0].base64,
                            fileName: response.assets[0].fileName,
                            uri: response.assets[0].uri,
                          },
                          () => console.log('base64 fileName ', this.state.uri),
                        ),
                        this.setState({image: this.state.uri}),
                        this.setModalVisible(!modalVisible),
                      );
                    }
                  }}>
                  <View style={{alignItems: 'center'}}>
                    <AntDesign
                      name="camerao"
                      size={wp(10)}
                      color={white_color}
                    />
                    <Text style={styles.Bold_12pt_white}>{L.camera}</Text>
                  </View>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </Modal>
      </View>
    );
  }
}

export default EditProfile;
