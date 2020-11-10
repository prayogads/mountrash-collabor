import React from 'react';
import {
  StyleSheet,
  View,
  TouchableHighlight,
  TouchableNativeFeedback,
  Platform,
  Dimensions,
  FlatList,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import {CustomView, Text} from '../../components';
import {colors} from '../../theme';
import Icon from 'react-native-vector-icons/Feather';

export default function Guest() {
  const {goBack} = useNavigation();

  const Touchable: any =
      Platform.OS === 'ios' ? TouchableHighlight : TouchableNativeFeedback,
    point = [
      {
        title: 'Sampah Plastik',
        point: 80,
        weekPoint: 20,
      },
      {
        title: 'Sampah Kertas',
        point: 300,
        weekPoint: 60,
      },
      {
        title: 'Sampah Kaca',
        point: 17,
        weekPoint: 89,
      },
      {
        title: 'Sampah Organik',
        point: 243,
        weekPoint: 700,
      },
      {
        title: 'Sampah Logam',
        point: 10,
        weekPoint: 700,
      },
    ];

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
          Poin Kamu
        </Text>
      </View>

      <FlatList
        data={point}
        keyExtractor={(item, index: any) => index}
        renderItem={({item}: any) => (
          <View style={styles.boxPoint}>
            <Text type="bold">{item.title}</Text>
            <Text type="regular" color="grey">
              {`Level kamu saat ini ${
                item.point >= 100
                  ? 'Rookie'
                  : item.point >= 300
                  ? 'Knight'
                  : item.point >= 500
                  ? 'Conquer'
                  : 'First'
              }`}
            </Text>
            <View style={styles.viewPoint}>
              <View style={styles.viewBox}>
                <Text type="bold" size={20} color={colors.success}>
                  {item.point}
                </Text>
                <Text type="regular">Semua Poin</Text>
              </View>
              <View style={styles.viewBox}>
                <Text
                  type="bold"
                  size={20}
                  style={styles.textBoxHeader}
                  color={colors.warning}>
                  {item.weekPoint}
                </Text>
                <Text type="regular">Poin Mingguan</Text>
              </View>
            </View>
          </View>
        )}
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
  boxPoint: {
    width: '100%',
    backgroundColor: 'white',
    padding: 20,
    marginVertical: 10,
  },
  viewPoint: {
    marginVertical: 30,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  viewBox: {
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  textBoxHeader: {
    marginBottom: 10,
  },
});
