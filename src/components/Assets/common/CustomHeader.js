import React, {Component} from 'react';
import {View, Text} from 'react-native';
import styles, {
  black_color,
  fontBold,
  fontmedum,
  fontRegular,
  hp,
  white_color,
  wp,
} from '../style/styles';

const CustomHeader = ({
  width,
  height,
  left,
  right,
  screen_name,
  color,
  backgroundColor,
}) => {
  return (
    <View style={{}}>
      <View
        style={{
          width: width ? width : wp(100),
          height: height ? height : hp(10),
          // marginVertical:hp(2),
          alignItems: 'center',
          flexDirection: 'row',
          alignSelf: 'center',
          justifyContent: 'space-between',
          paddingHorizontal: wp(3),
          position: 'relative',
          backgroundColor: backgroundColor ? backgroundColor : black_color,
        }}>
        {left ? (
          left
        ) : (
          <View
            style={{
              width: wp(20),
              height: hp(10),
              alignItems: 'center',
              justifyContent: 'center',
            }}
          />
        )}

        {right ? (
          right
        ) : (
          <View
            style={{
              width: wp(20),
              height: hp(10),
              alignItems: 'center',
              justifyContent: 'center',
            }}
          />
        )}
      </View>
      <View
        style={{
          width: wp(100),
          height: hp(13),
          // marginVertical:hp(2),
          alignItems: 'center',
          alignContent: 'center',
          justifyContent: 'center',
          position: 'absolute',
        }}>
        {screen_name ? (
          <Text
            style={{
              fontSize: wp(5),
              fontFamily: fontmedum,
              color: color ? color : white_color,
            }}>
            {screen_name}
          </Text>
        ) : null}
      </View>
    </View>
  );
};

export {CustomHeader};
