import React from 'react';
import {
  StyleSheet,
  View,
  TouchableHighlight,
  TouchableNativeFeedback,
  Platform,
  Dimensions,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import {CustomView, Text} from '../../components';
import {colors} from '../../theme';
import Icon from 'react-native-vector-icons/Feather';

export default function Community({route}: any) {
  const {goBack} = useNavigation(),
    [view, setView] = React.useState(true);

  const setData = () => {
    setView(!view);
  };

  const {header, d1, d2} = route.params;

  const Touchable: any =
    Platform.OS === 'ios' ? TouchableHighlight : TouchableNativeFeedback;

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
          {header}
        </Text>
      </View>

      <View style={styles.containerHeader}>
        <Icon name="feather" size={24} style={styles.icon} />
        <View>
          <Text type="bold" size={12} style={styles.textHeader}>
            {header}
          </Text>
          <Text type="regular" color="grey" size={10}>
            Tangerang Selatan
          </Text>
        </View>
      </View>

      <View style={styles.action}>
        <TouchableOpacity onPress={setData} style={styles.actionTab}>
          <Text type="bold">Poin Utama</Text>
          {view ? (
            <View style={styles.line} />
          ) : (
            <View style={{...styles.line, backgroundColor: 'transparent'}} />
          )}
        </TouchableOpacity>
        <TouchableOpacity onPress={setData} style={styles.actionTab}>
          <Text type="bold">Poin Mingguan</Text>
          {view ? (
            <View style={{...styles.line, backgroundColor: 'transparent'}} />
          ) : (
            <View style={styles.line} />
          )}
        </TouchableOpacity>
      </View>

      <View style={styles.boxData}>
        <Text type="bold" style={styles.no}>
          No.
        </Text>
        <Text type="bold" style={styles.nama}>
          Nama
        </Text>
        <Text type="bold" style={styles.no}>
          SK
        </Text>
        <Text type="bold" style={styles.no}>
          Sampah Plastik
        </Text>
        <Text type="bold" style={styles.no}>
          Sampah Kertas
        </Text>
        <Text type="bold" style={styles.no}>
          Total Poin
        </Text>
      </View>
      <View style={styles.lineData} />

      <FlatList
        data={view ? d1 : d2}
        renderItem={({item, index}: any) => (
          <View style={styles.dataBox}>
            <View style={styles.boxData}>
              <Text type="bold" style={styles.no}>
                {index + 1}
              </Text>
              <Text type="bold" style={styles.nama}>
                {item.Name}
              </Text>
              <Text type="bold" style={styles.no}>
                {item.sk}
              </Text>
              <Text type="bold" style={styles.no}>
                {item.SP}
              </Text>
              <Text type="bold" style={styles.no}>
                {item.SKe}
              </Text>
              <Text type="bold" style={styles.no}>
                {item.TP}
              </Text>
            </View>
            <View style={styles.lineData} />
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
  containerHeader: {
    padding: 20,
    flexDirection: 'row',
  },
  action: {
    padding: 20,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  textHeader: {
    marginBottom: 10,
  },
  icon: {
    marginRight: 20,
  },
  actionTab: {
    width: Dimensions.get('window').width / 2.5,
    height: 50,
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  line: {
    height: 2,
    backgroundColor: colors.primary,
    width: Dimensions.get('window').width / 2.5,
  },
  lineData: {
    height: 1,
    marginTop: 10,
    backgroundColor: colors.gray1,
    width: Dimensions.get('window').width,
  },
  boxData: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  no: {
    width: 50,
    marginLeft: 15,
  },
  nama: {
    width: 80,
  },
  dataBox: {
    justifyContent: 'center',
    paddingVertical: 10,
  },
});
