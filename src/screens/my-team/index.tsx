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
        navigate: 'ListCommunity',
        name: 'Komunitas',
        color: colors.like + 50,
        icon: 'american-sign-language-interpreting',
      },
      {
        navigate: 'School',
        name: 'Sekolah',
        color: colors.success + 50,
        icon: 'graduation-cap',
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
          My Team
        </Text>
      </View>

      <View style={styles.safeArea}>
        <Text type="bold">Mari lihat tim anda</Text>
        <Text style={styles.subtitle} type="regular">
          Disini berisi point yang di dapatkan oleh tim anda dan tim lainnya
        </Text>

        <View>
          {data.map((item: any) => (
            <Button
              onPress={() => navigation.navigate(item.navigate)}
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
    padding: 50,
    borderRadius: 10,
    backgroundColor: 'red',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});
