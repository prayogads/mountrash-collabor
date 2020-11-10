import {StyleSheet, Dimensions} from 'react-native';
import {RFValue as fs} from 'react-native-responsive-fontsize';

const {width} = Dimensions.get('window');

const styles = StyleSheet.create({
  default: {
    fontSize: fs(7, width),
    color: '#072c5a',
  },
  thin: {
    fontSize: fs(9, width),
    fontFamily: 'Lato-Thin',
  },
  regular: {
    fontSize: fs(9, width),
    fontFamily: 'Lato-Regular',
  },
  semibold: {
    fontSize: fs(9, width),
    fontFamily: 'Lato-Semibold',
  },
  bold: {
    fontSize: fs(9, width),
    fontFamily: 'Lato-Bold',
  },
});

export default styles;
