import React from 'react';
import {TextInput, Animated, View} from 'react-native';
import {colors} from '../../theme/';
import Icon from 'react-native-vector-icons/Feather';
import {Button} from '..';

type PropsText = {
  placeholder?: string;
  style?: Object;
  containerStyle?: Object;
  handle: Function;
  isPassword?: boolean;
  isNumber?: any;
};

const CustomTextInput: React.FC<PropsText> = ({
  style,
  containerStyle,
  placeholder,
  handle,
  isPassword,
  isNumber,
}) => {
  const [state, setState] = React.useState({
    value: '',
    animated: new Animated.Value(0),
    hide: true,
  });

  const handleType = async (value: string) => {
    await setState({
      ...state,
      value,
    });
    await handle(value);
  };

  React.useEffect(() => {
    state.value !== '' ? animateText(15) : animateText(0);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [state.value === '' ? state.value : null]);

  const animateText = (toValue: number): void => {
    Animated.timing(state.animated, {
      toValue,
      duration: 300,
      useNativeDriver: false,
    }).start();
  };

  const hidePassword = (): void => {
    setState({...state, hide: !state.hide});
  };

  const animate = {
      fontSize: state.animated.interpolate({
        inputRange: [0, 1],
        outputRange: [0, 1],
      }),
      fontFamily: 'Lato-Semibold',
      marginBottom: 5,
    },
    styleTextInput = {
      width: isPassword ? '93%' : '100%',
      borderRadius: 10,
      fontFamily: 'Poppins-Regular',
      backgroundColor: colors.gray3,
      paddingVertical: 15,
    },
    containerText: Object = {
      flexDirection: 'row',
      alignItems: 'center',
      backgroundColor: colors.gray3,
      borderRadius: 10,
      paddingHorizontal: 10,
      marginVertical: 10,
    },
    container = [containerStyle];

  return (
    <View style={container}>
      <Animated.Text style={animate}>{`${placeholder}`}</Animated.Text>
      <View style={containerText}>
        <TextInput
          keyboardType={isNumber ? 'phone-pad' : 'default'}
          placeholder={`${placeholder}`}
          value={state.value}
          onChangeText={(value: any) => handleType(value)}
          style={[styleTextInput, style]}
          secureTextEntry={isPassword ? state.hide : false}
        />
        {isPassword && (
          <Button onPress={hidePassword}>
            <Icon
              name={state.hide ? 'eye-off' : 'eye'}
              size={24}
              color="grey"
            />
          </Button>
        )}
      </View>
    </View>
  );
};

CustomTextInput.defaultProps = {
  placeholder: 'Input here',
};

export default CustomTextInput;
