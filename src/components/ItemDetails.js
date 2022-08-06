import React, {Component} from 'react';
import {TouchableOpacity, View, Text, Image, ScrollView} from 'react-native';
import {L} from '../config';
import styles, {black_color, hp, white_color, wp} from './Assets/style/styles';
import {navigate} from '../NavigationActions';
import Icon from './Assets/common/Icon';

class ItemDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      love: false,
      sel_shot: null,
      sel_milk: null,
      sel_ice: null,
      sel_quantity: 1,
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
    const {DATA, love, sel_shot, sel_milk, sel_ice, sel_quantity} = this.state;
    //PROPS

    //OTHER
    const icon_love = love == false ? 'heart-o' : 'heart';
    let shP = sel_shot == 1 ? 6 : null;
    const total = DATA.value * sel_quantity + shP * sel_quantity;
    return (
      <View style={styles.container_black}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.view_92}>
            <View style={styles.itemImageView}>
              <Image source={DATA.image} style={styles.imageItem} />
              <View style={styles.viewloveIcon}>
                <TouchableOpacity style={styles.viewloveIcon_1}>
                  <Icon
                    type={'FontAwesome'}
                    size={wp(4.8)}
                    name={icon_love}
                    color={white_color}
                    onPress={() => this.setState({love: !love})}
                  />
                </TouchableOpacity>
              </View>
            </View>

            <View style={{marginVertical: hp(2)}}>
              <Text style={styles.Bold_18pt_white}>{DATA.name}</Text>
              <Text
                style={[
                  styles.Light_14pt_gray,
                  {lineHeight: wp(6), marginTop: hp(1)},
                ]}>
                {DATA.description}
              </Text>
            </View>

            <View style={{marginVertical: hp(1)}}>
              <Text style={styles.Bold_18pt_white}>{L.Quantity}</Text>
              <View style={{flexDirection: 'row', marginVertical: hp(2.5)}}>
                <TouchableOpacity
                  activeOpacity={0.9}
                  onPress={() => {
                    if (sel_quantity > 1) {
                      this.setState({sel_quantity: sel_quantity - 1});
                    } else {
                      this.setState({sel_quantity: 1});
                    }
                  }}>
                  <View style={styles.buttom_quantity}>
                    <View style={styles.buttom_quantity_1} />
                  </View>
                </TouchableOpacity>
                <View
                  style={{marginHorizontal: wp(6), justifyContent: 'center'}}>
                  <Text style={styles.Bold_14pt_white}>{sel_quantity}</Text>
                </View>

                <TouchableOpacity
                  activeOpacity={0.9}
                  onPress={() =>
                    this.setState({sel_quantity: sel_quantity + 1})
                  }>
                  <View style={styles.buttom_quantity}>
                    <Text style={[styles.Bold_18pt_black]}>+</Text>
                  </View>
                </TouchableOpacity>
              </View>
            </View>

            <View style={{marginVertical: hp(1)}}>
              <Text style={styles.Bold_18pt_white}>{L.Shots}</Text>
              <View style={{flexDirection: 'row', marginVertical: hp(2.5)}}>
                <TouchableOpacity
                  activeOpacity={0.9}
                  onPress={() => this.setState({sel_shot: 1})}>
                  <View
                    style={{
                      backgroundColor:
                        sel_shot == 1 ? white_color : black_color,
                      ...styles.buttom_select,
                    }}>
                    <Text
                      style={[
                        sel_shot == 1
                          ? styles.Regular_14pt_black
                          : styles.Regular_14pt_white,
                      ]}>
                      Extra Shot (6.00)
                    </Text>
                  </View>
                </TouchableOpacity>

                <TouchableOpacity
                  activeOpacity={0.9}
                  onPress={() => this.setState({sel_shot: 2})}>
                  <View
                    style={{
                      backgroundColor:
                        sel_shot == 2 ? white_color : black_color,
                      ...styles.buttom_select,
                    }}>
                    <Text
                      style={[
                        sel_shot == 2
                          ? styles.Regular_14pt_black
                          : styles.Regular_14pt_white,
                      ]}>
                      Single shot
                    </Text>
                  </View>
                </TouchableOpacity>
              </View>
            </View>

            <View style={{marginVertical: hp(1)}}>
              <Text style={styles.Bold_18pt_white}>{L.Milk}</Text>
              <View style={{flexDirection: 'row', marginVertical: hp(2.5)}}>
                <TouchableOpacity
                  activeOpacity={0.9}
                  onPress={() => this.setState({sel_milk: 1})}>
                  <View
                    style={{
                      backgroundColor:
                        sel_milk == 1 ? white_color : black_color,
                      ...styles.buttom_select,
                    }}>
                    <Text
                      style={[
                        sel_milk == 1
                          ? styles.Regular_14pt_black
                          : styles.Regular_14pt_white,
                      ]}>
                      Low Fat Milk
                    </Text>
                  </View>
                </TouchableOpacity>

                <TouchableOpacity
                  activeOpacity={0.9}
                  onPress={() => this.setState({sel_milk: 2})}>
                  <View
                    style={{
                      backgroundColor:
                        sel_milk == 2 ? white_color : black_color,
                      ...styles.buttom_select,
                    }}>
                    <Text
                      style={[
                        sel_milk == 2
                          ? styles.Regular_14pt_black
                          : styles.Regular_14pt_white,
                      ]}>
                      Skim Milk
                    </Text>
                  </View>
                </TouchableOpacity>
              </View>
            </View>

            <View style={{marginVertical: hp(1)}}>
              <Text style={styles.Bold_18pt_white}>{L.Ice}</Text>
              <View style={{flexDirection: 'row', marginVertical: hp(2.5)}}>
                <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                  <TouchableOpacity
                    activeOpacity={0.9}
                    onPress={() => this.setState({sel_ice: 1})}>
                    <View
                      style={{
                        backgroundColor:
                          sel_ice == 1 ? white_color : black_color,
                        ...styles.buttom_select,
                      }}>
                      <Text
                        style={[
                          sel_ice == 1
                            ? styles.Regular_14pt_black
                            : styles.Regular_14pt_white,
                        ]}>
                        Less ice
                      </Text>
                    </View>
                  </TouchableOpacity>

                  <TouchableOpacity
                    activeOpacity={0.9}
                    onPress={() => this.setState({sel_ice: 2})}>
                    <View
                      style={{
                        backgroundColor:
                          sel_ice == 2 ? white_color : black_color,
                        ...styles.buttom_select,
                      }}>
                      <Text
                        style={[
                          sel_ice == 2
                            ? styles.Regular_14pt_black
                            : styles.Regular_14pt_white,
                        ]}>
                        Extra ice
                      </Text>
                    </View>
                  </TouchableOpacity>

                  <TouchableOpacity
                    activeOpacity={0.9}
                    onPress={() => this.setState({sel_ice: 3})}>
                    <View
                      style={{
                        backgroundColor:
                          sel_ice == 3 ? white_color : black_color,
                        ...styles.buttom_select,
                      }}>
                      <Text
                        style={[
                          sel_ice == 3
                            ? styles.Regular_14pt_black
                            : styles.Regular_14pt_white,
                        ]}>
                        No ice
                      </Text>
                    </View>
                  </TouchableOpacity>
                </ScrollView>
              </View>
            </View>
          </View>
        </ScrollView>

        <View style={{flexDirection: 'row'}}>
          <TouchableOpacity>
            <View style={styles.total_sec}>
              <Text style={styles.Bold_18pt_white}>{L.total}</Text>
              <Text style={styles.Bold_25pt_white}>
                {total}
                {L.currency}
              </Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            activeOpacity={0.9}
            onPress={() => navigate('OrderDetails')}>
            <View style={styles.checkoutItemDetails}>
              <Icon
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

export default ItemDetails;
