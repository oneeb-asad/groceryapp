import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import {ColorConst} from '../constants/ColorConstant';
import {ImageConst} from '../constants/ImageConstant';
import {useDispatch, useSelector} from 'react-redux';
import {
  addToCart,
  decrementQuantity,
  incrementQuantity,
} from '../../Redux/CartReducer';

const DetailScreen = props => {
  const {item} = props?.route?.params;
  const cart = useSelector(state => state.cart.cart);
  const dispatch = useDispatch();
  const addItemToCart = item => {
    dispatch(addToCart(item));
  };

  return (
    <View
      style={{
        height: '150%',
        backgroundColor: ColorConst.backgroundColor,
        alignItems: 'center',
      }}>
      <Text style={{fontSize: 28, fontWeight: '700', lineHeight: 33, top: 146}}>
        {item?.name}
      </Text>
      <Text
        style={{
          fontSize: 18,
          fontWeight: '500',
          lineHeight: 21,
          top: 160,
          color: '#606368',
        }}>
        {item?.name == 'Brocolli' ? 'Vegetables' : 'Fruits'}
      </Text>
      <Image
        source={
          item?.name == 'Brocolli' ? ImageConst.brocolli : ImageConst.banana
        }
        style={{top: 160, width: 250, height: 180}}
      />

      <Text
        style={{
          fontSize: 28,
          fontWeight: '700',
          lineHeight: 32,
          top: 180,
          color: '#1b1b1b',
        }}>
        {item?.price}
      </Text>

      {/* <View style={{flexDirection: 'row'}}>
        <TouchableOpacity onPress={() => decreaseQuantity(item)}>
          <Text
            style={{
              width: 36,
              height: 36,
              fontSize: 40,
              top: 200,
              marginHorizontal: 5,
            }}>
            -
          </Text>
        </TouchableOpacity>

        <Text style={{fontSize: 26, top: 210, marginHorizontal: 5}}>
          {item.quantity}
        </Text>
        <TouchableOpacity onPress={() => increaseQuantity(item)}>
          <Text
            style={{
              width: 36,
              height: 36,
              fontSize: 40,
              top: 197,
              left: 5,
              marginHorizontal: 5,
            }}>
            {' '}
            +
          </Text>
        </TouchableOpacity>
      </View> */}

      <TouchableOpacity
        onPress={() => addItemToCart(item, props.navigation.navigate('Cart'))}
        style={{
          backgroundColor: ColorConst.orange,
          width: 366,
          height: 64,
          top: 345,
          borderRadius: 8,
        }}>
        <Text
          style={{
            alignSelf: 'center',
            padding: 20,
            fontSize: 20,
            color: ColorConst.white,
          }}>
          Add to cart
        </Text>
      </TouchableOpacity>
    </View>
  );
};
export default DetailScreen;
