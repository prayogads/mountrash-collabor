import {StyleSheet} from 'react-native';
import {colors, sizes} from '../../theme/';

const styles = StyleSheet.create({
  primary: {
    backgroundColor: colors.primary,
    paddingVertical: 15,
    borderRadius: sizes.radiusMedium,
    alignItems: 'center',
  },
  dark: {
    backgroundColor: colors.primary,
    paddingVertical: 15,
    borderRadius: sizes.radiusMedium,
    alignItems: 'center',
  },
  light: {
    backgroundColor: colors.light,
    paddingVertical: 15,
    borderRadius: sizes.radiusMedium,
    alignItems: 'center',
  },
  textLight: {
    color: colors.black2,
    fontWeight: 'bold',
  },
  textDark: {
    color: colors.white,
    fontWeight: 'bold',
  },
  textPrimary: {
    color: colors.white,
    fontWeight: 'bold',
  },
});

export default styles;
