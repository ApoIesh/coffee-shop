import React from 'react';
import {Text, StyleSheet, View, TextInput} from 'react-native';
import {
  border_Color,
  wp,
  bluesky_color,
  text_color,
  placeholder_color,
  fontBold,
  hp,
} from '../style/styles';

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
  onBlur,
  onFocus,
  marginBottom,
  height,
}) => {
  return (
    <View
      style={{
        borderBottomWidth: wp(0.5),
        borderColor: border_Color,
        marginBottom: marginBottom ? marginBottom : 0,
        height: height ? height : hp(7.4),
      }}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
        {right && right}
        <TextInput
          multiline={multiline}
          numberOfLines={numberOfLines}
          editable={editable}
          onBlur={onBlur}
          onFocus={onFocus}
          placeholder={placeholder}
          secureTextEntry={secureTextEntry}
          maxLength={maxLength}
          returnKeyType={returnKeyType}
          keyboardType={keyboardType}
          style={styles.inputStyle}
          onChangeText={onChangeText}
          value={value}
          selectionColor={bluesky_color}
          placeholderTextColor={
            placeholderTextColor ? placeholderTextColor : placeholder_color
          }
          place
        />
        {left && left}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  inputStyle: {
    flex: 1,
    alignSelf: 'flex-start',
    alignItems: 'flex-start',
    alignContent: 'flex-start',
    direction: 'inherit',
    justifyContent:'flex-start',
    color: text_color,
    fontFamily: fontBold,
    fontSize: wp(3.2),
    
  },
});
export {Input};
