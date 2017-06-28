// Import libraires for making component
import React from 'react';
import { Text, View } from 'react-native';

// Make a component
const Header = (props) => {
  const {textStyle, viewStyle, viewStyleBar} = styles;

  return (
    <View>
    <View style={viewStyleBar}>
      <Text />
    </View>
    <View style={viewStyle}>
      <Text style={textStyle}>{props.headerText}</Text>
    </View>
    </View>
  );
};

const styles = {
  viewStyle: {
    backgroundColor: '#00274C',
    justifyContent: 'center',
    alignItems: 'center',
    height: 48,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    elevation: 2,
    position: 'relative'
  },
  viewStyleBar: {
    backgroundColor: '#597ABC',
    height: 19,
    position: 'relative'
  },
  textStyle: {
    fontSize: 30,
    color: '#597ABC'
  }
};


// Make component available to app]
export { Header };
