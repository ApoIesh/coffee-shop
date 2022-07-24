import React, {Component} from 'react';
import {View, Text, StatusBar, TouchableOpacity} from 'react-native';
import styles, {
  black_color,
  hp,
  Primary_color,
  white_color,
  wp,
} from './Assets/style/styles';
import {changeLaguage, changeLng, L} from '../config';
import {navigate} from '../NavigationActions';

class Settings extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isEnabled: false,
      Language: true,
    };
  }

  checkLang(languageKey) {
    changeLaguage(languageKey);
  }

  render() {
    const {isEnabled, Language} = this.state;

    return (
      <View style={styles.container_black}>
        <View style={styles.view_92}>
          <View style={styles.sec_lang_View_1}>
            <Text style={[styles.Bold_16pt_white]}>{L.language}</Text>
            <View style={styles.sec_lang_View_2}>
              <View style={styles.sec_lang_View_3}>
                <TouchableOpacity
                  activeOpacity={0.9}
                  onPress={() => {
                    this.checkLang('en'), this.setState({Language: true});
                  }}>
                  <View
                    style={{
                      ...styles.sec_lang_View_4,
                      backgroundColor:
                        Language == true ? Primary_color : white_color,
                    }}>
                    <Text
                      style={{
                        ...styles.bold_black_text_4,
                        color: Language == true ? white_color : black_color,
                      }}>
                      en
                    </Text>
                  </View>
                </TouchableOpacity>
                <TouchableOpacity
                  activeOpacity={0.9}
                  onPress={() => {
                    this.checkLang('ar'), this.setState({Language: false});
                  }}>
                  <View
                    style={{
                      ...styles.sec_lang_View_5,
                      backgroundColor:
                        Language == false ? Primary_color : white_color,
                    }}>
                    <Text
                      style={{
                        ...styles.bold_black_text_4,
                        color: Language == false ? white_color : black_color,
                      }}>
                      ع
                    </Text>
                  </View>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      </View>
    );
  }
}

export default Settings;
