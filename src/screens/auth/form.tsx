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

import {Text, CustomView, Button, TextInput} from '../../components/';
import {colors} from '../../../src/theme';
import {setData} from '../../../src/store/action/auth';
import Axios from 'axios';

function Form({navigation, dispatch, auth}: any) {
  const navigateLogin = () => {
    navigation.dispatch(StackActions.replace('Home'));
  };

  const [state, setState] = React.useState({name: '', telp: '', email: ''});

  const handleSubmit = async () => {
    if (state.email === '' || state.telp === '' || state.name === '') {
      ToastAndroid.show('Form must be filled', ToastAndroid.SHORT);
    } else {
      let data = {params: {telp: state.telp, email: state.email}};

      Axios.get(`http://m-trashcollabor.com/api/member/${state.name}`, data)
        .then(async (response: any) => {
          if (response.data.status !== 'fail') {
            await dispatch(setData(response.data));
          } else if (response.data.message.includes('User is not registered')) {
            Axios.post('http://m-trashcollabor.com/api/member', {
              name: state.name,
              telp: state.telp,
              email: state.email,
            }).then((res: any) => {
              Axios.get(
                `http://m-trashcollabor.com/api/member/${state.name}`,
                data,
              ).then(async (response: any) => {
                dispatch(setData(response.data));
              });
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
            placeholder="Nama"
            handle={(text: string) => setState({...state, name: text})}
          />
          <TextInput
            placeholder="No. Telp"
            handle={(text: string) => setState({...state, telp: text})}
          />
          <TextInput
            placeholder="Email"
            handle={(text: string) => setState({...state, email: text})}
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
