import React, { Component } from 'react';
import { Text, TouchableWithoutFeedback, View } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { ListButton, LoginSection } from './common';

class ListItem extends Component {
  onRowPress() {
    Actions.groupInstance({ group: this.props.group });
  }

  render() {
    const { name } = this.props.group;

    return (
      <TouchableWithoutFeedback onPress={this.onRowPress.bind(this)}>
        <View>
          <ListButton>
            <Text style={styles.titleStyle}>
              {name}
            </Text>
          </ListButton>
        </View>
      </TouchableWithoutFeedback>
    );
  }
}

const styles = {
  titleStyle: {
    alignSelf: 'center',
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  }
};

export default ListItem;
