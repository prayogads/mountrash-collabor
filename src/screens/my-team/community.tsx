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
  ToastAndroid,
  Alert,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import {Button, CustomView, Text} from '../../components';
import {colors} from '../../theme';
import Icon from 'react-native-vector-icons/Feather';
import Axios from 'axios';
import {connect} from 'react-redux';

function Community({auth, route}: any) {
  const {goBack} = useNavigation(),
    [view, setView] = React.useState(true);
  // data = [
  //   {Name: 'John', sk: 'PIC', SP: 300, SKe: 200, TP: 500},
  //   {Name: 'John', sk: 'PIC', SP: 300, SKe: 200, TP: 500},
  //   {Name: 'John', sk: 'PIC', SP: 300, SKe: 200, TP: 500},
  //   {Name: 'John', sk: 'PIC', SP: 300, SKe: 200, TP: 500},
  //   {Name: 'John', sk: 'PIC', SP: 300, SKe: 200, TP: 500},
  //   {Name: 'John', sk: 'PIC', SP: 300, SKe: 200, TP: 500},
  //   {Name: 'John', sk: 'PIC', SP: 300, SKe: 200, TP: 500},
  // ],
  // data2 = [
  //   {Name: 'Matt Hardy', sk: 'WIM', SP: 209, SKe: 102, TP: 311},
  //   {Name: 'Matt Hardy', sk: 'WIM', SP: 209, SKe: 102, TP: 311},
  //   {Name: 'Matt Hardy', sk: 'WIM', SP: 209, SKe: 102, TP: 311},
  //   {Name: 'Matt Hardy', sk: 'WIM', SP: 209, SKe: 102, TP: 311},
  //   {Name: 'Matt Hardy', sk: 'WIM', SP: 209, SKe: 102, TP: 311},
  //   {Name: 'Matt Hardy', sk: 'WIM', SP: 209, SKe: 102, TP: 311},
  //   {Name: 'Matt Hardy', sk: 'WIM', SP: 209, SKe: 102, TP: 311},
  // ];

  const [state, setState]: any = React.useState([]);

  let dataFix = {
    params: {telp: auth.auth_data.telp, email: auth.auth_data.email},
  };

  const getdata = async () => {
    Axios.get(
      `http://m-trashcollabor.com/api/community/member/${route.params.id}`,
      dataFix,
    )
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
  };

  const handleDelete = () => {
    Alert.alert(
      'Keluar dari komunitas ini ?',
      'Aksi ini akan menghapus anda dari komunitas ' + state.name,
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
              `http://m-trashcollabor.com/api/community/member/${state.id}/${auth.auth_data.id}`,
              data,
            )
              .then(async (response: any) => {
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

  React.useEffect(() => {
    getdata();
  });

  const handleJoin = async () => {
    Axios.post(
      `http://m-trashcollabor.com/api/community/member/${route.params.id}`,
      {
        telp: auth.auth_data.phone,
        email: auth.auth_data.email,
        member_id: auth.auth_data.id,
      },
    )
      .then(async (response: any) => {
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
  };

  const setData = () => {
    setView(!view);
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
          My Team
        </Text>
      </View>

      <View style={styles.containerHeader}>
        <View>
          <Text type="bold" size={12} style={styles.textHeader}>
            {state.name}
          </Text>
          <Text type="regular" color="grey" size={10}>
            {state.description}
          </Text>
        </View>
        <View style={styles.containerAction}>
          <Button style={styles.join} onPress={handleJoin}>
            <Icon name="check-square" size={24} />
            <Text type="regular" color="grey" size={10}>
              Join
            </Text>
          </Button>
          <Button style={styles.join} onPress={handleDelete}>
            <Icon name="trash" size={24} />
            <Text type="regular" color="grey" size={10}>
              Quit
            </Text>
          </Button>
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
        data={view ? state.member : state.member}
        renderItem={({item, index}: any) => (
          <View style={styles.dataBox}>
            <View style={styles.boxData}>
              <Text type="bold" style={styles.no}>
                {index + 1}
              </Text>
              <Text type="bold" style={styles.nama}>
                {item.name}
              </Text>
              <Text type="bold" style={styles.no}>
                {item.position}
              </Text>
              <Text type="bold" style={styles.no}>
                300
              </Text>
              <Text type="bold" style={styles.no}>
                300
              </Text>
              <Text type="bold" style={styles.no}>
                300
              </Text>
            </View>
            <View style={styles.lineData} />
          </View>
        )}
      />
    </CustomView>
  );
}

const mapStateToProps = (state: any) => ({
  auth: state.auth,
});

export default connect(mapStateToProps)(Community);

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
    justifyContent: 'space-between',
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
  join: {
    alignItems: 'center',
    justifyContent: 'center',
    alignContent: 'center',
    paddingLeft: 20,
  },
  containerAction: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});
