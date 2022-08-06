import React, {Component} from 'react';
import {
  TouchableOpacity,
  View,
  Text,
  Image,
  Platform,
  UIManager,
  LayoutAnimation,
} from 'react-native';
import Carousel, {Pagination} from 'react-native-snap-carousel';
import {L} from '../config';
import styles, {hp, white_color, wp} from './Assets/style/styles';
import {navigate} from '../NavigationActions';
import Icon from './Assets/common/Icon';

if (Platform.OS === 'android') {
  if (UIManager.setLayoutAnimationEnabledExperimental) {
    UIManager.setLayoutAnimationEnabledExperimental(true);
  }
}

class Intro extends Component {
  constructor(props) {
    super(props);
    this.state = {
      active: 0,
      length: 0,
      activeSlide: 0,
      activeIndex: 0,
      data: [
        {
          image: require('./Assets/image/coffee-tab.png'),
          titel: "Order The Best Coffee's",
          description:
            'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, ',
        },
        {
          image: require('./Assets/image/mug.png'),
          titel: "Order The Best Coffee's",
          description:
            'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, ',
        },
        {
          image: require('./Assets/image/coffee-tab.png'),
          titel: "Order The Best Coffee's",
          description:
            'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, ',
        },
      ],
    };
  }

  get pagination() {
    const {data, activeSlide} = this.state;
    return (
      <Pagination
        dotsLength={data.length}
        activeDotIndex={activeSlide}
        dotStyle={{
          width: wp(3),
          height: wp(3),
          borderRadius: wp(3 / 2),
          backgroundColor: white_color,
        }}
        inactiveDotOpacity={0.1}
        inactiveDotScale={0.5}
      />
    );
  }

  renderItem({item, index}) {
    return (
      <View style={styles.carousel_intro_view_1}>
        <Text style={[styles.Regular_20pt_white, {marginTop: hp(7)}]}>
          {L.welcome_to}
        </Text>
        <Text style={[styles.custom_bold_white_2, {marginBottom: hp(3)}]}>
          {'Cafe'}
        </Text>
        <Image style={styles.image_intro_item} source={item?.image} />
        <Text
          style={{
            ...styles.Extrabold_16pt_white,
            marginTop: hp(6),
            marginBottom: hp(1.5),
          }}>
          {item?.titel}
        </Text>
        <Text
          style={{
            ...styles.AltThin_14pt_white,
            textAlign: 'center',
            lineHeight: wp(6.5),
          }}>
          {item?.description}
        </Text>
      </View>
    );
  }

  render() {
    const {activeSlide, data} = this.state;

    return (
      <View style={styles.container_Primary}>
        <View style={{position: 'absolute'}}>{this.pagination}</View>
        {activeSlide > 0 ? (
          (LayoutAnimation.configureNext(LayoutAnimation.Presets.linear),
          (
            <TouchableOpacity
              activeOpacity={0.9}
              onPress={() => navigate('SignIn')}>
              <View style={styles.button_intro_view_skip}>
                <View style={styles.button_intro_view_skipTop}>
                  <Text style={styles.Regular_16pt_white}>{L.skip}</Text>
                  <Icon
                    type={'Entypo'}
                    name={L.arrow_intro}
                    size={wp(2.7)}
                    color={white_color}
                    style={{marginStart: wp(2)}}
                  />
                </View>
              </View>
            </TouchableOpacity>
          ))
        ) : (
          <View style={{height: hp(6)}} />
        )}

        <Carousel
          autoplay={false}
          scrollEventThrottle={10}
          firstItem={0}
          scrollEnabled={true}
          enableSnap={true}
          layout={'default'}
          ref={ref => (this.carousel = ref)}
          data={data}
          sliderWidth={wp(100)}
          itemWidth={wp(100)}
          renderItem={this.renderItem}
          onSnapToItem={item => this.setState({activeSlide: item})}
        />

        <View style={styles.button_intro_view_1}>
          <View style={styles.button_intro_view_2}>
            {activeSlide == 0 ? (
              <TouchableOpacity
                activeOpacity={0.9}
                onPress={() => navigate('SignIn')}>
                <View style={styles.button_intro_view_skipButtom}>
                  <Text style={styles.Regular_16pt_white}>{L.skip}</Text>
                  <Icon
                    type={'Entypo'}
                    name={L.arrow_intro}
                    size={wp(2.7)}
                    color={white_color}
                    style={{marginStart: wp(2)}}
                  />
                </View>
              </TouchableOpacity>
            ) : null}

            {activeSlide > 0
              ? (LayoutAnimation.configureNext(LayoutAnimation.Presets.linear),
                (
                  <TouchableOpacity
                    activeOpacity={0.9}
                    onPress={() => this.carousel.snapToPrev()}>
                    <View style={styles.button_intro_view_4}>
                      <Icon
                        type={'MaterialCommunityIcons'}
                        name={L.back_arrow}
                        size={wp(4)}
                        color={white_color}
                      />
                      <Text style={styles.Regular_16pt_white}>{L.back}</Text>
                    </View>
                  </TouchableOpacity>
                ))
              : null}

            <TouchableOpacity
              activeOpacity={0.9}
              onPress={() => {
                if (activeSlide == 0 || activeSlide != 2) {
                  LayoutAnimation.configureNext(LayoutAnimation.Presets.linear),
                    this.carousel.snapToNext();
                } else if (activeSlide == 2) {
                  navigate('SignIn');
                }
              }}>
              <View style={styles.button_intro_view_5}>
                <Text style={styles.Regular_16pt_white}>{L.next}</Text>
                <Icon
                  type={'MaterialCommunityIcons'}
                  name={L.next_arrow}
                  size={wp(4)}
                  color={white_color}
                />
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}

export default Intro;
