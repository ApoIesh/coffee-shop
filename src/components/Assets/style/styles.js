'use strict';
import {StyleSheet} from 'react-native';
import {
  widthPercentageToDP,
  heightPercentageToDP,
} from 'react-native-responsive-screen';

export const wp = widthPercentageToDP;
export const hp = heightPercentageToDP;

// fonts
export const fontAltThin = 'Proxima Nova Alt Thin';
export const fontLight = 'Proxima Nova Alt Light';
export const fontRegular = 'ProximaNova-Regular';
export const fontAltBold = 'Proxima Nova Alt Bold';
export const fontBold = 'Proxima Nova Bold';
export const fontExtrabold = 'Proxima Nova Extrabold';

export const fontmedum = 'Proxima Nova Thin';
//COLORS
export const black_color = '#000';
export const white_color = '#fff';
export const gray_color = '#8b8989';
export const light_gray_color = '#cccc';

export const Primary_color = '#161616';
export const Secondary_color = '#1f1f1f';
export const icons_bg_color = '#353434';

export const contentColor = '#8b8989';
export const border_Color = '#e8e8e8';
export const textInputColor = '#000';
export const vectorIconColor = '#b8b8d2';

export const button_color = '#161616';
export const text_color = '#000';
export const placeholder_color = '#8b8989';

//TEXT COLOR
export const text_white_color = '#fff';
export const text_black_color = '#000';
export const text_gray_color = '#a8a7a7';

const styles = StyleSheet.create({
  //TEXT STYLES

  //40sp=10.2 wp
  //26sp=6.5 wp
  //20sp=5.1 wp
  //18sp=4.6 wp
  //16sp=4.1 wp
  //14sp=3.6 wp
  //12sp=3.1 wp

  custom_light_white: {
    color: text_white_color,
    fontWeight: '100',
    fontSize: wp(9),
  },
  custom_bold_white: {
    color: white_color,
    fontWeight: 'bold',
    fontSize: wp(8),
  },
  custom_light_white_2: {
    color: white_color,
    fontSize: wp(6),
    fontWeight: '100',
    marginBottom: wp(1.5),
  },
  custom_bold_white_2: {
    color: white_color,
    fontWeight: 'bold',
    fontSize: wp(6),
  },

  AltThin_12pt_white: {
    fontFamily: fontAltThin,
    color: text_white_color,
    fontSize: wp(3.1),
  },
  AltThin_14pt_white: {
    fontFamily: fontAltThin,
    color: text_white_color,
    fontSize: wp(3.6),
  },
  AltThin_16pt_white: {
    fontFamily: fontAltThin,
    color: text_white_color,
    fontSize: wp(4.1),
  },
  AltThin_18pt_white: {
    fontFamily: fontAltThin,
    color: text_white_color,
    fontSize: wp(4.6),
  },
  AltThin_20pt_white: {
    fontFamily: fontAltThin,
    color: text_white_color,
    fontSize: wp(5.1),
  },
  AltThin_12pt_black: {
    fontFamily: fontAltThin,
    color: text_black_color,
    fontSize: wp(3.1),
  },
  AltThin_14pt_black: {
    fontFamily: fontAltThin,
    color: text_black_color,
    fontSize: wp(3.6),
  },
  AltThin_16pt_black: {
    fontFamily: fontAltThin,
    color: text_black_color,
    fontSize: wp(4.1),
  },
  AltThin_18pt_black: {
    fontFamily: fontAltThin,
    color: text_black_color,
    fontSize: wp(4.6),
  },
  AltThin_20pt_black: {
    fontFamily: fontAltThin,
    color: text_black_color,
    fontSize: wp(5.1),
  },
  AltThin_12pt_gray: {
    fontFamily: fontAltThin,
    color: text_gray_color,
    fontSize: wp(3.1),
  },
  AltThin_14pt_gray: {
    fontFamily: fontAltThin,
    color: text_gray_color,
    fontSize: wp(3.6),
  },
  AltThin_16pt_gray: {
    fontFamily: fontAltThin,
    color: text_gray_color,
    fontSize: wp(4.1),
  },
  AltThin_18pt_gray: {
    fontFamily: fontAltThin,
    color: text_gray_color,
    fontSize: wp(4.6),
  },
  AltThin_20pt_gray: {
    fontFamily: fontAltThin,
    color: text_gray_color,
    fontSize: wp(5.1),
  },

  Light_12pt_white: {
    fontFamily: fontLight,
    color: text_white_color,
    fontSize: wp(3.1),
  },
  Light_14pt_white: {
    fontFamily: fontLight,
    color: text_white_color,
    fontSize: wp(3.6),
  },
  Light_16pt_white: {
    fontFamily: fontLight,
    color: text_white_color,
    fontSize: wp(4.1),
  },
  Light_18pt_white: {
    fontFamily: fontLight,
    color: text_white_color,
    fontSize: wp(4.6),
  },
  Light_20pt_white: {
    fontFamily: fontLight,
    color: text_white_color,
    fontSize: wp(5.1),
  },
  Light_12pt_black: {
    fontFamily: fontLight,
    color: text_black_color,
    fontSize: wp(3.1),
  },
  Light_14pt_black: {
    fontFamily: fontLight,
    color: text_black_color,
    fontSize: wp(3.6),
  },
  Light_16pt_black: {
    fontFamily: fontLight,
    color: text_black_color,
    fontSize: wp(4.1),
  },
  Light_18pt_black: {
    fontFamily: fontLight,
    color: text_black_color,
    fontSize: wp(4.6),
  },
  Light_20pt_black: {
    fontFamily: fontLight,
    color: text_black_color,
    fontSize: wp(5.1),
  },
  Light_12pt_gray: {
    fontFamily: fontLight,
    color: text_gray_color,
    fontSize: wp(3.1),
  },
  Light_14pt_gray: {
    fontFamily: fontLight,
    color: text_gray_color,
    fontSize: wp(3.6),
  },
  Light_16pt_gray: {
    fontFamily: fontLight,
    color: text_gray_color,
    fontSize: wp(4.1),
  },
  Light_18pt_gray: {
    fontFamily: fontLight,
    color: text_gray_color,
    fontSize: wp(4.6),
  },
  Light_20pt_gray: {
    fontFamily: fontLight,
    color: text_gray_color,
    fontSize: wp(5.1),
  },
  Regular_10pt_white: {
    fontFamily: fontRegular,
    color: text_white_color,
    fontSize: wp(2.5),
  },
  Regular_12pt_white: {
    fontFamily: fontRegular,
    color: text_white_color,
    fontSize: wp(3.1),
  },
  Regular_14pt_white: {
    fontFamily: fontRegular,
    color: text_white_color,
    fontSize: wp(3.6),
  },
  Regular_16pt_white: {
    fontFamily: fontRegular,
    color: text_white_color,
    fontSize: wp(4.1),
  },
  Regular_18pt_white: {
    fontFamily: fontRegular,
    color: text_white_color,
    fontSize: wp(4.6),
  },
  Regular_20pt_white: {
    fontFamily: fontRegular,
    color: text_white_color,
    fontSize: wp(5.1),
  },
  Regular_12pt_black: {
    fontFamily: fontRegular,
    color: text_black_color,
    fontSize: wp(3.1),
  },
  Regular_14pt_black: {
    fontFamily: fontRegular,
    color: text_black_color,
    fontSize: wp(3.6),
  },
  Regular_16pt_black: {
    fontFamily: fontRegular,
    color: text_black_color,
    fontSize: wp(4.1),
  },
  Regular_18pt_black: {
    fontFamily: fontRegular,
    color: text_black_color,
    fontSize: wp(4.6),
  },
  Regular_20pt_black: {
    fontFamily: fontRegular,
    color: text_black_color,
    fontSize: wp(5.1),
  },
  Regular_12pt_gray: {
    fontFamily: fontRegular,
    color: text_gray_color,
    fontSize: wp(3.1),
  },
  Regular_14pt_gray: {
    fontFamily: fontRegular,
    color: text_gray_color,
    fontSize: wp(3.6),
  },
  Regular_16pt_gray: {
    fontFamily: fontRegular,
    color: text_gray_color,
    fontSize: wp(4.1),
  },
  Regular_18pt_gray: {
    fontFamily: fontRegular,
    color: text_gray_color,
    fontSize: wp(4.6),
  },
  Regular_20pt_gray: {
    fontFamily: fontRegular,
    color: text_gray_color,
    fontSize: wp(5.1),
  },
  AltBold_10pt_white: {
    fontFamily: fontAltBold,
    color: text_white_color,
    fontSize: wp(2.5),
  },

  AltBold_10pt_black: {
    fontFamily: fontAltBold,
    color: text_black_color,
    fontSize: wp(2.5),
  },
  AltBold_10pt_gray: {
    fontFamily: fontAltBold,
    color: text_gray_color,
    fontSize: wp(2.5),
  },
  AltBold_12pt_white: {
    fontFamily: fontAltBold,
    color: text_white_color,
    fontSize: wp(3.1),
  },
  AltBold_14pt_white: {
    fontFamily: fontAltBold,
    color: text_white_color,
    fontSize: wp(3.6),
  },
  AltBold_16pt_white: {
    fontFamily: fontAltBold,
    color: text_white_color,
    fontSize: wp(4.1),
  },
  AltBold_18pt_white: {
    fontFamily: fontAltBold,
    color: text_white_color,
    fontSize: wp(4.6),
  },
  AltBold_20pt_white: {
    fontFamily: fontAltBold,
    color: text_white_color,
    fontSize: wp(5.1),
  },
  AltBold_12pt_black: {
    fontFamily: fontAltBold,
    color: text_black_color,
    fontSize: wp(3.1),
  },
  AltBold_14pt_black: {
    fontFamily: fontAltBold,
    color: text_black_color,
    fontSize: wp(3.6),
  },
  AltBold_16pt_black: {
    fontFamily: fontAltBold,
    color: text_black_color,
    fontSize: wp(4.1),
  },
  AltBold_18pt_black: {
    fontFamily: fontAltBold,
    color: text_black_color,
    fontSize: wp(4.6),
  },
  AltBold_20pt_black: {
    fontFamily: fontAltBold,
    color: text_black_color,
    fontSize: wp(5.1),
  },
  AltBold_12pt_gray: {
    fontFamily: fontAltBold,
    color: text_gray_color,
    fontSize: wp(3.1),
  },
  AltBold_14pt_gray: {
    fontFamily: fontAltBold,
    color: text_gray_color,
    fontSize: wp(3.6),
  },
  AltBold_16pt_gray: {
    fontFamily: fontAltBold,
    color: text_gray_color,
    fontSize: wp(4.1),
  },
  AltBold_18pt_gray: {
    fontFamily: fontAltBold,
    color: text_gray_color,
    fontSize: wp(4.6),
  },
  AltBold_20pt_gray: {
    fontFamily: fontAltBold,
    color: text_gray_color,
    fontSize: wp(5.1),
  },
  Bold_12pt_white: {
    fontFamily: fontBold,
    color: text_white_color,
    fontSize: wp(3.1),
  },
  Bold_14pt_white: {
    fontFamily: fontBold,
    color: text_white_color,
    fontSize: wp(3.6),
  },
  Bold_16pt_white: {
    fontFamily: fontBold,
    color: text_white_color,
    fontSize: wp(4.1),
  },
  Bold_18pt_white: {
    fontFamily: fontBold,
    color: text_white_color,
    fontSize: wp(4.6),
  },
  Bold_20pt_white: {
    fontFamily: fontBold,
    color: text_white_color,
    fontSize: wp(5.1),
  },
  Bold_25pt_white: {
    fontFamily: fontBold,
    color: text_white_color,
    fontSize: wp(6.5),
  },
  Bold_12pt_black: {
    fontFamily: fontBold,
    color: text_black_color,
    fontSize: wp(3.1),
  },
  Bold_14pt_black: {
    fontFamily: fontBold,
    color: text_black_color,
    fontSize: wp(3.6),
  },
  Bold_16pt_black: {
    fontFamily: fontBold,
    color: text_black_color,
    fontSize: wp(4.1),
  },
  Bold_18pt_black: {
    fontFamily: fontBold,
    color: text_black_color,
    fontSize: wp(4.6),
  },
  Bold_20pt_black: {
    fontFamily: fontBold,
    color: text_black_color,
    fontSize: wp(5.1),
  },
  Bold_12pt_gray: {
    fontFamily: fontBold,
    color: text_gray_color,
    fontSize: wp(3.1),
  },
  Bold_14pt_gray: {
    fontFamily: fontBold,
    color: text_gray_color,
    fontSize: wp(3.6),
  },
  Bold_16pt_gray: {
    fontFamily: fontBold,
    color: text_gray_color,
    fontSize: wp(4.1),
  },
  Bold_18pt_gray: {
    fontFamily: fontBold,
    color: text_gray_color,
    fontSize: wp(4.6),
  },
  Bold_20pt_gray: {
    fontFamily: fontBold,
    color: text_gray_color,
    fontSize: wp(5.1),
  },
  Extrabold_12pt_white: {
    fontFamily: fontExtrabold,
    color: text_white_color,
    fontSize: wp(3.1),
  },
  Extrabold_14pt_white: {
    fontFamily: fontExtrabold,
    color: text_white_color,
    fontSize: wp(3.6),
  },
  Extrabold_16pt_white: {
    fontFamily: fontExtrabold,
    color: text_white_color,
    fontSize: wp(4.1),
  },
  Extrabold_18pt_white: {
    fontFamily: fontExtrabold,
    color: text_white_color,
    fontSize: wp(4.6),
  },
  Extrabold_20pt_white: {
    fontFamily: fontExtrabold,
    color: text_white_color,
    fontSize: wp(5.1),
  },
  Extrabold_12pt_black: {
    fontFamily: fontExtrabold,
    color: text_black_color,
    fontSize: wp(3.1),
  },
  Extrabold_14pt_black: {
    fontFamily: fontExtrabold,
    color: text_black_color,
    fontSize: wp(3.6),
  },
  Extrabold_16pt_black: {
    fontFamily: fontExtrabold,
    color: text_black_color,
    fontSize: wp(4.1),
  },
  Extrabold_18pt_black: {
    fontFamily: fontExtrabold,
    color: text_black_color,
    fontSize: wp(4.6),
  },
  Extrabold_20pt_black: {
    fontFamily: fontExtrabold,
    color: text_black_color,
    fontSize: wp(5.1),
  },
  Extrabold_12pt_gray: {
    fontFamily: fontExtrabold,
    color: text_gray_color,
    fontSize: wp(3.1),
  },
  Extrabold_14pt_gray: {
    fontFamily: fontExtrabold,
    color: text_gray_color,
    fontSize: wp(3.6),
  },
  Extrabold_16pt_gray: {
    fontFamily: fontExtrabold,
    color: text_gray_color,
    fontSize: wp(4.1),
  },
  Extrabold_18pt_gray: {
    fontFamily: fontExtrabold,
    color: text_gray_color,
    fontSize: wp(4.6),
  },
  Extrabold_20pt_gray: {
    fontFamily: fontExtrabold,
    color: text_gray_color,
    fontSize: wp(5.1),
  },

  sec_log_text: {
    fontFamily: fontBold,
    fontSize: wp(5),
    color: black_color,
  },

  //VIEW STYLES

  view_88: {
    width: wp(80),
    alignSelf: 'center',
    marginTop: hp(6.2),
  },
  view_92: {
    width: wp(92),
    alignSelf: 'center',
  },
  view_96: {
    width: wp(96),
    alignSelf: 'center',
  },
  line: {
    borderWidth: wp(0.1),
    borderColor: light_gray_color,
  },

  ///////////  App

  //FIRST STYLES

  container_black: {
    flex: 1,
    backgroundColor: black_color,
  },
  container_Primary: {
    flex: 1,
    backgroundColor: Primary_color,
  },
  container_white: {
    flex: 1,
    backgroundColor: white_color,
  },
  white_view_style: {
    backgroundColor: white_color,
    width: wp(92),
    alignSelf: 'center',
    borderRadius: wp(2),
  },
  sec_info: {
    width: wp(70),
    marginTop: hp(1.1),
    marginBottom: hp(3.6),
  },
  sec_info_1: {
    // width: wp(65),
    marginTop: hp(1.5),
    marginBottom: hp(3.9),
  },
  logo_text: {alignItems: 'center', marginTop: hp(4.5), marginBottom: hp(4)},
  if_you_have: {
    flexDirection: 'row',
    alignSelf: 'center',
    marginTop: hp(5),
  },
  image_bg: {width: wp(100), height: hp(100), position: 'absolute'},

  //LaunchScreen

  image_launch: {
    flex: 1,
    width: wp(100),
    height: hp(100),
  },

  //intro

  carousel_intro_view_1: {
    alignItems: 'center',
    alignSelf: 'center',
    width: wp(92),
  },
  pagination_view: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    width: wp(20),
  },
  pagination_image: {
    width: wp(5),
    height: wp(5),
  },
  image_intro_logo: {
    width: wp(33.6),
    alignSelf: 'center',
    height: wp(33.6),
    resizeMode: 'contain',
    marginTop: hp(-5),
  },
  image_intro_item: {
    height: wp(50),
    resizeMode: 'contain',
    marginTop: hp(3.5),
  },
  image_bg_intro: {
    width: wp(100),
    height: hp(100),
    position: 'absolute',
    backgroundColor: Primary_color,
  },
  button_intro_view_1: {
    marginVertical: wp(5),
  },
  button_intro_view_skip: {
    height: hp(4),
    alignSelf: 'flex-end',
    marginTop: hp(2),
  },
  button_intro_view_skipTop: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'flex-end',
    marginEnd: wp(4),
  },
  button_intro_view_skipButtom: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'flex-start',
  },
  button_intro_view_2: {
    alignSelf: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    alignContent: 'center',
    justifyContent: 'space-between',
    width: wp(92),
  },
  button_intro_view_4: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  button_intro_view_5: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  //REGISTER

  register_text: {
    alignItems: 'center',
    marginVertical: hp(17.5),
  },

  //SIGNUP

  agree_signUp_view_1: {
    flexDirection: 'row',
    width: wp(70),
    marginVertical: hp(1),
    flexWrap: 'wrap',
    alignItems: 'center',
  },
  agree_signUp_view_2: {
    width: wp(5.5),
    height: wp(5),
    borderWidth: wp(0.3),
    borderColor: border_Color,
    alignItems: 'center',
    justifyContent: 'center',
    marginEnd: wp(3),
  },

  //SIGN IN

  sec_agree_signIn: {
    flexDirection: 'row',
    marginVertical: hp(1),
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  sec_agree_signIn_1: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  sec_agree_signIn_2: {
    width: wp(5.5),
    height: wp(5),
    borderWidth: wp(0.3),
    borderColor: border_Color,
    alignItems: 'center',
    justifyContent: 'center',
    marginEnd: wp(3),
  },

  //VERIFYCODE

  code_view: {marginBottom: hp(2.5)},
  ressend_code: {
    alignSelf: 'center',
    marginVertical: hp(3),
    borderBottomWidth: wp(0.3),
  },

  //HOME

  notification_view: {
    width: wp(4.5),
    height: wp(4.5),
    borderWidth: wp(0.2),
    borderRadius: wp(5 / 2),
    borderColor: border_Color,
    alignItems: 'center',
    marginTop: wp(-3),
    // marginStart: wp(-1),
    justifyContent: 'center',
  },
  categories_select_view: {
    marginBottom: hp(3),
    marginTop: hp(1.5),
    marginStart: wp(6),
    flexDirection: 'row',
  },
  categories_select: {
    height: hp(4),
    borderRadius: wp(5),
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: wp(5.5),
    marginStart: wp(-2),
  },
  titel_categorie: {
    flexDirection: 'row',
    marginTop: hp(4.5),
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  //FlatList categories

  image_categorie_flat_home: {
    width: wp(95),
    height: hp(25),
    resizeMode: 'cover',
    alignSelf: 'center',
    borderWidth: wp(0.2),
    borderColor: white_color,
    borderRadius: wp(5),
  },
  white_view_flat_home: {
    backgroundColor: white_color,
    borderRadius: wp(5),
    width: wp(80),
    alignSelf: 'center',
    marginTop: hp(-6.5),
  },
  white_view_flat_home_1: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  des_white_view_flat_home: {
    paddingStart: wp(5),
    marginTop: hp(1.5),
    width: wp(60),
    alignItems: 'flex-start',
  },
  des_flat_home: {lineHeight: wp(4.5), marginTop: wp(1)},
  black_view_icon_flat_home: {
    backgroundColor: Primary_color,
    height: hp(14.2),
    paddingHorizontal: wp(3.2),
    paddingVertical: hp(1.5),
    alignSelf: 'center',
    borderWidth: wp(0.5),
    borderColor: white_color,
    borderRadius: wp(5),
    borderTopStartRadius: wp(0),
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  black_image_icon_flat_home: {
    width: wp(13),
    height: hp(12.7),
    position: 'absolute',
  },
  black_line_icon_flat_home: {
    borderWidth: wp(0.1),
    borderColor: light_gray_color,
    width: wp(8),
  },
  black_view_value_flat_home: {
    backgroundColor: Primary_color,
    width: wp(20),
    height: hp(4),
    borderRadius: wp(5),
    borderColor: white_color,
    borderWidth: wp(0.5),
    borderTopStartRadius: wp(0),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
  },
  black_image_value_flat_home: {
    width: wp(18),
    height: hp(3.5),
    position: 'absolute',
  },

  //COFFEE

  view_1_flat_coffee: {
    marginTop: hp(5),
    width: wp(92),
    alignSelf: 'center',
  },
  view_2_flat_coffee: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  image_flat_coffee: {
    resizeMode: 'cover',
    width: wp(30),
    height: wp(35),
    borderRadius: wp(5),
    borderWidth: wp(0.4),
    borderColor: white_color,
  },

  black_view_value_flat_coffee: {
    backgroundColor: Primary_color,
    width: wp(17.85),
    height: wp(7.5),
    borderRadius: wp(5),
    borderColor: white_color,
    borderWidth: wp(0.4),
    borderTopStartRadius: wp(0),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
  },
  black_image_value_flat_coffe: {
    width: wp(17),
    height: wp(6.5),
    position: 'absolute',
  },
  des_flat_coffee: {
    width: wp(56),
    flex: 1,
    justifyContent: 'space-between',
    paddingVertical: hp(0.7),
  },
  icon_view_flat_coffe: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  icon_image_flat_coffe: {
    width: wp(4.4),
    height: wp(5),
    resizeMode: 'contain',
    // marginEnd: wp(2),
  },
  addCort_view_flat_coffee: {
    borderWidth: wp(0.2),
    borderRadius: wp(7),
    borderColor: white_color,
    paddingHorizontal: wp(8.5),
    paddingVertical: hp(1.25),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  love_icon_view_flat_coffee: {
    borderWidth: wp(0.2),
    borderColor: white_color,
    borderRadius: hp(10),
    paddingHorizontal: hp(1.25),
    paddingVertical: hp(1.25),
    alignItems: 'center',
    justifyContent: 'center',
  },
  line_end_flat_coffee: {
    borderWidth: wp(0.1),
    borderColor: '#424242',
    marginTop: hp(5),
  },

  //STORE

  view_1_flat_store: {
    marginTop: hp(4.2),
    width: wp(92),
    alignSelf: 'center',
  },
  view_2_flat_store: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  image_flat_store: {
    resizeMode: 'cover',
    width: wp(30),
    height: wp(35),
    borderRadius: wp(5),
    borderWidth: wp(0.4),
    borderColor: white_color,
  },
  black_view_value_flat_store: {
    backgroundColor: Primary_color,
    width: wp(17.85),
    height: wp(7.5),
    borderRadius: wp(5),
    borderColor: white_color,
    borderWidth: wp(0.4),
    borderTopStartRadius: wp(0),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
  },
  black_image_value_flat_store: {
    width: wp(17),
    height: wp(6.5),
    position: 'absolute',
  },
  des_flat_store: {
    width: wp(56),
    flex: 1,
    justifyContent: 'space-between',
    paddingVertical: hp(0.5),
  },
  icon_view_flat_store: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  addCort_view_flat_store: {
    borderWidth: wp(0.2),
    borderRadius: wp(6),
    borderColor: white_color,
    paddingHorizontal: wp(8.5),
    paddingVertical: hp(1.3),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  love_icon_view_flat_store: {
    borderWidth: wp(0.2),
    borderColor: white_color,
    borderRadius: hp(10),
    paddingHorizontal: hp(1.25),
    paddingVertical: hp(1.25),
    alignItems: 'center',
    justifyContent: 'center',
  },
  line_end_flat_store: {
    borderWidth: wp(0.1),
    borderColor: '#424242',
    marginTop: hp(5.2),
  },

  //PROFILE

  sec_image: {
    alignSelf: 'center',
    justifyContent: 'flex-end',
    margin: wp(2),
    borderRadius: wp(29.6 / 2),
    width: wp(29.6),
    height: wp(29.6),
  },
  image_register: {
    resizeMode: 'cover',
    width: wp(29.6),
    height: wp(29.6),
    borderRadius: wp(29.6 / 2),
  },
  sec_edit_profile: {
    flexDirection: 'row',
    width: wp(13),
    alignSelf: 'flex-start',
    position: 'absolute',
    alignItems: 'center',
    marginTop: hp(1),
  },
  line_profile: {
    borderWidth: wp(0.1),
    borderColor: '#424242',
    marginTop: hp(4),
    marginBottom: hp(3),
  },
  sec_point_view: {
    borderWidth: wp(0.4),
    borderColor: gray_color,
    borderStyle: 'dashed',
    alignItems: 'center',
    paddingVertical: hp(2.5),
    borderRadius: wp(5.4),
  },
  view_sec_details: {
    backgroundColor: Secondary_color,
    paddingVertical: hp(2.5),
    paddingStart: wp(6),
    paddingEnd: wp(6),
    borderRadius: wp(10),
    marginBottom: hp(2.5),
  },

  //EDIT PROFILE

  done: {
    flexDirection: 'row',
    width: wp(13.5),
    alignSelf: 'flex-start',
    position: 'absolute',
    alignItems: 'flex-start',
    marginTop: hp(0.7),
  },

  //modal

  view_1_modal_home: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  view_2_modal_home: {
    width: wp(90),
    height: hp(15),
    backgroundColor: Primary_color,
    borderTopEndRadius: wp(10),
    borderTopStartRadius: wp(10),
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#fff',
  },
  view_3_modal_home: {
    flexDirection: 'row',
    width: wp(40),
    justifyContent: 'space-between',
  },

  //MORE MENU

  sec_icons_menu: {
    alignSelf: 'flex-start',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    marginVertical: hp(1.7),
  },
  view_icon_menu: {
    width: wp(14),
    height: wp(14),
    backgroundColor: icons_bg_color,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: wp(15 / 2),
    marginEnd: wp(4),
    // marginStart: wp(-5),
  },
  image_icon_menu: {
    resizeMode: 'contain',
    width: wp(6),
    height: wp(6.5),
    tintColor: white_color,
  },

  //Notifications

  image_view_render_notifications: {
    borderWidth: wp(0.25),
    borderColor: gray_color,
    borderRadius: wp(4),
    width: wp(18),
    height: wp(20.5),
    alignItems: 'center',
    justifyContent: 'center',
  },
  image_render_notifications: {
    width: wp(18),
    height: wp(20.5),
    resizeMode: 'cover',
    borderRadius: wp(4),
  },
  sec_details_notifications: {
    width: wp(70),
    marginStart: wp(4),
  },

  //ITEM DETAILS
  itemImageView: {
    marginTop: hp(3),
    marginBottom: hp(2),
    borderWidth: wp(0.2),
    borderColor: white_color,
    borderRadius: wp(5),
  },
  imageItem: {
    width: wp(92),
    height: hp(27),
    resizeMode: 'contain',
  },
  viewloveIcon: {
    position: 'absolute',
    alignSelf: 'flex-end',
    marginVertical: hp(1.5),
    width: wp(13),
  },
  viewloveIcon_1: {
    borderWidth: wp(0.2),
    borderColor: white_color,
    borderRadius: wp(10 / 2),
    width: wp(10),
    height: wp(10),
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttom_select: {
    borderWidth: wp(0.2),
    borderColor: light_gray_color,
    width: wp(32),
    height: hp(5.5),
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: wp(4.5),
    marginEnd: wp(4),
  },
  buttom_quantity: {
    backgroundColor: white_color,
    borderWidth: wp(0.2),
    borderColor: light_gray_color,
    width: wp(10),
    height: hp(4),
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: wp(3),
  },
  buttom_quantity_1: {
    borderTopWidth: wp(0.6),
    width: wp(3),
    borderRadius: wp(2),
    borderColor: black_color,
  },
  points_view: {
    marginVertical: hp(2.5),
    borderWidth: wp(0.2),
    borderColor: light_gray_color,
    borderStyle: 'dashed',
    alignItems: 'center',
    borderRadius: wp(6),
    // paddingVertical:hp(1.5)
  },
  lineItemDetails: {
    borderWidth: 0.2,
    borderColor: light_gray_color,
    width: wp(85),
  },
  points_sec: {
    flexDirection: 'row',
    width: wp(83),
    marginTop: hp(2.5),
    justifyContent: 'space-between',
  },

  paymentMethod: {
    height: hp(10),
    justifyContent: 'space-around',
    marginVertical: hp(3),
  },
  imageVisa_sec: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  imageVisa: {
    width: wp(8),
    height: wp(8),
    resizeMode: 'contain',
    marginEnd: wp(2),
  },

  points_view_1: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  points_view_2: {
    width: wp(6.5),
    height: wp(6.5),
    borderRadius: wp(6.5 / 2),
    borderWidth: 0.2,
    justifyContent: 'center',
    alignItems: 'center',
    marginEnd: wp(1.5),
  },
  points_view_sell: {
    backgroundColor: white_color,
    width: wp(3.5),
    height: wp(3.5),
    borderRadius: wp(3.5 / 2),
  },
  addCart_itemDetails: {
    alignSelf: 'flex-end',
    flexDirection: 'row',
    width: wp(40),
    height: hp(7),
    paddingStart: wp(4),
    alignContent: 'center',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  checkoutItemDetails: {
    backgroundColor: white_color,
    flexDirection: 'row',
    width: wp(60),
    height: hp(7),
    paddingHorizontal: wp(2),
    borderTopStartRadius: wp(5),
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },

  //ADDPAYMENT
  textSec_pay: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: hp(7),
    marginBottom: hp(4),
  },
  val_sec_pay: {
    flexDirection: 'row',
    marginHorizontal: wp(2),
    justifyContent: 'space-around',
  },
  sec_ren_card_pay: {
    backgroundColor: white_color,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: wp(5),
    paddingVertical: wp(1),
    alignItems: 'center',
    borderRadius: wp(2),
    marginVertical: hp(1),
  },
  isChackFalse_pay: {
    backgroundColor: light_gray_color,
    width: wp(7),
    height: wp(7),
    borderRadius: wp(7 / 2),
  },
  isChackTrue_pay: {
    backgroundColor: black_color,
    width: wp(7),
    height: wp(7),
    borderRadius: wp(7 / 2),
    alignItems: 'center',
    justifyContent: 'center',
  },
  imageCard_pay: {width: wp(14), height: wp(11), resizeMode: 'contain'},
  buttonPay_sec: {
    backgroundColor: white_color,
    flexDirection: 'row',
    width: wp(56),
    height: hp(8),
    paddingHorizontal: wp(2),
    borderTopStartRadius: wp(5),
    alignSelf: 'flex-end',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  //ORDER DETAILS

  imageOrder_sec: {
    marginTop: hp(3),
    borderRadius: wp(5),
    borderWidth: wp(0.2),
    borderColor: white_color,
    marginBottom: hp(2),
  },
  imageOrder: {
    resizeMode: 'contain',
    width: wp(92),
    height: hp(20),
  },
  salryOrder_sec: {
    backgroundColor: Primary_color,
    width: wp(21),
    height: hp(4.5),
    borderRadius: wp(5),
    borderColor: white_color,
    borderWidth: wp(0.2),
    borderTopStartRadius: wp(0),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
  },
  imageSalryOrder: {
    width: wp(20),
    height: hp(4),
    position: 'absolute',
  },
  lineOrderDeyails: {
    borderBottomWidth: 0.2,
    borderColor: light_gray_color,
  },
  adress_sec: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  mapAddress_sec: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  //CHECKOUT

  render_sec: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: hp(4),
  },
  userAddressCheckout: {
    // height: hp(12),
    justifyContent: 'space-between',
    marginTop: hp(6),
    marginBottom: hp(4),
  },
  moreDetail_sec: {
    width: wp(7),
    height: wp(7),
    borderRadius: wp(7 / 2),
    backgroundColor: gray_color,
    alignItems: 'center',
    justifyContent: 'center',
  },
  InputStyle: {
    color: white_color,
    marginTop: hp(1),
    marginStart: wp(-1.1),
  },
  promoCode_sec: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginVertical: hp(2),
  },
  plusView: {
    width: wp(8.5),
    height: wp(7.5),
    alignItems: 'center',
    alignSelf: 'center',
    justifyContent: 'center',
    borderWidth: wp(0.2),
    borderStyle: 'dashed',
    borderColor: gray_color,
    borderRadius: wp(2.5),
    marginEnd: wp(1),
  },
  codeInput: {
    color: white_color,
    height: hp(5),
    flex: 1,
  },
  redeemPointsCheck: {
    marginVertical: hp(2.5),
    borderWidth: wp(0.2),
    borderColor: light_gray_color,
    borderStyle: 'dashed',
    alignItems: 'center',
    borderRadius: wp(6),
    paddingVertical: hp(0.5),
  },
  points_sec_check: {paddingVertical: hp(2.5), alignItems: 'center'},
  points_sec_checkView: {
    flexDirection: 'row',
    width: wp(83),
    marginTop: hp(2.5),
    justifyContent: 'space-between',
  },
  pro_check_sec:{
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'center',
    marginTop: hp(3),
  },
  total_sec_check:{
    alignSelf: 'flex-start',
    flexDirection: 'column',
    width: wp(40),
    height: hp(11),
    paddingStart: wp(4),
    // borderTopStartRadius: wp(4),
    alignContent: 'center',
    alignItems: 'flex-start',
    justifyContent: 'space-around',
  },
  pro_buttonCheck:{
    backgroundColor: white_color,
    flexDirection: 'row',
    width: wp(56),
    height: hp(8),
    paddingHorizontal: wp(2),
    borderTopStartRadius: wp(5),
    alignSelf: 'flex-end',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },

  //CART

  image_secCheckout: {
    borderRadius: wp(27 / 2),
    elevation: wp(0.5),
    shadowColor: white_color,
    backgroundColor: black_color,
    alignItems: 'center',
    justifyContent: 'center',
  },
  imageitenCheckout: {
    resizeMode: 'cover',
    width: wp(27),
    height: wp(27),
    borderRadius: wp(27 / 2),
  },
  details_secCheckout: {
    flexDirection: 'column',
    justifyContent: 'space-evenly',
    width: wp(55),
    marginEnd: wp(4),
  },
  renderLinecheckout: {borderBottomWidth: 0.2, borderColor: light_gray_color},
  cardItem: {flexDirection: 'row', justifyContent: 'space-between'},
  imageCartView: {
    borderRadius: wp(27 / 2),
    elevation: wp(0.5),
    shadowColor: white_color,
    backgroundColor: black_color,
    alignItems: 'center',
    justifyContent: 'center',
  },
  imageCart: {
    resizeMode: 'cover',
    width: wp(27),
    height: wp(27),
    borderRadius: wp(27 / 2),
  },
  detil_secCart: {
    flexDirection: 'column',
    justifyContent: 'space-evenly',
    width: wp(55),
    marginEnd: wp(4),
  },
  button_secCart: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'flex-start',
    marginTop: hp(2),
  },
  incrementButton: {
    borderTopWidth: wp(0.6),
    width: wp(3),
    borderRadius: wp(2),
    borderColor: black_color,
  },
  cartUnitsView: {
    width: wp(10),
    alignItems: 'center',
    justifyContent: 'center',
  },

  buttonCartView: {
    backgroundColor: white_color,
    borderColor: light_gray_color,
    width: wp(8),
    height: wp(7),
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: wp(3.5),
  },
  lineViewCart: {
    marginTop: hp(3.5),
    borderBottomWidth: 0.2,
    borderColor: light_gray_color,
  },

  //SETTING

  sec_lang_View_1: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginVertical: hp(7),
  },
  sec_lang_View_2: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  sec_lang_View_3: {
    width: hp(11),
    height: hp(6),
    borderRadius: hp(1),
    backgroundColor: black_color,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    // borderWidth: 0.2,
    borderColor: white_color,
    elevation: wp(3),
  },
  sec_lang_View_4: {
    width: hp(3.5),
    height: hp(4),
    borderRadius: hp(1),
    backgroundColor: '#fff',
    alignSelf: 'center',
    alignItems: 'center',
    alignContent: 'center',
    justifyContent: 'center',
    elevation: wp(3),
    shadowColor: white_color,
  },
  sec_lang_View_5: {
    width: hp(3.5),
    height: hp(4),
    borderRadius: hp(1),
    backgroundColor: '#941e71',
    alignSelf: 'center',
    alignItems: 'center',
    alignContent: 'center',
    justifyContent: 'center',
  },
  //cart
  pro_sec: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'center',
    marginTop: hp(3),
  },
  total_sec: {
    alignSelf: 'flex-start',
    flexDirection: 'column',
    width: wp(40),
    height: hp(8),
    paddingStart: wp(4),
    // borderTopStartRadius: wp(4),
    alignContent: 'center',
    alignItems: 'flex-start',
    justifyContent: 'space-around',
  },
  pro_view: {
    backgroundColor: white_color,
    flexDirection: 'row',
    width: wp(56),
    height: hp(8),
    paddingHorizontal: wp(2),
    borderTopStartRadius: wp(5),
    alignSelf: 'flex-end',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  // Request's

  imageRequest: {
    width: wp(31),
    height: wp(31),
    marginTop: hp(25),
    marginBottom: hp(4),
  },
});
export default styles;
