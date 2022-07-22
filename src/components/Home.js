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
import styles, {
  black_color,
  gray_color,
  hp,
  white_color,
  wp,
} from './Assets/style/styles';
import Feather from 'react-native-vector-icons/Feather';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {navigate} from '../NavigationActions';
import {Input} from './Assets/common/';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      love: false,
      notification: true,
      search: null,
      selected_page: null,
      DATA: [
        {
          image: require('./Assets/image/dsc_08487.png'),
          name: 'Espresso',
          description: 'Enjoy the taste of natural coffee for a better day',
          value: '25',
          id: 1,
        },
        {
          image: require('./Assets/image/dsc_08133_e.png'),
          name: 'إسبرسو',
          description: 'استمتع بطعم القهوة الطبيعية ليوم أفضل',
          value: '25',
          id: 2,
        },
        {
          image: require('./Assets/image/dsc_08487.png'),
          name: 'Cappuchino',
          description: 'Enjoy the taste of natural coffee for a better day',
          value: '25',
          id: 3,
        },
      ],
    };
  }

  SelectCategories = ({item, index}) => {
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
      <TouchableOpacity
        activeOpacity={1}
        onPress={() => navigate('ItemDetails')}
        style={{marginTop: hp(2)}}>
        <Image source={item?.image} style={styles.image_categorie_flat_home} />
        <View style={styles.white_view_flat_home}>
          <View style={styles.white_view_flat_home_1}>
            <View style={styles.des_white_view_flat_home}>
              <Text style={styles.Bold_14pt_black}>{item?.name}</Text>
              <Text style={[styles.Light_12pt_gray, styles.des_flat_home]}>
                {item?.description}
              </Text>
            </View>
            <View style={styles.black_view_icon_flat_home}>
              <ImageBackground
                borderRadius={wp(5)}
                resizeMode={'cover'}
                source={require('./Assets/image/group_2976.png')}
                style={styles.black_image_icon_flat_home}
              />

              <TouchableOpacity
                activeOpacity={1}
                onPress={() => addToCart(item, index)}>
                <View
                  style={{
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: wp(8),
                    height: wp(8),
                  }}>
                  {item.add_cart === 0 ? (
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
                </View>
              </TouchableOpacity>

              <View style={styles.black_line_icon_flat_home} />
              <TouchableOpacity
                activeOpacity={1}
                onPress={() => isFavorite(item, index)}>
                <View
                  style={{
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: wp(8),
                    height: wp(8),
                  }}>
                  <FontAwesome
                    size={wp(4.8)}
                    name={icon_love}
                    color={white_color}
                  />
                </View>
              </TouchableOpacity>
            </View>
          </View>
          <View style={{justifyContent: 'flex-end'}}>
            <View style={styles.black_view_value_flat_home}>
              <ImageBackground
                borderRadius={wp(5)}
                resizeMode={'cover'}
                source={require('./Assets/image/group_2976.png')}
                style={styles.black_image_value_flat_home}
              />
              <Text style={[styles.AltBold_10pt_white, {marginEnd: wp(1)}]}>
                {item?.value}
              </Text>
              <Text style={styles.AltBold_10pt_white}>{L.currency}</Text>
            </View>
          </View>
        </View>
      </TouchableOpacity>
    );
  };

  render() {
    //STATE
    const {search, selected_page, DATA} = this.state;

    //PROPS

    //OTHER

    return (
      <View style={styles.container_black}>
        <View style={{width: wp(92), alignSelf: 'center', marginTop: hp(1)}}>
          <Input
            left={<Feather size={wp(5)} name="search" color={'#807777'} />}
            backgroundColor={'#262525'}
            borderRadius={hp(2)}
            height={hp(6)}
            value={search}
            color={white_color}
            placeholder={L.search}
            onChangeText={search => this.setState({search})}
          />
        </View>

        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          <View style={styles.categories_select_view}>
            <TouchableOpacity
              style={{
                ...styles.categories_select,
                backgroundColor: selected_page == null ? white_color : null,
              }}
              onPress={() => this.setState({selected_page: null})}
              activeOpacity={0.9}>
              <Text
                style={{
                  ...styles.Regular_14pt_black,
                  color: selected_page == null ? black_color : gray_color,
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
          {selected_page === null ? (
            <View>
              <View style={styles.view_92}>
                <View style={styles.titel_categorie}>
                  <Text style={styles.Bold_18pt_white}>{L.popular_coffee}</Text>
                  <TouchableOpacity activeOpacity={0.9}>
                    <Text style={styles.Regular_12pt_white}>{L.view_all}</Text>
                  </TouchableOpacity>
                </View>
              </View>

              <FlatList
                data={DATA}
                showsVerticalScrollIndicator={false}
                renderItem={this.SelectCategories}
                keyExtractor={(item, index) => index.toString()}
              />
              <View style={styles.view_92}>
                <View style={styles.titel_categorie}>
                  <Text style={styles.Bold_18pt_white}>{L.new_products}</Text>
                  <TouchableOpacity activeOpacity={0.9}>
                    <Text style={styles.Regular_12pt_white}>{L.view_all}</Text>
                  </TouchableOpacity>
                </View>
              </View>
              <FlatList
                data={DATA}
                showsVerticalScrollIndicator={false}
                renderItem={this.SelectCategories}
                keyExtractor={(item, index) => index.toString()}
              />
            </View>
          ) : selected_page === 1 ? (
            <View>
              <FlatList
                data={DATA}
                showsVerticalScrollIndicator={false}
                renderItem={this.SelectCategories}
                keyExtractor={(item, index) => index.toString()}
              />
            </View>
          ) : selected_page === 2 ? (
            <View>
              <FlatList
                data={DATA}
                showsVerticalScrollIndicator={false}
                renderItem={this.SelectCategories}
                keyExtractor={(item, index) => index.toString()}
              />
            </View>
          ) : selected_page === 3 ? (
            <View>
              <FlatList
                data={DATA}
                showsVerticalScrollIndicator={false}
                renderItem={this.SelectCategories}
                keyExtractor={(item, index) => index.toString()}
              />
            </View>
          ) : selected_page === 4 ? (
            <View>
              <FlatList
                data={DATA}
                showsVerticalScrollIndicator={false}
                renderItem={this.SelectCategories}
                keyExtractor={(item, index) => index.toString()}
              />
            </View>
          ) : null}
          <View style={{marginBottom: hp(2)}} />
        </ScrollView>
      </View>
    );
  }
}

export default Home;
