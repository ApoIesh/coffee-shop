import React, {Component} from 'react';
import {
  TouchableOpacity,
  View,
  Text,
  Image,
  ScrollView,
  FlatList,
  TextInput,
} from 'react-native';
import styles, {
  black_color,
  gray_color,
  hp,
  white_color,
  wp,
} from './Assets/style/styles';
import {L} from '../config';
import {navigate} from '../NavigationActions';
import Icon from './Assets/common/Icon';

class Checkout extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user_name: 'Mohammed ApoIesh',
      user_address: 'No 7, Street name',
      user_cov: 'Mansora, Dakahlia',
      card_detil: ' Master Card ending **07',
      sel_quantity: 0,
      message: null,
      sel_point: null,
      Code: null,
      DATA: [
        {
          image: require('./Assets/image/dsc_08487.png'),
          name: 'Latte',
          description: 'Enjoy the taste of natural coffee for a better day',
          value: '27',
        },
        {
          image: require('./Assets/image/dsc_08487.png'),
          name: 'إسبرسو',
          description: 'استمتع بطعم القهوة الطبيعية ليوم أفضل',
          value: '27',
        },
      ],
    };
  }

  renderCheckoutItems = ({item, index}) => {
    return (
      <View style={{marginTop: hp(1.5)}}>
        <View style={styles.render_sec}>
          <View style={styles.image_secCheckout}>
            <Image source={item?.image} style={styles.imageitenCheckout} />
          </View>
          <View style={styles.details_secCheckout}>
            <Text style={styles.Bold_14pt_white}>{item?.name}</Text>
            <Text style={[styles.Light_12pt_white, {lineHeight: wp(4.3)}]}>
              {item?.description}
            </Text>
            <View style={{flexDirection: 'row'}}>
              <Text style={styles.Bold_14pt_white}>{item?.value} </Text>
              <Text style={styles.Bold_14pt_white}>{L.currency}</Text>
            </View>
          </View>
        </View>
        <View style={styles.renderLinecheckout} />
      </View>
    );
  };

  render() {
    const {DATA, user_name, user_address, user_cov, card_detil, message, Code} =
      this.state;

    const total = DATA.reduce((a, b) => +a + +b.value, 0);

    return (
      <View style={styles.container_black}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.view_92}>
            <View style={styles.userAddressCheckout}>
              <Text style={styles.Bold_18pt_white}>{L.Shipping_address}</Text>
              <View style={{justifyContent: 'space-evenly', height: wp(20)}}>
                <Text style={styles.Regular_14pt_white}>{user_name}</Text>
                <Text style={styles.Light_14pt_gray}>{user_address}</Text>
                <Text style={styles.Light_14pt_gray}>{user_cov}</Text>
              </View>

              <View style={{position: 'absolute', alignSelf: 'flex-end'}}>
                <TouchableOpacity>
                  <View style={styles.moreDetail_sec}>
                    <Icon
                      type={'FontAwesome5'}
                      size={wp(3.5)}
                      name={L.icon_forward}
                      color={white_color}
                      //   onPress={() => navigation.goBack()}
                    />
                  </View>
                </TouchableOpacity>
              </View>
            </View>

            <View style={styles.renderLinecheckout} />

            <View style={styles.paymentMethod}>
              <Text style={styles.Bold_18pt_white}>{L.Payment_Method}</Text>
              <View style={styles.imageVisa_sec}>
                <Image
                  source={require('./Assets/image/visa.png')}
                  style={styles.imageVisa}
                />
                <Text style={styles.Light_14pt_gray}>{card_detil}</Text>
              </View>

              <View style={{position: 'absolute', alignSelf: 'flex-end'}}>
                <TouchableOpacity onPress={() => navigate('AddPayment')}>
                  <View style={styles.moreDetail_sec}>
                    <Icon
                      type={'FontAwesome5'}
                      size={wp(3.5)}
                      name={L.icon_forward}
                      color={white_color}
                      //   onPress={() => navigation.goBack()}
                    />
                  </View>
                </TouchableOpacity>
              </View>
            </View>

            <View style={styles.renderLinecheckout} />

            <Text style={[styles.Bold_18pt_white, {marginTop: hp(3)}]}>
              {L.Items}
            </Text>
            <FlatList
              data={DATA}
              showsVerticalScrollIndicator={false}
              renderItem={this.renderCheckoutItems}
              keyExtractor={(item, index) => index.toString()}
            />

            <View style={{marginVertical: hp(3)}}>
              <Text style={styles.Bold_18pt_white}>{L.promo_code}</Text>

              <View style={styles.promoCode_sec}>
                <View style={styles.plusView}>
                  <Text style={[styles.Bold_14pt_gray]}>+</Text>
                </View>

                <TextInput
                  multiline={true}
                  placeholder={'Add promo code...'}
                  placeholderTextColor={gray_color}
                  style={styles.codeInput}
                  value={Code}
                  onChangeText={Code => this.setState({Code})}
                />
              </View>
              <View style={styles.line} />
            </View>

            <View style={styles.pro_check_sec}>
              <View style={styles.total_sec_check}>
                <Text style={styles.Bold_18pt_white}>{L.total}</Text>
                <Text style={styles.Bold_25pt_white}>
                  {total} {L.currency}
                </Text>
              </View>

              <TouchableOpacity onPress={() => navigate('FailedRequest')}>
                <View style={styles.pro_buttonCheck}>
                  <Icon name={L.arrow} color={black_color} size={wp(5)} />
                  <Text style={styles.Bold_16pt_black}>{L.payment}</Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </View>
    );
  }
}

export default Checkout;
