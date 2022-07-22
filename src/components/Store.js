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

class Store extends Component {
  constructor(props) {
    super(props);
    this.state = {
      love: false,
      add_cart: false,
      DATA: [
        {
          image: require('./Assets/image/img_0235.jpg'),
          name: 'Coffee Machine',
          description: 'Enjoy the taste of natural coffee for a better day',
          value: '21',
        },
        {
          image: require('./Assets/image/img_0235.jpg'),
          name: 'إسبرسو',
          description: 'استمتع بطعم القهوة الطبيعية ليوم أفضل',
          value: '21',
        },
        {
          image: require('./Assets/image/img_0235.jpg'),
          name: 'Coffee Machine',
          description: 'Enjoy the taste of natural coffee for a better day',
          value: '21',
        },
      ],
    };
  }

  SelectStore = ({item, index}) => {
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
      <View style={styles.view_1_flat_store}>
        <View style={styles.view_2_flat_store}>
          <View>
            <Image source={item?.image} style={styles.image_flat_store} />
            <View style={{justifyContent: 'flex-end'}}>
              <View style={styles.black_view_value_flat_store}>
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
            <View style={styles.des_flat_store}>
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
                  activeOpacity={1}
                  onPress={() => addToCart(item, index)}>
                  <View style={styles.addCort_view_flat_store}>
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
                  activeOpacity={0.9}
                  onPress={() => isFavorite(item, index)}>
                  <View style={styles.love_icon_view_flat_store}>
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
        </View>
        <View style={styles.line_end_flat_store} />

        <View style={{position: 'absolute', alignSelf: 'flex-end'}}>
          <AntDesign
            name="close"
            color={white_color}
            size={wp(4.5)}
            onPress={() => {
              let filteredItems = DATA.filter((item, Index) => Index != index);
              this.setState({DATA: filteredItems});
            }}
          />
        </View>
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
