import React from 'react';
import {
  StyleSheet,
  View,
  TouchableHighlight,
  TouchableNativeFeedback,
  Platform,
  Dimensions,
  FlatList,
  Image,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import {CustomView, Text, Button} from '../../components';
import {colors} from '../../theme';
import Icon from 'react-native-vector-icons/Feather';

export default function Guest() {
  const {goBack} = useNavigation();

  const Touchable: any =
      Platform.OS === 'ios' ? TouchableHighlight : TouchableNativeFeedback,
    awards = [
      {
        title: 'Kaos',
        image:
          'https://dynamic.zacdn.com/sRL5Bi-Z-KAq-4RK_IKzFY5WNd4=/fit-in/346x500/filters:quality(90):fill(ffffff)/http://static.id.zalora.net/p/orkids-wear-6509-0619512-1.jpg',
        point: 1000,
      },
      {
        title: 'Sepeda',
        image:
          'https://cdn2.tstatic.net/jabar/foto/bank/images/sepeda-lipat-united-stylo-16.jpg',
        point: 25000,
      },
      {
        title: 'Sepatu',
        image:
          'https://ecs7.tokopedia.net/img/cache/700/product-1/2018/9/21/11481865/11481865_99c50329-c1f9-4bb6-a2fb-c7235ed11f12_1000_1000.jpg',
        point: 1000,
      },
      {
        title: 'Tas',
        image:
          'https://www.jakartanotebook.com/images/products/19/63/27854/2/tas-ransel-backpack-oxford-dengan-usb-charger-port-black-2.jpg',
        point: 1000,
      },
    ];

  const renderItem = ({item}: any) => {
    return (
      <View style={styles.boxData}>
        <View style={styles.point}>
          <Text type="bold" color="gold">
            {item.point} P
          </Text>
        </View>
        <View style={styles.imageBox}>
          <Image source={{uri: item.image}} style={styles.image} />
        </View>
        <View style={styles.boxAward}>
          <Text type="regular" color="white">
            {item.title}
          </Text>

          <Button style={styles.buttonAdd}>
            <Text type="semibold" color="white">
              Ambil
            </Text>
          </Button>
        </View>
      </View>
    );
  };

  return (
    <CustomView>
      <View style={styles.container}>
        <Touchable
          onPress={() => goBack()}
          background={TouchableNativeFeedback.Ripple('', true)}
          style={Platform.OS === 'ios' && styles.backButton}>
          <View style={Platform.OS !== 'ios' && styles.backButton}>
            <Icon name="arrow-left" color={colors.white} size={24} />
          </View>
        </Touchable>
        <Text type="bold" color="white" size={10}>
          Ambil Hadiah
        </Text>
      </View>
      <FlatList
        style={{alignSelf: 'center'}}
        numColumns={2}
        data={awards}
        keyExtractor={(item, index: any) => index}
        renderItem={renderItem}
      />
    </CustomView>
  );
}

const styles = StyleSheet.create({
  container: {
    height: Dimensions.get('window').height * 0.11,
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: 20,
    paddingLeft: 10,
    backgroundColor: colors.primary,
  },
  backButton: {
    height: 50,
    width: 50,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
  },
  boxData: {
    width: Dimensions.get('window').width / 2.5,
    backgroundColor: colors.primary,
    margin: 10,
    borderRadius: 10,
    alignItems: 'center',
  },
  image: {
    height: 120,
    width: 100,
    alignSelf: 'center',
  },
  imageBox: {
    width: Dimensions.get('window').width / 2.5,
    backgroundColor: colors.white,
    borderRadius: 10,
    resizeMode: 'stretch',
  },
  buttonAdd: {
    paddingVertical: 5,
    paddingHorizontal: 15,
    borderWidth: 1,
    borderColor: 'white',
    borderRadius: 5,
    marginTop: 5,
  },
  boxAward: {
    marginVertical: 10,
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: 20,
  },
  point: {
    position: 'absolute',
    zIndex: 100,
    right: 10,
    top: 5,
    backgroundColor: colors.gray4,
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 10,
  },
});
