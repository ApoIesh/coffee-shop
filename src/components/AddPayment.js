import React, { Component } from 'react';
import { TouchableOpacity, View, Text, Image, ScrollView, FlatList } from 'react-native';
import { L } from '../config';
import styles, { black_color, white_color, wp, } from './Assets/style/styles';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { navigate } from '../NavigationActions';
import Icon from './Assets/common/Icon';

class AddPayment extends Component {
  constructor(props) {
    super(props);
    this.state = {
      total: '21',
      select: false,
      DATA: [
        { image: require('./Assets/image/visa.png'), isCheck: false, },
        { image: require('./Assets/image/stc.png'), isCheck: false, },
        { image: require('./Assets/image/mada.png'), isCheck: false, },
        { image: require('./Assets/image/apple_pay.png'), isCheck: false, },
        { image: require('./Assets/image/cod.png'), isCheck: false, },
      ],
    };
  }

  renderPayments = ({ item, index }) => {
    //STATE
    const { select, DATA } = this.state;
    //PROPS

    //OTHER
    const isCheck = () => {
      DATA[index].isCheck = item.isCheck == false ? true : false;
      this.setState({ DATA: DATA });
    };
    return (
      <View style={styles.sec_ren_card_pay}>
        <TouchableOpacity
          activeOpacity={0.9}
          onPress={() => isCheck.call(this)}>
          {item.isCheck == false ? (
            <View style={styles.isChackFalse_pay} />
          ) : (
            <View style={styles.isChackTrue_pay}>
              <Ionicons
                name="ios-checkmark-sharp"
                size={wp(4)}
                color={white_color}
              />
            </View>
          )}
        </TouchableOpacity>
        <View style={{ flexDirection: 'row' }}>
          <Image source={item?.image} style={styles.imageCard_pay} />
        </View>
      </View>
    );
  };

  render() {
    //STATE
    const { total, DATA } = this.state;
    //PROPS

    //OTHER
    return (
      <View style={styles.container_black}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.view_92}>
            <View style={styles.textSec_pay}>
              <Text style={styles.Bold_18pt_white}>{L.select_payment}</Text>
              <View style={styles.val_sec_pay}>
                <Text style={styles.Regular_14pt_white}>{total}</Text>
                <Text style={[styles.Regular_14pt_white, { marginStart: wp(1) }]}>
                  {L.currency}
                </Text>
              </View>
            </View>

            <FlatList
              data={DATA}
              renderItem={this.renderPayments}
              keyExtractor={(item, index) => index.toString()}
            />
          </View>
        </ScrollView>
        <TouchableOpacity onPress={() => navigate(L.Checkout)}>
          <View style={styles.buttonPay_sec}>
            <Icon name="arrow-forward-sharp" color={black_color} size={wp(5)} />
            <Text style={styles.Bold_16pt_black}>{L.to_payment}</Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}

export default AddPayment;
