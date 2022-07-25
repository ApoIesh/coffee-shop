import React, {Component} from 'react';
import {
  StatusBar,
  TouchableOpacity,
  View,
  Text,
  Image,
  ImageBackground,
  ScrollView,
  FlatList,
} from 'react-native';
import {L} from '../config';
import styles, {black_color, hp, white_color, wp} from './Assets/style/styles';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { navigate } from '../NavigationActions';

class Store extends Component {
  constructor(props) {
    super(props);
    this.state = {
      love: false,
      add_cart: false,
      DATA:[
        {
          image: require('./Assets/image/dsc_08487.png'),
          name: 'Latte',
          description: 'Enjoy the taste of natural coffee for a better day',
          value: '21',
        },
        {
          image: require('./Assets/image/dsc_08133_e.png'),
          name: 'Espresso',
          description: 'Enjoy the taste of natural coffee for a better day',
          value: '21',
        },
        {
          image: require('./Assets/image/dsc_08487.png'),
          name: 'Macchiato',
          description: 'Enjoy the taste of natural coffee for a better day',
          value: '21',
        },
        {
          image: require('./Assets/image/dsc_08487.png'),
          name: 'irish Coffee',
          description: 'Enjoy the taste of natural coffee for a better day',
          value: '21',
        },
      ],
    };
  }

  SelectStore = ({item, index}) => {
    const addToCart = (item, index) => {
      item.add_cart = item.add_cart == 0 ? 1 : 0;
      this.setState({item: item});
    };
    const isFavorite = (item, index) => {
      item.isFavorite = item.isFavorite == 0 ? 1 : 0;
      this.setState({item: item});
    };
    const icon_love = item.isFavorite == 0 ? 'heart' : 'heart-o';
    return (
      <View style={styles.view_1_flat_coffee}>
        <TouchableOpacity
          activeOpacity={0.9}
          onPress={() => navigate('ItemDetails')}
          style={styles.view_2_flat_coffee}>
          <View>
            <Image source={item?.image} style={styles.image_flat_coffee} />
            <View style={{position: 'absolute', alignSelf: 'center'}}>
              <View style={styles.black_view_value_flat_coffee}>
                <Text style={[styles.AltBold_10pt_white, {marginEnd: wp(1)}]}>
                  {item?.value}
                </Text>
                <Text style={styles.AltBold_10pt_white}>{L.currency}</Text>
              </View>
            </View>
          </View>

          <View
            style={{marginHorizontal: wp(4), justifyContent: 'space-between'}}>
            <TouchableOpacity
              onPress={() => isFavorite(item, index)}
              activeOpacity={0.9}>
              <View style={styles.love_icon_view_flat_coffee}>
                <FontAwesome
                  size={wp(4.8)}
                  name={icon_love}
                  color={white_color}
                />
              </View>
            </TouchableOpacity>

            <View style={styles.des_flat_coffee}>
              <Text style={styles.Bold_14pt_white}>{item?.name}</Text>
              <Text
                style={[
                  styles.Light_12pt_white,
                  {
                    lineHeight: hp(2.5),
                    marginTop: wp(1.5),
                    flexWrap: 'wrap',
                  },
                ]}>
                {item?.description}
              </Text>
            </View>

            <View style={styles.icon_view_flat_coffe}>
              <TouchableOpacity
                activeOpacity={0.9}
                onPress={() => addToCart(item, index)}>
                <View style={styles.addCort_view_flat_coffee}>
                  {item?.add_cart == false ? (
                    <Image
                      source={require('./Assets/image/cart.png')}
                      style={styles.icon_image_flat_coffe}
                    />
                  ) : (
                    <Image
                      source={require('./Assets/image/cart-light.png')}
                      style={styles.icon_image_flat_coffe}
                    />
                  )}
                  <Text style={[styles.Light_12pt_white, {marginStart: wp(2)}]}>
                    {L.add_cart}
                  </Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>
        </TouchableOpacity>
        <View style={styles.line_end_flat_coffee} />
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
          renderItem={this.SelectStore}
          keyExtractor={(item, index) => index.toString()}
        />
      </View>
    );
  }
}

export default Store;
