import React from 'react';
import {
  StyleSheet,
  View,
  StatusBar,
  ScrollView,
  Dimensions,
  ToastAndroid,
} from 'react-native';
import {StackActions, useFocusEffect} from '@react-navigation/native';
import {connect} from 'react-redux';

import {CustomView, Button, TextInput} from '../../components/';
import {colors} from '../../../src/theme';
import {setData, setNewData} from '../../../src/store/action/auth';
import Axios from 'axios';

function Form({navigation, dispatch, auth}: any) {
  const [state, setState] = React.useState({
    newName: '',
    newTelp: '',
    newEmail: '',
  });

  const handleSubmit = async () => {
    if (state.newEmail === '' || state.newTelp === '' || state.newName === '') {
      ToastAndroid.show('Form must be filled', ToastAndroid.SHORT);
    } else {
      let data = {
          new_name: state.newName,
          telp: auth.auth_data.phone,
          new_telp: state.newTelp,
          email: auth.auth_data.email,
          new_email: state.newEmail,
        },
        new_data = {
          params: {
            telp: state.newTelp,
            email: state.newEmail,
          },
        };
      Axios.put(
        `http://m-trashcollabor.com/api/member/${auth.auth_data.id}`,
        data,
      )
        .then(async (response: any) => {
          console.log(response);
          if (response.data.status !== 'fail') {
            await dispatch(setNewData(response.data));
            Axios.get(
              `http://m-trashcollabor.com/api/member/${state.newName}`,
              new_data,
            )
              .then(async (response: any) => {
                if (response.data.status !== 'fail') {
                  await dispatch(setData(response.data));
                } else {
                  ToastAndroid.show(
                    `${response.data.status}, ${response.data.message}`,
                    ToastAndroid.SHORT,
                  );
                }
              })
              .catch((err) => {
                console.error(err);
              })
              .finally(() => {
                navigation.goBack();
              });
          } else {
            ToastAndroid.show(
              `${response.data.status}, ${response.data.message}`,
              ToastAndroid.SHORT,
            );
          }
        })
        .catch((err) => {
          console.error(err);
        });
    }
  };

  useFocusEffect(
    React.useCallback(() => {
      <StatusBar
        barStyle="light-content"
        translucent
        backgroundColor="transparent"
      />;
    }, []),
  );

  return (
    <CustomView style={styles.containerData}>
      <StatusBar
        barStyle="light-content"
        translucent
        backgroundColor="transparent"
      />
      <ScrollView style={styles.container}>
        <View style={styles.form}>
          <TextInput
            placeholder="Nama Baru"
            handle={(text: string) => setState({...state, newName: text})}
          />
          <TextInput
            placeholder="No. Telp Baru"
            handle={(text: string) => setState({...state, newTelp: text})}
          />
          <TextInput
            placeholder="Email Baru"
            handle={(text: string) => setState({...state, newEmail: text})}
          />
          <Button
            type="primary"
            onPress={handleSubmit}
            style={styles.button}
            title="Submit"
          />
        </View>
      </ScrollView>
      <View></View>
    </CustomView>
  );
}

const mapStateToProps = (state: any) => ({
  auth: state.auth,
});

export default connect(mapStateToProps)(Form);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
  },
  containerData: {
    backgroundColor: colors.primary,
  },
  form: {
    borderRadius: 10,
    flex: 0.5,
    margin: 20,
    padding: 20,
    marginTop: Dimensions.get('window').height * 0.2,
    backgroundColor: colors.backgroundColor,
  },
  button: {
    marginTop: 30,
  },
});
