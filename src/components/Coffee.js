import React, {Component} from 'react';
import {
  TouchableOpacity,
  View,
  Text,
  Image,
  ImageBackground,
  ScrollView,
  FlatList,
} from 'react-native';
import {L} from '../config';
import styles, {
  black_color,
  gray_color,
  hp,
  white_color,
  wp,
} from './Assets/style/styles';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { navigate } from '../NavigationActions';

class Coffee extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected_page: 0,
      love: false,
      add_cart: false,
      DATA: [
        {
          image: require('./Assets/image/dsc_08487.png'),
          name: 'Latte',
          description: 'Enjoy the taste of natural coffee for a better day',
          value: '21',
        },
        {
          image: require('./Assets/image/dsc_08487.png'),
          name: 'إسبرسو',
          description: 'استمتع بطعم القهوة الطبيعية ليوم أفضل',
          value: '21',
        },
        {
          image: require('./Assets/image/dsc_08487.png'),
          name: 'Latte',
          description: 'Enjoy the taste of natural coffee for a better day',
          value: '21',
        },
        {
          image: require('./Assets/image/dsc_08487.png'),
          name: 'Latte',
          description: 'Enjoy the taste of natural coffee for a better day',
          value: '21',
        },
      ],
    };
  }

  SelectCoffee = ({item, index}) => {
    //STATE
    const {DATA, add_cart} = this.state;
    //PROPS

    //OTHER
    const addToCart = (item, index) => {
      DATA[index].add_cart = item.add_cart == 0 ? 1 : 0;
      this.setState({DATA: DATA});
    };
    const isFavorite = (item, index) => {
      DATA[index].isFavorite = item.isFavorite == 0 ? 1 : 0;
      this.setState({DATA: DATA});
    };
    const icon_love = item.isFavorite == 0 ? 'heart' : 'heart-o';
    return (
      <View style={styles.view_1_flat_coffee}>
        <TouchableOpacity activeOpacity={0.9} 
        onPress={()=>navigate('ItemDetails')}style={styles.view_2_flat_coffee}>
          <View>
            <Image source={item?.image} style={styles.image_flat_coffee} />
            <View style={{justifyContent: 'flex-end'}}>
              <View style={styles.black_view_value_flat_coffee}>
                <ImageBackground
                  borderRadius={wp(5)}
                  resizeMode={'cover'}
                  source={require('./Assets/image/group_2976.png')}
                  style={styles.black_image_value_flat_coffe}
                />
                <Text style={[styles.AltBold_10pt_white, {marginEnd: wp(1)}]}>
                  {item?.value}
                </Text>
                <Text style={styles.AltBold_10pt_white}>{L.currency}</Text>
              </View>
            </View>
          </View>

          <View>
            <View style={styles.des_flat_coffee}>
              <View style={{flexDirection: 'column'}}>
                <Text style={styles.Bold_14pt_white}>{item?.name}</Text>
                <Text
                  style={[
                    styles.Light_12pt_white,
                    {lineHeight: hp(2.5), marginTop: wp(1.5)},
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
                    <Text
                      style={[styles.Light_12pt_white, {marginStart: wp(2)}]}>
                      {L.add_cart}
                    </Text>
                  </View>
                </TouchableOpacity>
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
              </View>
            </View>
          </View>
        </TouchableOpacity>
        <View style={styles.line_end_flat_coffee} />
      </View>
    );
  };

  render() {
    //STATE
    const {selected_page, DATA} = this.state;

    //PROPS

    //OTHER

    return (
      <View style={styles.container_black}>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          <View style={styles.categories_select_view}>
            <TouchableOpacity
              style={{
                ...styles.categories_select,
                backgroundColor: selected_page == 0 ? white_color : null,
              }}
              onPress={() => this.setState({selected_page: 0})}
              activeOpacity={0.9}>
              <Text
                style={{
                  ...styles.Regular_14pt_black,
                  color: selected_page == 0 ? black_color : gray_color,
                }}>
                {L.all}
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={{
                ...styles.categories_select,
                backgroundColor: selected_page == 1 ? white_color : null,
              }}
              onPress={() => this.setState({selected_page: 1})}
              activeOpacity={0.9}>
              <Text
                style={{
                  ...styles.Regular_14pt_black,
                  color: selected_page == 1 ? black_color : gray_color,
                }}>
                {L.Latte}
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={{
                ...styles.categories_select,
                backgroundColor: selected_page == 2 ? white_color : null,
              }}
              onPress={() => this.setState({selected_page: 2})}
              activeOpacity={0.9}>
              <Text
                style={{
                  ...styles.Regular_14pt_black,
                  color: selected_page == 2 ? black_color : gray_color,
                }}>
                {L.Espresso}
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={{
                ...styles.categories_select,
                backgroundColor: selected_page == 3 ? white_color : null,
              }}
              onPress={() => this.setState({selected_page: 3})}
              activeOpacity={0.9}>
              <Text
                style={{
                  ...styles.Regular_14pt_black,
                  color: selected_page == 3 ? black_color : gray_color,
                }}>
                {L.Macchiato}
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={{
                ...styles.categories_select,
                backgroundColor: selected_page == 4 ? white_color : null,
              }}
              onPress={() => this.setState({selected_page: 4})}
              activeOpacity={0.9}>
              <Text
                style={{
                  ...styles.Regular_14pt_black,
                  color: selected_page == 4 ? black_color : gray_color,
                }}>
                {L.irish_Coffee}
              </Text>
            </TouchableOpacity>
          </View>
        </ScrollView>

        <ScrollView showsVerticalScrollIndicator={false}>
          {selected_page == 0 ? (
            <FlatList
              data={DATA}
              showsVerticalScrollIndicator={false}
              renderItem={this.SelectCoffee}
              keyExtractor={(item, index) => index.toString()}
            />
          ) : selected_page == 1 ? (
            <FlatList
              data={DATA}
              showsVerticalScrollIndicator={false}
              renderItem={this.SelectCoffee}
              keyExtractor={(item, index) => index.toString()}
            />
          ) : selected_page == 2 ? (
            <FlatList
              data={DATA}
              showsVerticalScrollIndicator={false}
              renderItem={this.SelectCoffee}
              keyExtractor={(item, index) => index.toString()}
            />
          ) : selected_page == 3 ? (
            <FlatList
              data={DATA}
              showsVerticalScrollIndicator={false}
              renderItem={this.SelectCoffee}
              keyExtractor={(item, index) => index.toString()}
            />
          ) : selected_page == 4 ? (
            <FlatList
              data={DATA}
              showsVerticalScrollIndicator={false}
              renderItem={this.SelectCoffee}
              keyExtractor={(item, index) => index.toString()}
            />
          ) : null}
          <View style={{marginBottom: hp(2)}} />
        </ScrollView>
      </View>
    );
  }
}

export default Coffee;
