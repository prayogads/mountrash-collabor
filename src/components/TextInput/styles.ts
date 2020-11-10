import {StyleSheet, Dimensions} from 'react-native';
import {RFValue as fs} from 'react-native-responsive-fontsize';

const {width} = Dimensions.get('window');

const styles = StyleSheet.create({
  default: {
    fontSize: fs(9, width),
    textAlign: 'left',
  },
  thin: {
    fontSize: fs(9, width),
    fontFamily: 'Poppins-Light',
  },
  regular: {
    fontSize: fs(9, width),
    fontFamily: 'Poppins-Regular',
  },
  semibold: {
    fontSize: fs(9, width),
    fontFamily: 'Poppins-SemiBold',
  },
  bold: {
    fontSize: fs(9, width),
    fontFamily: 'Poppins-Bold',
  },
});

export default styles;
