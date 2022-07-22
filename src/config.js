import {Alert, Platform, ToastAndroid} from 'react-native';
import LocalizedStrings from 'react-native-localization';
import en from './translations/en';
import ar from './translations/ar';

export const rendererror = message => {
  if (Platform.OS === 'android') {
    ToastAndroid.show(message, ToastAndroid.SHORT);
  } else {
    Alert.alert('', message, [{text: 'close', style: 'cancel'}]);
  }
};

export const L = new LocalizedStrings({en: en, ar: ar});
export const changeLaguage = languageKey => {
  L.setLanguage(languageKey);
};
