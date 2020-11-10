import React from 'react';
import {
  StyleSheet,
  View,
  TouchableHighlight,
  TouchableNativeFeedback,
  Platform,
  Dimensions,
  FlatList,
  ToastAndroid,
  TouchableOpacity,
  Alert,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Feather';
import Icon2 from 'react-native-vector-icons/FontAwesome5';
import {connect} from 'react-redux';

import {CustomView, Text, Button} from '../../components';
import {colors} from '../../theme';
import Axios from 'axios';

function MyTeam({navigation, auth}: any) {
  const {goBack} = useNavigation();
  const [state, setState] = React.useState([]);

  let data = {params: {telp: auth.auth_data.telp, email: auth.auth_data.email}};
  Axios.get(`http://m-trashcollabor.com/api/community`, data)
    .then(async (response: any) => {
      console.log(response);
      if (response.data.status !== 'fail') {
        await setState(response.data);
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

  const handleDelete = (id: number, name: string) => {
    Alert.alert(
      'Hapus Komunitas ?',
      'Aksi ini akan menghapus komunitas ' + name,
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
            Axios.delete(`http://m-trashcollabor.com/api/community/${id}`, data)
              .then(async (response: any) => {
                console.warn(response);
                if (response.data.status !== 'fail') {
                  ToastAndroid.show(
                    `${response.data.status}, ${response.data.message}`,
                    ToastAndroid.SHORT,
                  );
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
          },
        },
      ],
    );
  };

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
          Komunitas
        </Text>
      </View>

      <View style={styles.safeArea}>
        <Text type="bold">Mari lihat poin beberapa kelompok</Text>
        <Text style={styles.subtitle} type="regular">
          Disini berisi point yang di dapatkan oleh tim anda dan tim lainnya
        </Text>

        <Button
          type="primary"
          title="Tambahkan Komunitas"
          onPress={() => navigation.navigate('AddCommunity')}
        />
      </View>

      <FlatList
        keyExtractor={(item, index) => index.toString()}
        data={state}
        showsVerticalScrollIndicator={false}
        renderItem={({item}: any) => (
          <Button
            onPress={() => navigation.navigate('Community', {id: item.id})}
            style={{...styles.button}}>
            <Text type="bold" size={10} color="grey">
              {item.name}
            </Text>
            <View style={styles.action}>
              <TouchableOpacity
                style={styles.actionButton}
                onPress={() =>
                  navigation.navigate('EditCommunity', {data: item})
                }>
                <Icon2 name="edit" size={20} color="grey" />
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.actionButton}
                onPress={() => handleDelete(item.id, item.name)}>
                <Icon2 name="trash" size={20} color="grey" />
              </TouchableOpacity>
            </View>
          </Button>
        )}
      />
    </CustomView>
  );
}

const mapStateToProps = (state: any) => ({
  auth: state.auth,
});

export default connect(mapStateToProps)(MyTeam);

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
  subtitle: {marginVertical: 5, marginBottom: 20},
  button: {
    marginTop: 20,
    padding: 20,
    borderRadius: 10,
    backgroundColor: colors.statusBar,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: 20,
  },
  action: {
    flexDirection: 'row',
  },
  actionButton: {
    marginLeft: 20,
  },
});
