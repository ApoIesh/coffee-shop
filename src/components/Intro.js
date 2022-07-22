import React, {Component} from 'react';
import {
  StatusBar,
  TouchableOpacity,
  View,
  Text,
  Image,
  ImageBackground,
} from 'react-native';
import Carousel, {Pagination} from 'react-native-snap-carousel';
import {L} from '../config';
import styles, {
  hp,
  Primary_color,
  white_color,
  wp,
} from './Assets/style/styles';
import Entypo from 'react-native-vector-icons/Entypo';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {navigate} from '../NavigationActions';

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
        renderDots={data => (
          <View style={styles.pagination_view}>
            <Image
              source={
                data == 0
                  ? require('./Assets/image/bullet.png')
                  : require('./Assets/image/inactive_bullets.png')
              }
              style={styles.pagination_image}
            />
            <Image
              source={
                data == 1
                  ? require('./Assets/image/bullet.png')
                  : require('./Assets/image/inactive_bullets.png')
              }
              style={styles.pagination_image}
            />
            <Image
              source={
                data == 2
                  ? require('./Assets/image/bullet.png')
                  : require('./Assets/image/inactive_bullets.png')
              }
              style={styles.pagination_image}
            />
          </View>
        )}
        inactiveDotOpacity={0.7}
        inactiveDotScale={1.2}
        animatedTension={100}
        animatedDuration={300}
        animatedFriction={20}
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
        <ImageBackground
          source={require('./Assets/image/login-pattern.png')}
          resizeMode={'stretch'}
          style={styles.image_bg_intro}
        />

        {activeSlide > 0 ? (
          <TouchableOpacity onPress={() => navigate('Register')}>
            <View style={styles.button_intro_view_skip}>
              <View style={styles.button_intro_view_skipTop}>
                <Text style={styles.Regular_16pt_white}>{L.skip}</Text>
                <Entypo
                  name="arrow-long-right"
                  size={wp(2.7)}
                  color={white_color}
                  style={{marginStart: wp(2)}}
                />
              </View>
            </View>
          </TouchableOpacity>
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
        <View>{this.pagination}</View>

        <View style={styles.button_intro_view_1}>
          <View style={styles.button_intro_view_2}>
            {activeSlide == 0 ? (
              <TouchableOpacity onPress={() => navigate('Register')}>
                <View style={styles.button_intro_view_skipButtom}>
                  <Text style={styles.Regular_16pt_white}>{L.skip}</Text>
                  <Entypo
                    name="arrow-long-right"
                    size={wp(2.7)}
                    color={white_color}
                    style={{marginStart: wp(2)}}
                  />
                </View>
              </TouchableOpacity>
            ) : null}

            {activeSlide > 0 ? (
              <TouchableOpacity onPress={() => this.carousel.snapToPrev()}>
                <View style={styles.button_intro_view_4}>
                  <MaterialCommunityIcons
                    name="chevron-double-left"
                    size={wp(4)}
                    color={white_color}
                  />
                  <Text style={styles.Regular_16pt_white}>{L.back}</Text>
                </View>
              </TouchableOpacity>
            ) : null}

            <TouchableOpacity
              onPress={() => {
                if (activeSlide == 0 || activeSlide != 2) {
                  this.carousel.snapToNext();
                } else if (activeSlide == 2) {
                  navigate('Register');
                }
              }}>
              <View style={styles.button_intro_view_5}>
                <Text style={styles.Regular_16pt_white}>{L.next}</Text>
                <MaterialCommunityIcons
                  name="chevron-double-right"
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
