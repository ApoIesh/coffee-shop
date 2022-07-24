import React, {useState} from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
  Modal,
  Image,
  ImageBackground,
} from 'react-native';
import {colorSchemeText, colorSchemeView} from '../../../App';
import {L} from '../../../config';
import textsStyles, {
  black_color,
  border_Color,
  hp,
  white_color,
  wp,
} from '../style/styles';
import Icon from './Icon';

const Main_Picker = ({
  props,
  onPress,
  placeholder,
  borderBottomWidth,
  borderColor,
}) => {
  // console.log(props);
  const [data, setData] = useState(`${placeholder}`);

  const [isModalVisible, setisModalVisible] = useState(false);

  const selectData = data.length >= 10 ? data?.slice('', 10) + '...' : data;

  const changeModalVisible = bool => {
    setisModalVisible(bool);
  };

  const onPressItem = res => {
    setisModalVisible(false);
    setData(res);
  };

  const sorted = props?.sort(function (a, b) {
    if (a.name > b.name) return 1;
    if (a.name < b.name) return -1;
    return 0;
  });

  const option = sorted?.map((item, index) => {
    return (
      <TouchableOpacity
        key={index}
        onPress={() => onPressItem(item.currency)}
        style={{height: wp(10), width: wp(100)}}>
        <Text
          style={{
            fontSize: wp(4.1),
            color: white_color,
            textAlign: 'center',
          }}>
          {item.name}
        </Text>
      </TouchableOpacity>
    );
  });

  return (
    <SafeAreaView style={{marginHorizontal: wp(2)}}>
      <TouchableOpacity onPress={() => changeModalVisible(onPress)}>
        <View
          style={{
            borderBottomWidth: borderBottomWidth ? borderBottomWidth : 0,
            borderColor: borderColor ? borderColor : border_Color,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}>
          <Text style={textsStyles.Bold_12pt_gray}>{selectData}</Text>

          <Icon
            type={'AntDesign'}
            name={isModalVisible == false ? 'caretup' : 'caretdown'}
            color={white_color}
            style={{marginStart: wp(3)}}
          />
        </View>
      </TouchableOpacity>

      <Modal
        animationType="slide"
        transparent={true}
        visible={isModalVisible}
        onRequestClose={() => {
          changeModalVisible(false);
        }}>
        <View style={{justifyContent: 'flex-end', flex: 1}}>
          <View
            style={{
              position: 'absolute',
              width: wp(100),
              height: hp(20),
              alignSelf: 'center',
              backgroundColor: black_color,
              borderTopStartRadius: hp(2.5),
              borderTopEndRadius: hp(2.5),
            }}>
            <TouchableOpacity
              onPress={() => changeModalVisible(false)}
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
                marginHorizontal: wp(5),
                marginTop: wp(2.5),
              }}>
              <View />
              <Text style={{color: white_color, alignSelf: 'flex-end'}}>
                {L.close}
              </Text>
            </TouchableOpacity>
            <ScrollView
              showsVerticalScrollIndicator={false}
              style={{alignSelf: 'center'}}>
              {props ? (
                option
              ) : (
                <Text style={{color: white_color, alignSelf: 'center'}}>
                  check props
                </Text>
              )}
            </ScrollView>
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
};

export {Main_Picker};
