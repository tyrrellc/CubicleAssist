import React from 'react';
import { View } from 'react-native';

const LoginSection = (props) => {
  return (
    <View style={[styles.containerStyle, props.style]}>
      {props.children}
    </View>
  );
};

const styles = {
  containerStyle: {
      padding: 5,
      backgroundColor: 'transparent',
      justifyContent: 'flex-start',
      flexDirection: 'row',
      position: 'relative'
  }
};

export { LoginSection };
