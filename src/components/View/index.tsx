import React from 'react';
import {SafeAreaView, View, StyleSheet} from 'react-native';

type PropsView = {
  [key: string]: any;
  children: any;
  style?: object;
};

const CustomView: React.FC<PropsView> = (props: any) => {
  const {children} = props;
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={[styles.container, props.style]}>{children}</View>
    </SafeAreaView>
  );
};

export default CustomView;

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  container: {
    flex: 1,
  },
});
