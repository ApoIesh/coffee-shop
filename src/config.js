import {Alert, I18nManager, Platform, ToastAndroid} from 'react-native';
import LocalizedStrings from 'react-native-localization';
import en from './translations/en';
import ar from './translations/ar';
import RNRestart from 'react-native-restart';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const rendererror = message => {
  if (Platform.OS === 'android') {
    ToastAndroid.show(message, ToastAndroid.SHORT);
  } else {
    Alert.alert('', message, [{text: 'close', style: 'cancel'}]);
  }
};

export const L = new LocalizedStrings({en: en, ar: ar});
export const changeLaguage = languageKey => {
  AsyncStorage.setItem('languageKey', languageKey);
  if (languageKey == 'ar' || ar) {
    I18nManager.allowRTL(true);
    I18nManager.forceRTL(true);
    L.setLanguage(languageKey);
    if (!I18nManager.isRTL) {
      RNRestart.Restart();
    }
  } else if (lang == 'en' || en) {
    I18nManager.allowRTL(false);
    I18nManager.forceRTL(false);
    L.setLanguage(languageKey);
    if (I18nManager.isRTL) {
      RNRestart.Restart();
    }
  }
};
