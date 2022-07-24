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

class OrderHistory extends Component {
  constructor(props) {
    super(props);
    this.state = {
      select: 0,
      DATA: [
        {
          image: require('./Assets/image/dsc_08487.png'),
          name: 'Latte',
          description: 'Enjoy the taste of natural coffee for a better day',
          currency: 'EGP',
          value: '50',
        },
        {
          image: require('./Assets/image/dsc_08487.png'),
          name: 'Latte',
          description: 'Enjoy the taste of natural coffee for a better day',
          currency: 'EGP',
          value: '27',
        },
      ],
    };
  }

  renderOrder = ({item, index}) => {
    return (
      <View
        style={{
          backgroundColor: white_color,
          borderRadius: hp(3),
          marginVertical: hp(1.5),
        }}>
        <View style={{flexDirection: 'row'}}>
          <View
            style={{
              justifyContent: 'center',
              alignSelf: 'center',
              height: hp(16),
              marginStart: hp(1),
            }}>
            <Image
              source={item?.image}
              style={{
                resizeMode: 'cover',
                width: wp(24),
                height: hp(14),
                borderRadius: hp(3),
                borderWidth: wp(0.4),
                borderColor: white_color,
              }}
            />
            <View style={{justifyContent: 'flex-end'}}>
              <View style={styles.black_view_value_flat_store}>
                <ImageBackground
                  borderRadius={wp(5)}
                  borderTopLeftRadius={wp(0)}
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
          <View
            style={{
              flexDirection: 'column',
              justifyContent: 'center',
              alignSelf: 'center',
              width: wp(55),
              height: hp(10),
              marginStart: wp(3),
            }}>
            <Text style={styles.Bold_14pt_black}>{item?.name}</Text>
            <Text
              style={[
                styles.Light_12pt_black,
                {lineHeight: hp(2.5), marginTop: wp(2.2)},
              ]}>
              {item?.description}
            </Text>
          </View>
        </View>

        <View style={{alignSelf: 'flex-end', position: 'absolute'}}>
          <View
            style={{
              width: wp(22),
              height: wp(8.5),
              borderWidth: wp(0.5),
              borderColor: white_color,
              backgroundColor: '#57f090',
              alignItems: 'center',
              justifyContent: 'center',
              borderBottomStartRadius: hp(3),
              borderTopEndRadius: hp(3),
            }}>
            <Image
              source={require('./Assets/image/group_2978.png')}
              style={{
                resizeMode: 'cover',
                width: wp(20),
                height: wp(7.5),
                // borderWidth: wp(0.5),
                // borderColor: white_color,
                position: 'absolute',
                borderRadius: hp(3),
                // borderTopRightRadius: hp(3),
                // borderBottomLeftRadius: hp(3),
              }}
            />
            <Text style={styles.Regular_12pt_white}>Ongoing</Text>
          </View>
        </View>
      </View>
    );
  };

  render() {
    //STATE
    const {DATA, select} = this.state;
    //PROPS

    //OTHER

    return (
      <View style={styles.container_black}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.view_92}>
            <View
              style={{
                borderWidth: wp(0.2),
                borderColor: gray_color,
                borderRadius: hp(5),
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginVertical: hp(5),
                alignItems: 'center',
              }}>
              <TouchableOpacity
                activeOpacity={0.9}
                onPress={() => this.setState({select: 0})}>
                <View
                  style={{
                    alignItems: 'center',
                    justifyContent: 'center',
                    height: hp(6),
                    width: wp(30),
                    borderRadius: hp(5),
                    backgroundColor: select == 0 ? white_color : null,
                  }}>
                  <Text
                    style={[
                      select == 0
                        ? styles.Bold_16pt_black
                        : styles.Regular_14pt_gray,
                    ]}>
                    {L.Ongoing}
                  </Text>
                </View>
              </TouchableOpacity>

              <TouchableOpacity
                activeOpacity={0.9}
                onPress={() => this.setState({select: 1})}>
                <View
                  style={{
                    alignItems: 'center',
                    justifyContent: 'center',
                    height: hp(6),
                    width: wp(30),
                    borderRadius: hp(5),
                    backgroundColor: select == 1 ? white_color : null,
                  }}>
                  <Text
                    style={[
                      select == 1
                        ? styles.Bold_16pt_black
                        : styles.Regular_14pt_gray,
                    ]}>
                    {L.Canceled}
                  </Text>
                </View>
              </TouchableOpacity>

              <TouchableOpacity
                activeOpacity={0.9}
                onPress={() => this.setState({select: 2})}>
                <View
                  style={{
                    alignItems: 'center',
                    justifyContent: 'center',
                    height: hp(6),
                    width: wp(30),
                    borderRadius: hp(5),
                    backgroundColor: select == 2 ? white_color : null,
                  }}>
                  <Text
                    style={[
                      select == 2
                        ? styles.Bold_16pt_black
                        : styles.Regular_14pt_gray,
                    ]}>
                    {L.Finished}
                  </Text>
                </View>
              </TouchableOpacity>
            </View>

            <FlatList
              data={DATA}
              showsVerticalScrollIndicator={false}
              renderItem={this.renderOrder}
              keyExtractor={(item, index) => index.toString()}
            />
          </View>
        </ScrollView>
      </View>
    );
  }
}

export default OrderHistory;
