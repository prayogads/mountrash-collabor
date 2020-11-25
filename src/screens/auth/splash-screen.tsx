import React from 'react';
import {View, StyleSheet, Image} from 'react-native';
import {connect} from 'react-redux';
import {StackActions} from '@react-navigation/native';

import {setFirst} from '../../store/action/splash';
import {Text} from '../../components/';

function SplashScreen({dispatch}: any) {
  React.useEffect(() => {
    setTimeout(() => {
      dispatch(setFirst());
    }, 3000);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.containerImage}>
        <Image
          source={require('../../../assets/images/trashcollabor_icon.png')}
          style={styles.logo}
        />
        <Text type="bold" size={20}>
          Trashcollabor
        </Text>
      </View>

      <Text type="regular">v.0.01</Text>
    </View>
  );
}

export default connect()(SplashScreen);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    height: 70,
    width: 90,
    resizeMode: 'stretch',
    marginRight: 10,
  },
  containerImage: {
    flexDirection: 'row',
    alignItems: 'flex-end',
  },
});
