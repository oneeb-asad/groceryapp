import React from 'react';
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
import {Products, TopProducts, Recomendations} from '../utils/Utility';

const HomeScreen = props => {
  function Card({item}) {
    return (
      <View style={styles.cardFlatlist}>
        <View style={styles.detailFlatlist}>
          <Image source={item.img} />
          <Text
            style={{
              fontSize: 14,
              fontWeight: '600',
              color: ColorConst.grey,
              lineHeight: 16,
            }}>
            {item.name}
          </Text>
        </View>
      </View>
    );
  }

  function TopProduct({item}) {
    return (
      <TouchableOpacity
        key={item.id}
        style={styles.topProdFlatlist}
        onPress={() => props.navigation.navigate('Detail', {item: item})}>
        <View style={styles.topProdDetailFlatlist}>
          <Image source={item.img} style={{width: 122, height: 113}} />
          <Text
            style={{
              fontSize: 16,
              fontWeight: '700',
              color: ColorConst.black2,
              marginHorizontal: 10,
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
              marginHorizontal: 10,
            }}>
            weight:{item.weight}
          </Text>
          <Text
            style={{
              fontSize: 16,
              fontWeight: '700',
              color: ColorConst.black2,
              marginHorizontal: 10,
            }}>
            {item.price}
          </Text>
        </View>
      </TouchableOpacity>
    );
  }

  function Recomendation({item}) {
    return (
      <View style={styles.recomendationFlatlist}>
        <View>
          <Image source={item.img} />
        </View>
        <View style={styles.recomandationDetailFlatlist}>
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
              fontSize: 14,
              fontWeight: '400',
              color: ColorConst.black2,
              //   lineHeight: 22,
            }}>
            weight:{item.weight}
          </Text>
          <Text
            style={{
              fontSize: 14,
              fontWeight: '700',
              color: ColorConst.black2,
              //   lineHeight: 22,
            }}>
            {item.price}
          </Text>
        </View>
      </View>
    );
  }

  return (
    <View style={styles.mainView}>
      <View style={styles.secondView}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'flex-end',
            alignItems: 'center',
          }}>
          <Text style={styles.txtStyle}>Good Morning</Text>
          <Text style={styles.txtStyle1}>Oneeb</Text>
          <View style={styles.imgView}>
            <Image style={styles.imgStyle} source={ImageConst.user} />
          </View>
        </View>
      </View>
      <View style={styles.thirdView}>
        <Image source={ImageConst.pin} />
        <Text style={styles.txtStyle2}>Rawalpindi</Text>
      </View>
      <View style={{flex: 0.1, marginVertical: 20}}>
        <FlatList
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          data={Products}
          renderItem={({item}) => <Card item={item} />}
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
            Top Products
          </Text>
          <Text
            style={{fontSize: 14, fontWeight: '400', color: ColorConst.black2}}>
            Show All
          </Text>
        </View>

        <FlatList
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          data={TopProducts}
          renderItem={({item}) => <TopProduct item={item} />}
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
            Recomendation
          </Text>
          <Text
            style={{fontSize: 14, fontWeight: '400', color: ColorConst.black2}}>
            Show All
          </Text>
        </View>

        <FlatList
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          data={Recomendations}
          renderItem={({item}) => <Recomendation item={item} />}
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
  cardFlatlist: {
    widht: 66,
    height: 40,
    backgroundColor: ColorConst.white,
    // flexDirection: 'row',
    marginHorizontal: 20,
    marginVertical: 20,
    borderRadius: 40,
    padding: 10,

    // elevation: 6,
  },
  detailFlatlist: {
    // flex: 0.5,
    marginHorizontal: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },

  topProdFlatlist: {
    // flex: 1,
    width: 156,
    height: 182,
    backgroundColor: ColorConst.white,
    // flexDirection: 'row',
    marginHorizontal: 10,
    marginVertical: 20,
    borderRadius: 12,
    // padding: 10,

    // elevation: 6,
  },
  topProdDetailFlatlist: {
    // flex: 0.5,
    marginHorizontal: 8,
  },

  recomendationFlatlist: {
    width: 210,
    height: 84,
    backgroundColor: ColorConst.white,
    flexDirection: 'row',
    marginHorizontal: 10,
    marginVertical: 20,
    borderRadius: 12,
    padding: 10,

    // elevation: 6,
  },
  recomandationDetailFlatlist: {
    // flex: 0.5,
    marginHorizontal: 8,
    // flexDirection: 'row',
  },
});

export default HomeScreen;
