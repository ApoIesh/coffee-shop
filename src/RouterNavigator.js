import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import ForgetPassword from './components/ForgetPassword';
import Profile from './components/Profile';
import Settings from './components/Settings';
import Home from './components/Home';
import LaunchScreen from './components/LaunchScreen';
import Notifications from './components/Notifications.js';
import Intro from './components/Intro';
import {L} from './config';
import EditProfile from './components/EditProfile';
import ItemDetails from './components/ItemDetails';
import styles, {
  black_color,
  gray_color,
  hp,
  white_color,
  wp,
} from './components/Assets/style/styles';
import SignUp from './components/SignUp';
import SignIn from './components/SignIn';
import VarifyCode from './components/VarifyCode';
import Coffee from './components/Coffee';
import Store from './components/Store';
import MoreMenu from './components/MoreMenu';
import {navigate} from './NavigationActions';
import AddPayment from './components/AddPayment';
import OrderDetails from './components/OrderDetails';
import Cart from './components/Cart';
import Checkout from './components/Checkout';
import OrderHistory from './components/OrderHistory';
import FailedRequest from './components/FailedRequest';
import SuccessRequest from './components/SuccessRequest';
import Icon from './components/Assets/common/Icon';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function TabComponent() {
  return (
    <Tab.Navigator
      initialRouteName={L.home}
      screenOptions={({route}) => ({
        tabBarLabelStyle: {paddingBottom: hp(0.5), fontSize: wp(2.5)},
        tabBarActiveTintColor: white_color,
        tabBarHideOnKeyboard: true,
        tabBarInactiveTintColor: 'gray',
        tabBarBackground: () => (
          <Image
            source={require('./components/Assets/image/group_2976.png')}
            style={{width: wp(100), height: hp(9)}}
          />
        ),
        tabBarStyle: {
          backgroundColor: '#020202',
          height: hp(6),
          elevation: 0,
          borderTopWidth: 0,
        },
      })}>
      <Tab.Screen
        name={L.More}
        component={MoreMenu}
        options={{
          tabBarIcon: ({focused}) => (
            <Image
              source={require('./components/Assets/image/more-tab.png')}
              style={{
                width: wp(4.3),
                height: wp(4.3),
                resizeMode: 'contain',
                tintColor: focused ? white_color : gray_color,
                marginTop: wp(3),
              }}
            />
          ),
          headerShown: false,
          headerStatusBarHeight: 50,
        }}
      />

      <Tab.Screen
        name={L.home}
        component={Home}
        options={{
          tabBarIcon: ({focused}) => (
            <Image
              source={require('./components/Assets/image/home-tab.png')}
              style={{
                width: wp(4.3),
                height: wp(4.3),
                resizeMode: 'contain',
                tintColor: focused ? white_color : gray_color,
              }}
            />
          ),
          headerShown: true,
          headerStyle: {
            backgroundColor: black_color,
            elevation: 0,
            borderBottomWidth: 0,
          },
          headerTintColor: white_color,
          headerTitleAlign: 'center',
          headerRight: () => (
            <TouchableOpacity
              activeOpacity={0.9}
              onPress={() => navigate(L.cart)}
              style={{flexDirection: 'row', marginEnd: wp(3)}}>
              <Icon
                type={'FontAwesome5'}
                size={wp(5.5)}
                name="shopping-bag"
                color={white_color}
              />
            </TouchableOpacity>
          ),
        }}
      />

      <Tab.Screen
        name={L.coffee}
        component={Coffee}
        options={{
          tabBarIcon: ({focused}) => (
            <Image
              source={require('./components/Assets/image/mug-1.png')}
              style={{
                width: wp(4.3),
                height: wp(4.3),
                resizeMode: 'contain',
                tintColor: focused ? white_color : gray_color,
              }}
            />
          ),
          headerShown: true,
          headerStyle: {
            backgroundColor: black_color,
            elevation: 0,
            borderBottomWidth: 0,
          },
          headerTintColor: white_color,
          headerTitleAlign: 'center',
          headerRight: () => (
            <View style={{flexDirection: 'row', marginEnd: wp(3)}}>
              <Icon
                type={'FontAwesome5'}
                size={wp(5.5)}
                name="shopping-bag"
                color={white_color}
                onPress={() => navigate(L.cart)}
              />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name={L.store}
        component={Store}
        options={{
          tabBarIcon: ({focused}) => (
            <Image
              source={require('./components/Assets/image/store_shop.png')}
              style={{
                width: wp(4.3),
                height: wp(4.3),
                resizeMode: 'contain',
                tintColor: focused ? white_color : gray_color,
              }}
            />
          ),
          headerShown: true,
          headerStyle: {
            backgroundColor: black_color,
            elevation: 0,
            borderBottomWidth: 0,
          },
          headerTintColor: white_color,
          headerTitleAlign: 'center',
          headerRight: () => (
            <View style={{flexDirection: 'row', marginEnd: wp(3)}}>
              <Icon
                type={'FontAwesome5'}
                size={wp(5.5)}
                name="shopping-bag"
                color={white_color}
                onPress={() => navigate(L.cart)}
              />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name={L.Profile}
        component={Profile}
        options={{
          tabBarIcon: ({focused}) => (
            <Image
              source={require('./components/Assets/image/profile-tab.png')}
              style={{
                width: wp(4.3),
                height: wp(4.3),
                resizeMode: 'contain',
                tintColor: focused ? white_color : gray_color,
                marginBottom: wp(1),
              }}
            />
          ),
          headerShown: true,
          headerStyle: {
            backgroundColor: black_color,
            elevation: 0,
            borderBottomWidth: 0,
          },
          headerTintColor: white_color,
          headerTitleAlign: 'center',
          headerRight: () => (
            <View style={{flexDirection: 'row', marginEnd: wp(3)}}>
              <Icon
                type={'FontAwesome5'}
                size={wp(5.5)}
                name="shopping-bag"
                color={white_color}
                onPress={() => navigate(L.cart)}
              />
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default function RouterNavigator() {
  return (
    <Stack.Navigator
      // initialRouteName={'TabComponent'}
      screenOptions={{headerShown: false}}>
      <Stack.Screen
        component={LaunchScreen}
        name="LaunchScreen"
        options={{headerShown: false}}
      />

      <Stack.Screen
        component={Intro}
        name="Intro"
        options={{headerShown: false}}
      />

      <Stack.Screen
        component={SignUp}
        name="SignUp"
        options={{headerShown: false}}
      />

      <Stack.Screen
        component={SignIn}
        name="SignIn"
        options={{headerShown: false}}
      />

      <Stack.Screen
        name="ForgetPassword"
        component={ForgetPassword}
        options={{
          headerShadowVisible: false,
        }}
      />

      <Stack.Screen
        name="VarifyCode"
        component={VarifyCode}
        options={{
          headerShadowVisible: false,
        }}
      />

      <Stack.Screen
        name={L.edit_profile}
        component={EditProfile}
        options={({navigation, route}) => ({
          headerShown: true,
          headerStyle: {
            backgroundColor: black_color,
            elevation: 0,
            borderBottomWidth: 0,
          },
          headerTintColor: white_color,
          headerTitleAlign: 'center',
          headerLeft: () => (
            <Icon
              type={'FontAwesome5'}
              size={wp(5)}
              name={L.icon_back}
              color={white_color}
              onPress={() => navigation.goBack()}
            />
          ),
          headerRight: () => (
            <Icon
              type={'FontAwesome5'}
              size={wp(5.5)}
              name="shopping-bag"
              color={white_color}
              onPress={() => navigate(L.cart)}
            />
          ),
        })}
      />

      <Stack.Screen
        name="AddPayment"
        component={AddPayment}
        options={{
          headerShadowVisible: false,
        }}
      />

      <Stack.Screen
        name="ItemDetails"
        component={ItemDetails}
        options={({navigation, route}) => ({
          headerShown: true,
          headerStyle: {
            backgroundColor: black_color,
            elevation: 0,
            borderBottomWidth: 0,
          },
          headerTintColor: black_color,
          headerTitleAlign: 'center',
          headerLeft: () => (
            <Icon
              type={'FontAwesome5'}
              size={wp(5)}
              name={L.icon_back}
              color={white_color}
              onPress={() => navigation.goBack()}
            />
          ),
          headerRight: () => (
            <Icon
              type={'FontAwesome5'}
              size={wp(5.5)}
              name="shopping-bag"
              color={white_color}
              onPress={() => navigate(L.cart)}
            />
          ),
        })}
      />

      <Stack.Screen
        name="OrderDetails"
        component={OrderDetails}
        options={({navigation, route}) => ({
          headerShown: true,
          headerStyle: {
            backgroundColor: black_color,
            elevation: 0,
            borderBottomWidth: 0,
          },
          headerTintColor: black_color,
          headerTitleAlign: 'center',
          headerLeft: () => (
            <Icon
              type={'FontAwesome5'}
              size={wp(5)}
              name={L.icon_back}
              color={white_color}
              onPress={() => navigation.goBack()}
            />
          ),
          headerRight: () => (
            <Icon
              type={'FontAwesome5'}
              size={wp(5.5)}
              name="shopping-bag"
              color={white_color}
              onPress={() => navigate(L.cart)}
            />
          ),
        })}
      />

      <Stack.Screen
        name={L.cart}
        component={Cart}
        options={({navigation, route}) => ({
          headerShown: true,
          headerStyle: {
            backgroundColor: black_color,
            elevation: 0,
            borderBottomWidth: 0,
          },
          headerTintColor: white_color,
          headerTitleAlign: 'center',
          headerLeft: () => (
            <Icon
              type={'FontAwesome5'}
              size={wp(5)}
              name={L.icon_back}
              color={white_color}
              onPress={() => navigation.goBack()}
            />
          ),
          headerRight: () => (
            <Icon
              type={'Ionicons'}
              size={wp(5.5)}
              name={'notifications-sharp'}
              color={white_color}
              onPress={() => navigate('Notifications')}
            />
          ),
        })}
      />

      <Stack.Screen
        name="Notifications"
        component={Notifications}
        options={({navigation, route}) => ({
          headerShown: true,
          headerStyle: {
            backgroundColor: black_color,
            elevation: 0,
            borderBottomWidth: 0,
          },
          headerTintColor: black_color,
          headerTitleAlign: 'center',
          headerLeft: () => (
            <Icon
              type={'FontAwesome5'}
              size={wp(5)}
              name={L.icon_back}
              color={white_color}
              onPress={() => navigation.goBack()}
            />
          ),
        })}
      />

      <Stack.Screen
        name={L.Checkout}
        component={Checkout}
        options={({navigation, route}) => ({
          headerShown: true,
          headerStyle: {
            backgroundColor: black_color,
            elevation: 0,
            borderBottomWidth: 0,
          },
          headerTintColor: white_color,
          headerTitleAlign: 'center',
          headerLeft: () => (
            <Icon
              type={'FontAwesome5'}
              size={wp(5)}
              name={L.icon_back}
              color={white_color}
              onPress={() => navigation.goBack()}
            />
          ),
          headerRight: () => (
            <Icon
              type={'Ionicons'}
              size={wp(5.5)}
              name={'notifications-sharp'}
              color={white_color}
              onPress={() => navigate('Notifications')}
            />
          ),
        })}
      />

      <Stack.Screen
        name={L.my_orders}
        component={OrderHistory}
        options={({navigation, route}) => ({
          headerShown: true,
          headerStyle: {
            backgroundColor: black_color,
            elevation: 0,
            borderBottomWidth: 0,
          },
          headerTintColor: white_color,
          headerTitleAlign: 'center',
          headerLeft: () => (
            <Icon
              type={'FontAwesome5'}
              size={wp(5)}
              name={L.icon_back}
              color={white_color}
              onPress={() => navigate('TabComponent')}
            />
          ),
          headerRight: () => (
            <Icon
              type={'Ionicons'}
              size={wp(5.5)}
              name={'notifications-sharp'}
              color={white_color}
              onPress={() => navigate('Notifications')}
            />
          ),
        })}
      />

      <Stack.Screen
        name={'FailedRequest'}
        component={FailedRequest}
        options={{
          headerShadowVisible: false,
          headerTitleStyle: {color: '#000'},
        }}
      />

      <Stack.Screen
        name={'SuccessRequest'}
        component={SuccessRequest}
        options={{
          headerShadowVisible: false,
          headerTitleStyle: {color: '#000'},
        }}
      />

      <Stack.Screen
        name={L.settings}
        component={Settings}
        options={{
          headerShadowVisible: false,
          headerTitleStyle: {color: '#000'},
        }}
      />

      <Stack.Screen name="TabComponent" component={TabComponent} />
    </Stack.Navigator>
  );
}
