import React, {Component} from 'react';
import {
  TouchableOpacity,
  View,
  Text,
  Image,
  ImageBackground,
  ScrollView,
  FlatList,
  LayoutAnimation,
  Platform,
  UIManager,
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
import {navigate} from '../NavigationActions';

if (Platform.OS === 'android') {
  if (UIManager.setLayoutAnimationEnabledExperimental) {
    UIManager.setLayoutAnimationEnabledExperimental(true);
  }
}

class Coffee extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected_page: 0,
      love: false,
      add_cart: false,
      DATA_Cate: [
        {name: L.all},
        {name: L.Latte},
        {name: L.Espresso},
        {name: L.Macchiato},
        {name: L.irish_Coffee},
      ],
      All: [
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
      Latte: [
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
      Espresso: [
        {
          image: require('./Assets/image/dsc_08487.png'),
          name: 'Espresso',
          description: 'Enjoy the taste of natural coffee for a better day',
          value: '21',
        },
        {
          image: require('./Assets/image/dsc_08487.png'),
          name: 'Espresso',
          description: 'Enjoy the taste of natural coffee for a better day',
          value: '21',
        },
        {
          image: require('./Assets/image/dsc_08487.png'),
          name: 'Espresso',
          description: 'Enjoy the taste of natural coffee for a better day',
          value: '21',
        },
        {
          image: require('./Assets/image/dsc_08487.png'),
          name: 'Espresso',
          description: 'Enjoy the taste of natural coffee for a better day',
          value: '21',
        },
      ],
      Macchiato: [
        {
          image: require('./Assets/image/dsc_08487.png'),
          name: 'Macchiato',
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
          name: 'Macchiato',
          description: 'Enjoy the taste of natural coffee for a better day',
          value: '21',
        },
        {
          image: require('./Assets/image/dsc_08487.png'),
          name: 'Macchiato',
          description: 'Enjoy the taste of natural coffee for a better day',
          value: '21',
        },
      ],
      irish_Coffee: [
        {
          image: require('./Assets/image/dsc_08487.png'),
          name: 'irish Coffee',
          description: 'Enjoy the taste of natural coffee for a better day',
          value: '21',
        },
        {
          image: require('./Assets/image/dsc_08487.png'),
          name: 'irish Coffee',
          description: 'Enjoy the taste of natural coffee for a better day',
          value: '21',
        },
        {
          image: require('./Assets/image/dsc_08487.png'),
          name: 'irish Coffee',
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

  SelectCategories = ({item, index}) => {
    const {selected_page} = this.state;

    const isFocused = ({item, index}) => {
      LayoutAnimation.configureNext(LayoutAnimation.Presets.linear),
        this.setState({selected_page: index});
    };

    return (
      <View>
        <TouchableOpacity
          style={{
            ...styles.categories_select,
            borderBottomColor: selected_page === index ? white_color : null,
          }}
          onPress={() => isFocused({item, index})}
          activeOpacity={0.9}>
          <Text
            style={{
              ...styles.Regular_14pt_black,
              color: selected_page === index ? white_color : gray_color,
            }}>
            {item.name}
          </Text>
        </TouchableOpacity>
      </View>
    );
  };

  SelectAll = ({item, index}) => {
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
  SelectLatte = ({item, index}) => {
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
  SelectEspresso = ({item, index}) => {
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
  SelectMacchiato = ({item, index}) => {
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
  Selectirish_Coffee = ({item, index}) => {
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
    const {
      selected_page,
      All,
      DATA_Cate,
      Espresso,
      Latte,
      Macchiato,
      irish_Coffee,
    } = this.state;

    //PROPS

    //OTHER

    return (
      <View style={styles.container_black}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <FlatList
            data={DATA_Cate}
            horizontal={true}
            renderItem={this.SelectCategories}
            showsHorizontalScrollIndicator={false}
            keyExtractor={(item, index) => index.toString()}
          />
          {selected_page == 0 ? (
            <View>
              <FlatList
                data={All}
                showsVerticalScrollIndicator={false}
                renderItem={this.SelectAll}
                keyExtractor={(item, index) => index.toString()}
              />
            </View>
          ) : selected_page == 1 ? (
            <FlatList
              data={Latte}
              showsVerticalScrollIndicator={false}
              renderItem={this.SelectLatte}
              keyExtractor={(item, index) => index.toString()}
            />
          ) : selected_page == 2 ? (
            <View>
              <FlatList
                data={Espresso}
                showsVerticalScrollIndicator={false}
                renderItem={this.SelectEspresso}
                keyExtractor={(item, index) => index.toString()}
              />
            </View>
          ) : selected_page == 3 ? (
            <FlatList
              data={Macchiato}
              showsVerticalScrollIndicator={false}
              renderItem={this.SelectMacchiato}
              keyExtractor={(item, index) => index.toString()}
            />
          ) : selected_page == 4 ? (
            <View>
              <FlatList
                data={irish_Coffee}
                showsVerticalScrollIndicator={false}
                renderItem={this.Selectirish_Coffee}
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

export default Coffee;
