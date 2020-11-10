import React from 'react';
import {StyleSheet, View, StatusBar} from 'react-native';
import {StackActions, useFocusEffect} from '@react-navigation/native';
import {connect} from 'react-redux';

import Icon from 'react-native-vector-icons/Feather';

import {Text, CustomView, Button} from '../../components/';
import {colors} from '../../../src/theme';

function StartedScreen({navigation}: any) {
  const navigateLogin = () => {
    navigation.dispatch(StackActions.replace('Form'));
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
      <View style={styles.container}>
        <View style={styles.headerText}>
          <Text type="bold" size={20} color="white">
            Mountrash
          </Text>
          <Text type="semibold" color="white">
            Trash convertion App
          </Text>
        </View>
      </View>
      <View style={styles.boxBottom}>
        <Text type="regular" size={10} style={styles.subtitle} color="grey">
          Aplikasi ini diperuntukan sebagai pengkonversi sampah menjadi poin
        </Text>
        <Button onPress={navigateLogin} style={styles.button}>
          <Text type="bold" size={15} color="white">
            Start
          </Text>
          <Icon name="arrow-right" size={24} color="white" />
        </Button>
      </View>
    </CustomView>
  );
}

export default connect()(StartedScreen);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.primary,
  },
  containerData: {
    backgroundColor: colors.primary,
  },
  boxBottom: {
    flex: 0.7,
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,
    backgroundColor: 'white',
  },
  subtitle: {
    marginVertical: 50,
    width: '80%',
    alignSelf: 'center',
    textAlign: 'center',
  },
  headerText: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    flexDirection: 'row',
    width: '90%',
    alignSelf: 'center',
    justifyContent: 'space-between',
    marginBottom: 100,
    backgroundColor: colors.primary,
    padding: 20,
    borderRadius: 10,
  },
});
