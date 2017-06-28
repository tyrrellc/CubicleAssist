import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

const LoginButton = (props) => {
  return (
    <TouchableOpacity onPress={props.onPress} style={styles.buttonStyle}>
      <Text style={styles.textStyle}>
        {props.children}
      </Text>
    </TouchableOpacity>
  );
};

const styles = {
  textStyle: {
    alignSelf: 'center',
    color: '#00274C',
    fontSize: 16,
    fontWeight: '600',
    paddingTop: 5,
    paddingBottom: 5
  },
  buttonStyle: {
    flex: 1,
    alignSelf: 'stretch',
    backgroundColor: '#597ABC',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#597ABC',
    marginLeft: 20,
    marginRight: 20,
  }
};


export { LoginButton };
