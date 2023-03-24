import React from 'react';
import {HeaderBackButton} from '@react-navigation/elements';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {
  StyleSheet,
  View,
  Text,
  Pressable,
  Image,
  TouchableOpacity,
  Platform,
} from 'react-native';
import {getFocusedRouteNameFromRoute} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {ImageConst} from '../constants/ImageConstant';
import Cart from './Cart';
import CategoryScreen from './CategoryScreen';
import HomeScreen from './HomeScreen';
import DetailScreen from './DetailScreen';
import {ColorConst} from '../constants/ColorConstant';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const HomeStack = ({navigation, route}) => {
  React.useLayoutEffect(() => {
    const routeName = getFocusedRouteNameFromRoute(route);
    if (routeName === 'Detail' || routeName === 'Cart') {
      navigation.setOptions({tabBarStyle: {display: 'none'}});
    } else {
      navigation.setOptions({tabBarStyle: {display: 'flex'}});
    }
  }, [navigation, route]);

  return (
    <Stack.Navigator
      screenOptions={({navigation}) => ({
        headerLeft: () => (
          <View
            style={{
              flexDirection: 'row',
            }}>
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <Image
                source={ImageConst.backarrow}
                style={{width: 10.5, height: 21}}
              />
            </TouchableOpacity>
          </View>
        ),
      })}>
      <Stack.Screen
        options={{
          headerShown: false,
          title: '',
        }}
        name="Home"
        component={HomeScreen}
      />

      <Stack.Screen
        options={{
          headerShown: true,
          headerStyle: {
            backgroundColor: ColorConst.backgroundColor,
          },
          headerShadowVisible: false,
          title: '',
        }}
        name="Detail"
        component={DetailScreen}
      />

      <Stack.Screen
        options={{
          headerShown: true,
          headerStyle: {
            backgroundColor: ColorConst.backgroundColor,
          },
          headerShadowVisible: false,
          title: '',
        }}
        name="Cart"
        component={Cart}
      />
    </Stack.Navigator>
  );
};

function MyTabs() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: {
          height: Platform.OS === 'ios' ? 70 : 65,
        },
        tabBarShowLabel: false,
        tabBarHideOnKeyboard: true,
      }}>
      <Tab.Screen
        options={{
          headerShown: false,
          tabBarIcon: ({focused}) => {
            return focused ? (
              <Image source={ImageConst.homeFocused} />
            ) : (
              <Image source={ImageConst.homeUnfocused} />
            );
          },
        }}
        name="HomeStack"
        component={HomeStack}
      />
      <Tab.Screen
        options={{
          headerShown: false,
          tabBarIcon: ({focused}) => {
            return focused ? (
              <Image source={ImageConst.categoryFocused} />
            ) : (
              <Image source={ImageConst.categoryUnFocused} />
            );
          },
        }}
        name="Category"
        component={CategoryScreen}
      />

      <Tab.Screen
        options={{
          headerShown: false,
          tabBarIcon: ({focused}) => {
            return focused ? (
              <Image
                source={ImageConst.cartUnFocused}
                style={{widht: 21, height: 21}}
              />
            ) : (
              <Image source={ImageConst.cart} />
            );
          },
        }}
        name="Cart"
        component={Cart}
      />
    </Tab.Navigator>
  );
}
export default MyTabs;
