import React, {useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  FlatList,
  TouchableOpacity,
  Alert,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {ColorConst} from '../constants/ColorConstant';

const Cart = props => {
  const cart = useSelector(state => state.cart.cart);

  function Cart({item}) {
    return (
      <View style={styles.cartFlatlist}>
        <View>
          <Image source={item.img} style={{width: 96, height: 89}} />

          <Text
            style={{
              fontSize: 12,
              fontWeight: '700',
              color: ColorConst.black2,
              alignSelf: 'center',

              //   lineHeight: 22,
            }}>
            {item.price}
          </Text>
        </View>
        <View style={styles.cartDetailFlatlist}>
          <Text
            style={{
              fontSize: 16,
              fontWeight: '700',
              color: ColorConst.black2,
              //   lineHeight: 22,
            }}>
            {item.name}
          </Text>
          <Text
            style={{
              fontSize: 12,
              fontWeight: '400',
              color: ColorConst.black2,
              //   lineHeight: 22,
            }}>
            Total Quantity is {item.quantity}
          </Text>
        </View>
      </View>
    );
  }
  return (
    <View style={{flex: 1, backgroundColor: ColorConst.backgroundColor}}>
      <FlatList
        data={cart}
        renderItem={({item}) => <Cart item={item} />}
        keyExtractor={item => item.id}
      />

      <View style={{flex: 0.15, margin: 14}}>
        <TouchableOpacity
          onPress={() =>
            Alert.alert('Check-out!', 'Order Placed', [
              {
                text: 'OK',
                onPress: () => {
                  props.navigation.navigate('Home');
                },
              },
            ])
          }
          style={{
            backgroundColor: ColorConst.orange,
            width: 366,
            height: 64,
            // top: 345,
            borderRadius: 8,
          }}>
          <Text
            style={{
              alignSelf: 'center',
              padding: 20,
              fontSize: 20,
              color: ColorConst.white,
            }}>
            Checkout
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  cartFlatlist: {
    width: 363,
    height: 130,
    backgroundColor: ColorConst.white,
    flexDirection: 'row',
    marginHorizontal: 10,
    marginVertical: 20,
    borderRadius: 12,
    padding: 10,
    top: 100,
    left: 5,

    // elevation: 6,
  },
  cartDetailFlatlist: {
    // flex: 0.5,
    marginHorizontal: 1,
    padding: 20,
    // flexDirection: 'row',
  },
});
export default Cart;
