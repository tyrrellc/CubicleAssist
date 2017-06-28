import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

const MainButton = (props) => {
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
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
    paddingTop: 1,
    paddingBottom: 1
  },
  buttonStyle: {
    padding: 5,
    justifyContent: 'center',
    flexDirection: 'row',
    position: 'relative',
    flex: 1,
    alignSelf: 'stretch',
    backgroundColor: '#597abc',
    borderRadius: 5,
    marginLeft: 30,
    marginRight: 30,
    marginTop: 3,
    marginBottom: 3
  }
};

export { MainButton };
