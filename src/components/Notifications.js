import React, {Component} from 'react';
import {
  StatusBar,
  TouchableOpacity,
  View,
  Text,
  Image,
  FlatList,
} from 'react-native';
import {L} from '../config';
import styles, {black_color, hp, wp} from './Assets/style/styles';

class Notifications extends Component {
  constructor(props) {
    super(props);
    this.state = {
      DATA: [
        {
          name: 'Order Confirmation',
          description: 'Enjoy the taste of natural coffee for a better day',
          ask: true,
        },
        {
          name: 'Order Confirmation',
          description: 'Enjoy the taste of natural coffee for a better day',
          ask: false,
        },
        {
          name: 'Order Confirmation',
          description: 'Enjoy the taste of natural coffee for a better day',
          ask: false,
        },
      ],
    };
  }

  renderNotifications = ({item, index}) => {
    return (
      <View style={styles.view_92}>
        <View style={{flexDirection: 'row', paddingVertical: hp(4.5)}}>
          <View style={styles.image_view_render_notifications}>
            <Image
              source={require('./Assets/image/female-hand-with-paper-cup-coffee_202271-2673.jpg')}
              style={styles.image_render_notifications}
            />
          </View>

          <View style={styles.sec_details_notifications}>
            <Text style={[styles.Bold_14pt_white, {lineHeight: wp(5)}]}>
              {item?.name}
            </Text>
            <Text style={[styles.Light_12pt_white, {lineHeight: wp(4.5)}]}>
              {item?.description}
            </Text>
            {item?.ask == true ? (
              <View style={{flexDirection: 'row'}}>
                <TouchableOpacity>
                  <Text style={[styles.Bold_12pt_white, {marginTop: wp(1.5)}]}>
                    {L.accept}
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity>
                  <Text
                    style={[
                      styles.Bold_12pt_white,
                      {marginTop: wp(1.5), marginStart: wp(9)},
                    ]}>
                    {L.reject}
                  </Text>
                </TouchableOpacity>
              </View>
            ) : (
              <TouchableOpacity>
                <Text style={[styles.Bold_12pt_white, {marginTop: wp(1.5)}]}>
                  {L.see_details}
                </Text>
              </TouchableOpacity>
            )}
          </View>
        </View>
        <View style={styles.line} />
      </View>
    );
  };

  render() {
    //STATE
    const {DATA} = this.state;

    //PROPS

    //OTHER

    return (
      <View style={styles.container_black}>
        <FlatList
          data={DATA}
          showsVerticalScrollIndicator={false}
          renderItem={this.renderNotifications}
          keyExtractor={(item, index) => index.toString()}
        />
      </View>
    );
  }
}

export default Notifications;
