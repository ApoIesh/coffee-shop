import React from 'react';
import {
  Text,
  StyleSheet,
  View,
  TextInput,
  LayoutAnimation,
  Platform,
  UIManager,
} from 'react-native';
import {
  border_Color,
  wp,
  bluesky_color,
  text_color,
  placeholder_color,
  fontBold,
  hp,
  fontLight,
  black_color,
  fontmedum,
  fontRegular,
  gray_color,
  white_color,
} from '../style/styles';

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

const Input = ({
  placeholder,
  value,
  onChangeText,
  returnKeyType,
  secureTextEntry,
  keyboardType,
  maxLength,
  editable,
  right,
  left,
  placeholderTextColor,
  multiline,
  numberOfLines,
  width,
  marginBottom,
  height,
  borderRadius,
  head_text,
  backgroundColor,
  borderWidth,
  color,
  borderColor,
  paddingHorizontal,
  paddingVertical,
  flexDirection,
  alignSelf,
  alignItems,
  justifyContent,
  borderBottomWidth,
}) => {
  const [isFocused, setFocused] = React.useState(false);

  return (
    <View style={{

    }}>
      <View
        style={{
          direction: 'rtl',
          flexDirection: flexDirection ? flexDirection : 'row',
          alignSelf: alignSelf ? alignSelf : 'flex-start',
          alignItems: alignItems ? alignItems : 'center',
          justifyContent: justifyContent ? justifyContent : 'space-between',
          borderColor: borderColor ? borderColor : border_Color,
          borderWidth: borderWidth ? borderWidth : 0,

          borderRadius: borderRadius ? borderRadius : wp(10),
          backgroundColor: backgroundColor ? backgroundColor : white_color,
          marginBottom: marginBottom ? marginBottom : hp(2),
          paddingHorizontal: paddingHorizontal ? paddingHorizontal : wp(6),
          paddingVertical: paddingVertical ? paddingVertical : wp(1),
          height: height ? height : hp(6.5),
        }}>
        {left ? left : <View />}

        <TextInput
          multiline={multiline}
          numberOfLines={numberOfLines}
          editable={editable}
          onBlur={() => {
            LayoutAnimation.configureNext(LayoutAnimation.Presets.linear),
              setFocused(false);
          }}
          onFocus={() => {
            LayoutAnimation.configureNext(LayoutAnimation.Presets.linear),
              setFocused(true);
          }}
          placeholder={isFocused == false ? placeholder : null}
          secureTextEntry={secureTextEntry}
          maxLength={maxLength}
          returnKeyType={returnKeyType}
          keyboardType={keyboardType}
          style={{
            flex: 1,
            // alignSelf: 'flex-start',
            // width: width ? width : wp(70),
            color: color ? color : text_color,
            fontFamily: fontRegular,
            fontSize: wp(3.5),
            borderBottomWidth: borderBottomWidth ? borderBottomWidth : 0,
            direction: 'rtl',

            // borderWidth: 1,
          }}
          onChangeText={onChangeText}
          value={value}
          selectionColor={bluesky_color}
          placeholderTextColor={
            placeholderTextColor ? placeholderTextColor : placeholder_color
          }
        />

        {right ? right : <View />}
      </View>

      {head_text ? (
        isFocused == true || value ? (
          <View
            style={{
              position: 'absolute',
              marginStart: wp(6.5),
              marginTop: hp(0.4),
            }}>
            <Text
              style={{
                fontFamily: fontLight,
                color: gray_color,
                fontSize: wp(2.5),
              }}>
              {head_text}
            </Text>
          </View>
        ) : null
      ) : null}
    </View>
  );
};

export {Input};
