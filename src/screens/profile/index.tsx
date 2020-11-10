import React from 'react';
import {
  StyleSheet,
  View,
  TouchableHighlight,
  TouchableNativeFeedback,
  Platform,
  Dimensions,
  Alert,
  ToastAndroid,
} from 'react-native';
import {connect} from 'react-redux';
import {useNavigation} from '@react-navigation/native';
import RNRestart from 'react-native-restart'; // Import package from node modules

import {Button, CustomView, Text} from '../../components';
import {colors} from '../../theme';
import Icon from 'react-native-vector-icons/Feather';
import initials from 'initials';
import Axios from 'axios';
import {persistor} from '../../../src/store/store';
import AsyncStorage from '@react-native-community/async-storage';

function Guest({auth, navigation}: any) {
  const {goBack} = useNavigation();

  const Touchable: any =
    Platform.OS === 'ios' ? TouchableHighlight : TouchableNativeFeedback;

  const navigateEdit = () => {
    console.warn('asd');
    navigation.navigate('EditProfile');
  };

  const deactivate = () => {
    Alert.alert(
      'Nonaktifkan akun ?',
      'Akun anda akan di nonaktifkan sampai anda kembali login',
      [
        {
          text: 'Cancel',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel',
        },
        {
          text: 'OK',
          onPress: () => {
            let data = {
              params: {telp: auth.auth_data.telp, email: auth.auth_data.email},
            };
            Axios.delete(
              `http://m-trashcollabor.com/api/member/${auth.auth_data.id}`,
              data,
            )
              .then(async (response: any) => {
                console.log(response);
                if (response.data.status !== 'fail') {
                  await persistor.purge();
                  await AsyncStorage.clear();
                  await RNRestart.Restart();
                } else {
                  ToastAndroid.show(
                    `${response.data.status}, ${response.data.message}`,
                    ToastAndroid.SHORT,
                  );
                }
              })
              .catch((err) => {
                console.warn(err);
              });
          },
        },
      ],
      {cancelable: false},
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
          Profile Anda
        </Text>
      </View>

      <View style={styles.boxPoint}>
        <View style={styles.viewPoint}>
          <View style={styles.avatar}>
            <Text type="bold" size={15} color={colors.primary}>
              {initials(auth.auth_data.name)}
            </Text>
          </View>
          <View style={styles.viewBox}>
            <Text type="bold" color={colors.gray1}>
              {auth.auth_data.name}
            </Text>
            <Text type="bold" color={colors.gray1}>
              {auth.auth_data.email}
            </Text>
            <Text type="bold" color={colors.gray1}>
              {auth.auth_data.phone}
            </Text>
          </View>
          <Button onPress={navigateEdit}>
            <Icon name="edit" size={25} />
          </Button>
        </View>
      </View>
      <Button
        onPress={deactivate}
        style={{
          ...styles.boxPoint,
          borderRadius: 10,
          width: '80%',
          alignSelf: 'center',
          alignItems: 'center',
        }}>
        <Text type="bold">Nonaktifkan akun anda</Text>
      </Button>
    </CustomView>
  );
}

const mapStateToProps = (state: any) => ({
  auth: state.auth,
});

export default connect(mapStateToProps)(Guest);

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
    alignItems: 'center',
  },
  viewBox: {
    justifyContent: 'space-evenly',
    alignItems: 'flex-end',
  },
  textBoxHeader: {
    marginBottom: 10,
  },
  avatar: {
    height: Dimensions.get('window').height * 0.1,
    width: Dimensions.get('window').height * 0.1,
    backgroundColor: 'white',
    borderRadius: 1000,
    borderWidth: 3,
    borderColor: colors.gray2,
    marginRight: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
