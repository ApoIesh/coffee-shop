import React, {Component} from 'react';
import {TouchableOpacity, View, Text, Image, FlatList} from 'react-native';
import styles, {black_color, hp, white_color, wp} from './Assets/style/styles';
import {navigate} from '../NavigationActions';
import Icon from './Assets/common/Icon';
import {L} from '../config';

class Cart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      total: null,
      DATA: [
        {
          image: require('./Assets/image/dsc_08133_e.png'),
          name: 'Latte',
          description: 'Enjoy the taste of natural coffee for a better day',
          value: '10',
          units: 1,
        },
        {
          image: require('./Assets/image/dsc_08133_e.png'),
          name: 'إسبرسو',
          description: 'استمتع بطعم القهوة الطبيعية ليوم أفضل',
          value: '20',
          units: 1,
        },
      ],
    };
  }

  renderCart = ({item, index}) => {
    const {DATA} = this.state;

    const incrementCounter = () => {
      if (item.units > 1) {
        DATA[index].units = item.units - 1;
      }
      this.setState({DATA: DATA});
    };

    const decrementCounter = () => {
      DATA[index].units = item.units + 1;
      this.setState({DATA: DATA});
    };
    const close = () => {
      let filteredItems = DATA.filter((item, Index) => Index != index);
      this.setState({DATA: filteredItems});
    };

    return (
      <View style={styles.view_92}>
        <View style={{marginVertical: hp(3)}}>
          <View style={styles.cardItem}>
            <View style={styles.imageCartView}>
              <Image source={item?.image} style={styles.imageCart} />
            </View>

            <View style={styles.detil_secCart}>
              <Text style={styles.Bold_14pt_white}>{item?.name}</Text>
              <Text style={styles.Light_12pt_white}>{item?.description}</Text>
              <View style={{flexDirection: 'row'}}>
                <Text style={styles.Bold_14pt_white}>{item?.value} </Text>
                <Text style={styles.Bold_14pt_white}>{L.currency}</Text>
              </View>
            </View>
          </View>

          <View style={styles.button_secCart}>
            <TouchableOpacity
              activeOpacity={0.9}
              onPress={() => incrementCounter.call(this)}>
              <View style={styles.buttonCartView}>
                <View style={styles.incrementButton} />
              </View>
            </TouchableOpacity>

            <View style={styles.cartUnitsView}>
              <Text style={styles.Bold_14pt_white}>{item.units}</Text>
            </View>
            <TouchableOpacity
              activeOpacity={0.9}
              onPress={() => decrementCounter.call(this)}>
              <View style={styles.buttonCartView}>
                <Text style={[styles.Bold_18pt_black]}>+</Text>
              </View>
            </TouchableOpacity>
          </View>
          <View style={{alignSelf: 'flex-end', position: 'absolute'}}>
            <Icon
              type={'AntDesign'}
              name="close"
              size={wp(4)}
              color={white_color}
              onPress={() => close.call(this)}
            />
          </View>
          <View style={styles.lineViewCart} />
        </View>
      </View>
    );
  };

  render() {
    const {DATA} = this.state;
    const total = DATA.reduce((a, b) => a + b.units * b.value, 0);

    return (
      <View style={styles.container_black}>
        <FlatList
          data={DATA}
          showsVerticalScrollIndicator={false}
          renderItem={this.renderCart}
          keyExtractor={(item, index) => index.toString()}
        />
        <View style={styles.pro_sec}>
          <View style={styles.total_sec}>
            <Text style={styles.Bold_18pt_white}>{L.total}</Text>
            <Text style={styles.Bold_25pt_white}>
              {total}
              {L.currency}
            </Text>
          </View>

          <TouchableOpacity onPress={() => navigate('OrderDetails')}>
            <View style={styles.pro_view}>
              <Icon
                type={'Ionicons'}
                name="arrow-forward-sharp"
                color={black_color}
                size={wp(5)}
              />
              <Text style={styles.Bold_16pt_black}>{L.to_payment}</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

export default Cart;
