import React from 'react';
import { View } from 'react-native';

const ListButton = (props) => {
  return (
    <View style={[styles.containerStyle, props.style]}>
      {props.children}
    </View>
  );
};

const styles = {
  containerStyle: {
      padding: 5,
      justifyContent: 'center',
      flexDirection: 'row',
      position: 'relative',
      flex: 1,
      alignSelf: 'stretch',
      backgroundColor: '#00274c',
      borderRadius: 5,
      marginLeft: 30,
      marginRight: 30,
      marginTop: 8,
      marginBottom: 8
  }
};



export { ListButton };
