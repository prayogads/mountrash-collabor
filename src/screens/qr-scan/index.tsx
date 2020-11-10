import React from 'react';
import {View, StyleSheet, TouchableOpacity} from 'react-native';

import QRCodeScanner from 'react-native-qrcode-scanner';
import {RNCamera} from 'react-native-camera';

import {Text, CustomView} from '../../components/';

export default function QrScan() {
  const onSuccess = (e: any) => {
    console.warn(e);
  };

  return (
    <CustomView>
      <View style={styles.container}>
        <Text type="regular">asd</Text>
        <QRCodeScanner
          onRead={onSuccess}
          flashMode={RNCamera.Constants.FlashMode.torch}
          topContent={
            <Text type="regular" style={styles.centerText}>
              Go to{' '}
              <Text type="regular" style={styles.textBold}>
                wikipedia.org/wiki/QR_code
              </Text>{' '}
              on your computer and scan the QR code.
            </Text>
          }
          bottomContent={
            <TouchableOpacity style={styles.buttonTouchable}>
              <Text type="regular" style={styles.buttonText}>
                OK. Got it!
              </Text>
            </TouchableOpacity>
          }
        />
      </View>
    </CustomView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  centerText: {
    flex: 1,
    fontSize: 18,
    padding: 32,
    color: '#777',
  },
  textBold: {
    fontWeight: '500',
    color: '#000',
  },
  buttonText: {
    fontSize: 21,
    color: 'rgb(0,122,255)',
  },
  buttonTouchable: {
    padding: 16,
  },
});
