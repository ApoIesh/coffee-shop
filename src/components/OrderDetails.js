import React, {Component} from 'react';
import {
  TouchableOpacity,
  View,
  Text,
  Image,
  ImageBackground,
  ScrollView,
} from 'react-native';
import {L} from '../config';
import styles, {black_color, hp, white_color, wp} from './Assets/style/styles';
import {navigate} from '../NavigationActions';
import {Button} from './Assets/common/';
import Icon from './Assets/common/Icon';

class OrderDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      DATA: {
        image: require('./Assets/image/coffee-tab.png'),
        name: 'Ice Latte',
        description: 'Enjoy the taste of natural coffee for a better day',
        currency: 'EGP',
        value: '27',
      },
    };
  }

  render() {
    //STATE
    const {DATA} = this.state;
    //PROPS

    //OTHER
    return (
      <View style={styles.container_black}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.view_92}>
            <View style={styles.imageOrder_sec}>
              <Image source={DATA.image} style={styles.imageOrder} />
              <View style={{justifyContent: 'flex-end'}}>
                <View style={styles.salryOrder_sec}>
                  <ImageBackground
                    borderRadius={wp(5)}
                    resizeMode={'cover'}
                    source={require('./Assets/image/group_2976.png')}
                    style={styles.imageSalryOrder}
                  />
                  <Text style={[styles.AltBold_10pt_white, {marginEnd: wp(1)}]}>
                    {DATA.value}
                  </Text>
                  <Text style={styles.AltBold_10pt_white}>{L.currency}</Text>
                </View>
              </View>
            </View>

            <View style={{marginVertical: hp(2.5)}}>
              <Text style={styles.Bold_14pt_white}>{DATA.name}</Text>
              <Text
                style={[
                  styles.Light_12pt_white,
                  {lineHeight: wp(5), marginTop: hp(0.4)},
                ]}>
                {DATA.description}
              </Text>
            </View>

            <View style={styles.lineOrderDeyails} />

            <View style={{marginVertical: hp(2.5)}}>
              <Text style={styles.Bold_14pt_white}>{'Size'}</Text>
              <Text
                style={[
                  styles.Light_12pt_white,
                  {lineHeight: wp(5), marginTop: hp(0.4)},
                ]}>
                Large
              </Text>
            </View>

            <View style={styles.lineOrderDeyails} />

            <View style={{marginVertical: hp(2.5)}}>
              <Text style={styles.Bold_14pt_white}>{'Quantity'}</Text>
              <Text
                style={[
                  styles.Light_12pt_white,
                  {lineHeight: wp(5), marginTop: hp(0.4)},
                ]}>
                4
              </Text>
            </View>

            <View style={styles.lineOrderDeyails} />

            <View style={{marginVertical: hp(2.5)}}>
              <Text style={styles.Bold_14pt_white}>{'Note'}</Text>
              <Text
                style={[
                  styles.Light_12pt_white,
                  {lineHeight: wp(5), marginTop: hp(0.4)},
                ]}>
                Order Paid with Credit Card
              </Text>
            </View>

            <View style={styles.lineOrderDeyails} />

            <View style={{marginVertical: hp(2.5)}}>
              <View style={styles.adress_sec}>
                <Text style={styles.Bold_14pt_white}>{'Address'}</Text>
                <TouchableOpacity activeOpacity={0.5}>
                  <View style={styles.mapAddress_sec}>
                    <Icon
                      type={'Feather'}
                      name="map"
                      size={wp(3.2)}
                      color={white_color}
                      style={{marginEnd: wp(1)}}
                    />
                    <Text style={styles.Light_12pt_white}>Show on map</Text>
                  </View>
                </TouchableOpacity>
              </View>

              <Text
                style={[
                  styles.Light_14pt_gray,
                  {lineHeight: wp(5), marginTop: hp(0.4)},
                ]}>
                No 7, Street name
              </Text>
              <Text
                style={[
                  styles.Light_14pt_gray,
                  {lineHeight: wp(5), marginTop: hp(0.4)},
                ]}>
                Mansora, Dakahlia
              </Text>
              <Text
                style={[
                  styles.Light_14pt_gray,
                  {lineHeight: wp(5), marginTop: hp(0.4)},
                ]}>
                EGY
              </Text>
            </View>

            <View style={styles.lineOrderDeyails} />

            <View style={{marginVertical: hp(2.5)}}>
              <Text style={styles.Bold_14pt_white}>{'Applicant name'}</Text>
              <Text
                style={[
                  styles.Light_14pt_gray,
                  {lineHeight: wp(5), marginTop: hp(0.4)},
                ]}>
                Mohammed ApoIesh
              </Text>
            </View>

            <Button
              label={L.Accept}
              TextColor={black_color}
              backgroundColor={white_color}
              fontSize={wp(3.5)}
              width={wp(35)}
              height={hp(5.5)}
              marginTop={hp(7)}
              marginBottom={hp(3)}
              onPress={() => navigate(L.Checkout)}
            />
          </View>
        </ScrollView>
      </View>
    );
  }
}

export default OrderDetails;
