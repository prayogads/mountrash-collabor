import React from 'react';
import {
  StyleSheet,
  View,
  TouchableHighlight,
  TouchableNativeFeedback,
  Platform,
  Dimensions,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Feather';
import Icon2 from 'react-native-vector-icons/FontAwesome5';

import {CustomView, Text, Button} from '../../components';
import {colors} from '../../theme';

export default function MyTeam({navigation}: any) {
  const {goBack} = useNavigation(),
    data: any = [
      {
        navigate: 'Community',
        name: 'SD',
        color: colors.like + 50,
        icon: 'graduation-cap',
        d1: [
          {Name: 'John', sk: 'PIC', SP: 300, SKe: 200, TP: 500},
          {Name: 'John', sk: 'PIC', SP: 300, SKe: 200, TP: 500},
          {Name: 'John', sk: 'PIC', SP: 300, SKe: 200, TP: 500},
          {Name: 'John', sk: 'PIC', SP: 300, SKe: 200, TP: 500},
          {Name: 'John', sk: 'PIC', SP: 300, SKe: 200, TP: 500},
          {Name: 'John', sk: 'PIC', SP: 300, SKe: 200, TP: 500},
          {Name: 'John', sk: 'PIC', SP: 300, SKe: 200, TP: 500},
        ],
        d2: [
          {Name: 'Matt Hardy', sk: 'WIM', SP: 209, SKe: 102, TP: 311},
          {Name: 'Matt Hardy', sk: 'WIM', SP: 209, SKe: 102, TP: 311},
          {Name: 'Matt Hardy', sk: 'WIM', SP: 209, SKe: 102, TP: 311},
          {Name: 'Matt Hardy', sk: 'WIM', SP: 209, SKe: 102, TP: 311},
          {Name: 'Matt Hardy', sk: 'WIM', SP: 209, SKe: 102, TP: 311},
          {Name: 'Matt Hardy', sk: 'WIM', SP: 209, SKe: 102, TP: 311},
          {Name: 'Matt Hardy', sk: 'WIM', SP: 209, SKe: 102, TP: 311},
        ],
      },
      {
        navigate: 'School',
        name: 'SMP',
        color: colors.success + 50,
        icon: 'graduation-cap',
        d1: [
          {Name: 'John', sk: 'PIC', SP: 300, SKe: 200, TP: 500},
          {Name: 'John', sk: 'PIC', SP: 300, SKe: 200, TP: 500},
          {Name: 'John', sk: 'PIC', SP: 300, SKe: 200, TP: 500},
          {Name: 'John', sk: 'PIC', SP: 300, SKe: 200, TP: 500},
          {Name: 'John', sk: 'PIC', SP: 300, SKe: 200, TP: 500},
          {Name: 'John', sk: 'PIC', SP: 300, SKe: 200, TP: 500},
          {Name: 'John', sk: 'PIC', SP: 300, SKe: 200, TP: 500},
        ],
        d2: [
          {Name: 'Matt Hardy', sk: 'WIM', SP: 209, SKe: 102, TP: 311},
          {Name: 'Matt Hardy', sk: 'WIM', SP: 209, SKe: 102, TP: 311},
          {Name: 'Matt Hardy', sk: 'WIM', SP: 209, SKe: 102, TP: 311},
          {Name: 'Matt Hardy', sk: 'WIM', SP: 209, SKe: 102, TP: 311},
          {Name: 'Matt Hardy', sk: 'WIM', SP: 209, SKe: 102, TP: 311},
          {Name: 'Matt Hardy', sk: 'WIM', SP: 209, SKe: 102, TP: 311},
          {Name: 'Matt Hardy', sk: 'WIM', SP: 209, SKe: 102, TP: 311},
        ],
      },
      {
        navigate: 'School',
        name: 'SMA',
        color: colors.warning + 50,
        icon: 'graduation-cap',
        d1: [
          {Name: 'John', sk: 'PIC', SP: 300, SKe: 200, TP: 500},
          {Name: 'John', sk: 'PIC', SP: 300, SKe: 200, TP: 500},
          {Name: 'John', sk: 'PIC', SP: 300, SKe: 200, TP: 500},
          {Name: 'John', sk: 'PIC', SP: 300, SKe: 200, TP: 500},
          {Name: 'John', sk: 'PIC', SP: 300, SKe: 200, TP: 500},
          {Name: 'John', sk: 'PIC', SP: 300, SKe: 200, TP: 500},
          {Name: 'John', sk: 'PIC', SP: 300, SKe: 200, TP: 500},
        ],
        d2: [
          {Name: 'Matt Hardy', sk: 'WIM', SP: 209, SKe: 102, TP: 311},
          {Name: 'Matt Hardy', sk: 'WIM', SP: 209, SKe: 102, TP: 311},
          {Name: 'Matt Hardy', sk: 'WIM', SP: 209, SKe: 102, TP: 311},
          {Name: 'Matt Hardy', sk: 'WIM', SP: 209, SKe: 102, TP: 311},
          {Name: 'Matt Hardy', sk: 'WIM', SP: 209, SKe: 102, TP: 311},
          {Name: 'Matt Hardy', sk: 'WIM', SP: 209, SKe: 102, TP: 311},
          {Name: 'Matt Hardy', sk: 'WIM', SP: 209, SKe: 102, TP: 311},
        ],
      },
      {
        navigate: 'School',
        name: 'UNIVERSITAS',
        color: colors.danger + 50,
        icon: 'graduation-cap',
        d1: [
          {Name: 'John', sk: 'PIC', SP: 300, SKe: 200, TP: 500},
          {Name: 'John', sk: 'PIC', SP: 300, SKe: 200, TP: 500},
          {Name: 'John', sk: 'PIC', SP: 300, SKe: 200, TP: 500},
          {Name: 'John', sk: 'PIC', SP: 300, SKe: 200, TP: 500},
          {Name: 'John', sk: 'PIC', SP: 300, SKe: 200, TP: 500},
          {Name: 'John', sk: 'PIC', SP: 300, SKe: 200, TP: 500},
          {Name: 'John', sk: 'PIC', SP: 300, SKe: 200, TP: 500},
        ],
        d2: [
          {Name: 'Matt Hardy', sk: 'WIM', SP: 209, SKe: 102, TP: 311},
          {Name: 'Matt Hardy', sk: 'WIM', SP: 209, SKe: 102, TP: 311},
          {Name: 'Matt Hardy', sk: 'WIM', SP: 209, SKe: 102, TP: 311},
          {Name: 'Matt Hardy', sk: 'WIM', SP: 209, SKe: 102, TP: 311},
          {Name: 'Matt Hardy', sk: 'WIM', SP: 209, SKe: 102, TP: 311},
          {Name: 'Matt Hardy', sk: 'WIM', SP: 209, SKe: 102, TP: 311},
          {Name: 'Matt Hardy', sk: 'WIM', SP: 209, SKe: 102, TP: 311},
        ],
      },
    ];

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
          Sekolah
        </Text>
      </View>

      <View style={styles.safeArea}>
        <Text type="bold">Mari lihat poin beberapa sekolah</Text>
        <Text style={styles.subtitle} type="regular">
          Disini berisi point yang di dapatkan oleh tim anda dan tim lainnya
        </Text>

        <View>
          {data.map((item: any) => (
            <Button
              onPress={() =>
                navigation.navigate('DataSchool', {
                  header: item.name,
                  d1: item.d1,
                  d2: item.d2,
                })
              }
              style={{...styles.button, backgroundColor: item.color}}>
              <Text type="bold" size={10} color="grey">
                {item.name}
              </Text>
              <Icon2 name={item.icon} size={60} color="grey" />
            </Button>
          ))}
        </View>
      </View>
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
  safeArea: {
    padding: 20,
  },
  subtitle: {marginTop: 5},
  button: {
    marginTop: 20,
    padding: 20,
    borderRadius: 10,
    backgroundColor: 'red',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});
