import React, {Component} from 'react';
import {
  StatusBar,
  TouchableOpacity,
  View,
  Text,
  Image,
  FlatList,
  Animated,
  LayoutAnimation,
  Platform,
  UIManager,
} from 'react-native';
import {L} from '../config';
import styles, {
  black_color,
  gray_color,
  hp,
  light_gray_color,
  white_color,
  wp,
} from './Assets/style/styles';

if (Platform.OS === 'android') {
  if (UIManager.setLayoutAnimationEnabledExperimental) {
    UIManager.setLayoutAnimationEnabledExperimental(true);
  }
}

class Notifications extends Component {
  constructor(props) {
    super(props);
    this.state = {
      animation: new Animated.Value(hp(0)),
      scrollEvent: new Animated.Value(wp(0)),
      DATA: [
        {
          title: 'data seccsses',
          id: 1,
          time: '02.45 pm',
          name: 'Order Confirmation',
          description: 'Enjoy the taste of natural coffee for a better day',
          ask: true,
        },
        {
          title: 'data seccsses',
          id: 2,
          time: '02.45 pm',
          name: 'Order Confirmation',
          description: 'Enjoy the taste of natural coffee for a better day',
          ask: true,
        },
        {
          title: 'data seccsses',
          id: 3,
          time: '02.45 pm',
          name: 'Order Confirmation',
          description: 'Enjoy the taste of natural coffee for a better day',
          ask: true,
        },
        {
          title: 'data seccsses',
          id: 4,
          time: '02.45 pm',
          name: 'Order Confirmation',
          description: 'Enjoy the taste of natural coffee for a better day',
          ask: true,
        },
        {
          title: 'data seccsses',
          id: 5,
          time: '02.45 pm',
          name: 'Order Confirmation',
          description: 'Enjoy the taste of natural coffee for a better day',
          ask: true,
        },
        {
          title: 'data seccsses',
          id: 6,
          time: '02.45 pm',
          name: 'Order Confirmation',
          description: 'Enjoy the taste of natural coffee for a better day',
          ask: true,
        },
        {
          title: 'data seccsses',
          id: 7,
          time: '02.45 pm',
          name: 'Order Confirmation',
          description: 'Enjoy the taste of natural coffee for a better day',
          ask: true,
        },
        {
          title: 'data seccsses',
          id: 8,
          time: '02.45 pm',
          name: 'Order Confirmation',
          description: 'Enjoy the taste of natural coffee for a better day',
          ask: true,
        },
        {
          title: 'data seccsses',
          id: 9,
          time: '02.45 pm',
          name: 'Order Confirmation',
          description: 'Enjoy the taste of natural coffee for a better day',
          ask: true,
        },
        {
          title: 'data seccsses',
          id: 10,
          time: '02.45 pm',
          name: 'Order Confirmation',
          description: 'Enjoy the taste of natural coffee for a better day',
          ask: true,
        },
        {
          title: 'data seccsses',
          id: 11,
          time: '02.45 pm',
          name: 'Order Confirmation',
          description: 'Enjoy the taste of natural coffee for a better day',
          ask: true,
        },
        {
          title: 'data seccsses',
          id: 12,
          time: '02.45 pm',
          name: 'Order Confirmation',
          description: 'Enjoy the taste of natural coffee for a better day',
          ask: true,
        },
        {
          title: 'data seccsses',
          id: 13,
          time: '02.45 pm',
          name: 'Order Confirmation',
          description: 'Enjoy the taste of natural coffee for a better day',
          ask: true,
        },
        {
          title: 'data seccsses',
          id: 14,
          time: '02.45 pm',
          name: 'Order Confirmation',
          description: 'Enjoy the taste of natural coffee for a better day',
          ask: true,
        },
        {
          title: 'data seccsses',
          id: 15,
          time: '02.45 pm',
          name: 'Order Confirmation',
          description: 'Enjoy the taste of natural coffee for a better day',
          ask: true,
        },
        {
          title: 'data seccsses',
          id: 16,
          time: '02.45 pm',
          name: 'Order Confirmation',
          description: 'Enjoy the taste of natural coffee for a better day',
          ask: true,
        },
        {
          title: 'data seccsses',
          id: 17,
          time: '02.45 pm',
          name: 'Order Confirmation',
          description: 'Enjoy the taste of natural coffee for a better day',
          ask: true,
        },
        {
          title: 'data seccsses',
          id: 18,
          time: '02.45 pm',
          name: 'Order Confirmation',
          description: 'Enjoy the taste of natural coffee for a better day',
          ask: true,
        },
        {
          title: 'data seccsses',
          id: 19,
          time: '02.45 pm',
          name: 'Order Confirmation',
          description: 'Enjoy the taste of natural coffee for a better day',
          ask: true,
        },
        {
          title: 'data seccsses',
          id: 20,
          time: '02.45 pm',
          name: 'Order Confirmation',
          description: 'Enjoy the taste of natural coffee for a better day',
          ask: true,
        },
      ],
    };
  }
  startAnmi = () => {
    Animated.timing(this.state.animation, {
      toValue: hp(90),
      duration: 600,
      useNativeDriver: false,
    }).start();
  };

  componentDidMount() {
    this.startAnmi();
  }

  renderNotifications = ({item, index}) => {
    const scale = this.state.scrollEvent.interpolate({
      inputRange: [-1, 0, hp(13) * index, hp(13) * (index + 2)],
      outputRange: [1, 1, 1, 0],
    });
    const opacity = this.state.scrollEvent.interpolate({
      inputRange: [-1, 0, hp(13) * index, hp(13) * (index + 1)],
      outputRange: [1, 1, 1, 0],
    });

    return (
      <Animated.View
        style={[
          {
            marginVertical: hp(1.5),
            backgroundColor: light_gray_color,
            borderRadius: wp(4),
            flexDirection: 'row',
            alignItems: 'center',
            alignSelf: 'center',
            justifyContent: 'space-evenly',
            height: hp(10),
            paddingHorizontal: wp(9),
            opacity: opacity,
            transform: [{scale}],
          },
        ]}>
        <View
          style={{
            backgroundColor: '#000',
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: hp(1.5),
            marginVertical: hp(1),
            elevation: wp(1),
            borderRadius: wp(5),
            marginEnd: wp(5),
          }}>
          <Image
            source={require('./Assets/image/female-hand-with-paper-cup-coffee_202271-2673.jpg')}
            style={{
              width: hp(8),
              height: hp(8),
              resizeMode: 'contain',
              borderRadius: wp(5),
            }}
          />
        </View>

        <View
          style={{
            justifyContent: 'space-between',
          }}>
          <Text style={[styles.Bold_14pt_gray, {color: white_color}]}>
            {item?.name}
          </Text>
          <TouchableOpacity>
            <Text style={styles.Bold_14pt_black}>{'details'}</Text>
          </TouchableOpacity>
        </View>
        <View style={{alignSelf: 'flex-end', paddingVertical: wp(1.5)}}>
          <Text style={[styles.Light_12pt_black]}>{item?.time}</Text>
        </View>
      </Animated.View>
    );
  };

  render() {
    const {DATA, scrollEvent} = this.state;

    return (
      <View style={styles.container_black}>
        <Animated.FlatList
          data={DATA}
          renderItem={this.renderNotifications}
          keyExtractor={(item, index) => index?.toString()}
          showsVerticalScrollIndicator={false}
          onScroll={Animated.event(
            [{nativeEvent: {contentOffset: {y: scrollEvent}}}],
            {useNativeDriver: true},
          )}
        />
      </View>
    );
  }
}

export default Notifications;
