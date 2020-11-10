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

import {CustomView, Button, TextInput, Text} from '../../components/';
import {colors} from '../../../src/theme';
import {setData, setNewData} from '../../../src/store/action/auth';
import Axios from 'axios';

function Form({navigation, dispatch, route, auth}: any) {
  const [state, setState] = React.useState({
    name: '',
    description: '',
  });

  const handleSubmit = async () => {
    if (state.name === '' || state.description === '') {
      ToastAndroid.show('Form must be filled', ToastAndroid.SHORT);
    } else {
      let data = {
        telp: auth.auth_data.phone,
        email: auth.auth_data.email,
        name: state.name,
        description: state.description,
      };
      Axios.put(
        `http://m-trashcollabor.com/api/community/${route.params.data.id}`,
        data,
      )
        .then(async (response: any) => {
          console.warn(response);
          if (response.data.status !== 'fail') {
            navigation.goBack();
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
          <Text type="thin">sebelumnya: {route.params.data.name}</Text>
          <TextInput
            placeholder="Nama"
            handle={(text: string) => setState({...state, name: text})}
          />
          <Text type="thin">sebelumnya: {route.params.data.description}</Text>
          <TextInput
            placeholder="Deskripsi"
            handle={(text: string) => setState({...state, description: text})}
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
