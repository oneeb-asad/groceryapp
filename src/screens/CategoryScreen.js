import React from 'react';
import {View, Text, StyleSheet, FlatList, Image} from 'react-native';
import {ColorConst} from '../constants/ColorConstant';
import {ImageConst} from '../constants/ImageConstant';
import {Vegetables, Vegetables1, Fruits} from '../utils/Utility';

const CategoryScreen = () => {
  function Vegetable({item}) {
    return (
      <View style={styles.vegetableFlatlist}>
        <View style={styles.vegetableDetailFlatlist}>
          <Image source={item.img} style={{width: 96, height: 89}} />
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
              lineHeight: 18,
            }}>
            weight:{item.weight}
          </Text>
          <Text
            style={{
              fontSize: 16,
              fontWeight: '700',
              color: ColorConst.black2,
            }}>
            {item.price}
          </Text>
        </View>
      </View>
    );
  }

  function Vegetable1({item}) {
    return (
      <View style={styles.vegetableFlatlist}>
        <View style={styles.vegetableDetailFlatlist}>
          <Image source={item.img} style={{width: 96, height: 89}} />
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
              lineHeight: 18,
            }}>
            weight:{item.weight}
          </Text>
          <Text
            style={{
              fontSize: 16,
              fontWeight: '700',
              color: ColorConst.black2,
            }}>
            {item.price}
          </Text>
        </View>
      </View>
    );
  }

  function Fruit({item}) {
    return (
      <View style={styles.fruitFlatlist}>
        <View style={styles.fruitDetailFlatlist}>
          <Image source={item.img} style={{width: 96, height: 89}} />
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
              lineHeight: 18,
            }}>
            weight:{item.weight}
          </Text>
          <Text
            style={{
              fontSize: 16,
              fontWeight: '700',
              color: ColorConst.black2,
            }}>
            {item.price}
          </Text>
        </View>
      </View>
    );
  }

  return (
    <View style={styles.mainView}>
      <View style={{flex: 0.6, marginVertical: 30, paddingVertical: 30}}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginHorizontal: 20,
            alignItems: 'center',
          }}>
          <Text
            style={{fontSize: 24, fontWeight: '700', color: ColorConst.black2}}>
            Vegetables
          </Text>
          <Text
            style={{fontSize: 14, fontWeight: '400', color: ColorConst.black2}}>
            Show All
          </Text>
        </View>

        <FlatList
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          data={Vegetables}
          renderItem={({item}) => <Vegetable item={item} />}
          keyExtractor={item => item.id}
        />

        <FlatList
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          data={Vegetables1}
          renderItem={({item}) => <Vegetable1 item={item} />}
          keyExtractor={item => item.id}
        />
      </View>

      <View style={{flex: 0.4}}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginHorizontal: 20,
            alignItems: 'center',
          }}>
          <Text
            style={{fontSize: 24, fontWeight: '700', color: ColorConst.black2}}>
            Fruits
          </Text>
          <Text
            style={{fontSize: 14, fontWeight: '400', color: ColorConst.black2}}>
            Show All
          </Text>
        </View>

        <FlatList
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          data={Fruits}
          renderItem={({item}) => <Fruit item={item} />}
          keyExtractor={item => item.id}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainView: {
    flex: 1,
    backgroundColor: ColorConst.backgroundColor,
    // marginVertical: 20,
  },
  secondView: {
    flex: 0.1,
    marginVertical: 40,
  },
  txtStyle: {
    position: 'absolute',
    fontStyle: 'normal',
    width: 121,
    height: 22,
    top: 24,
    left: 24,
    fontSize: 18,
    color: ColorConst.black,
    fontWeight: '600',
    lineHeight: 22,
  },
  txtStyle1: {
    position: 'absolute',
    fontStyle: 'normal',
    width: 64,
    height: 32,
    top: 55,
    left: 24,
    fontSize: 18,
    color: ColorConst.black,
    fontWeight: '700',
    lineHeight: 32,
  },
  txtStyle2: {
    position: 'absolute',
    fontStyle: 'normal',
    width: 120,
    height: 22,
    // top: 96,
    left: 20,
    fontSize: 14,
    color: ColorConst.black,
    fontWeight: '400',
    lineHeight: 22,
  },
  thirdView: {
    flexDirection: 'row',
    marginHorizontal: 26,
    alignItems: 'center',
  },
  imgView: {
    position: 'absolute',
    width: 72,
    height: 72,
    left: 312,
    top: 35,
    borderRadius: 8,
    backgroundColor: '#f4fcfc',
  },
  imgStyle: {
    alignSelf: 'center',
    width: 60,
    height: 60,
    top: 8,
  },

  vegetableFlatlist: {
    width: 130,
    height: 163,
    backgroundColor: ColorConst.white,
    // flexDirection: 'row',
    marginHorizontal: 10,
    marginVertical: 20,
    borderRadius: 12,
    // padding: 10,

    // elevation: 6,
  },
  vegetableDetailFlatlist: {
    // flex: 0.5,
    marginHorizontal: 8,
  },

  fruitFlatlist: {
    width: 130,
    height: 163,
    backgroundColor: ColorConst.white,
    // flexDirection: 'row',
    marginHorizontal: 10,
    marginVertical: 20,
    borderRadius: 12,
    // padding: 10,

    // elevation: 6,
  },
  fruitDetailFlatlist: {
    // flex: 0.5,
    marginHorizontal: 8,
  },
});
export default CategoryScreen;
