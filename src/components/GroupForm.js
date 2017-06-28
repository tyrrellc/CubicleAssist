import React, { Component } from 'react';
import { View, Text, Picker } from 'react-native';
import { connect } from 'react-redux';
import { groupUpdate } from '../actions';
import { CardSection, Input } from './common';

class GroupForm extends Component {
  render() {
    return (
      <View>
        <CardSection>
          <Input
            label="Name"
            placeholder="Awesome Group"
            value={this.props.name}
            onChangeText={text => this.props.groupUpdate({ prop: 'name', value: text })}
          />
        </CardSection>

        <CardSection>
          <Input
            label="Course"
            placeholder="MO 512"
            value={this.props.class}
            onChangeText={text => this.props.groupUpdate({ prop: 'course', value: text })}
          />
        </CardSection>

        <CardSection style={{ flexDirection: 'column' }}>
          <Text>Shift</Text>
          <Picker
              selectedValue={this.props.shift}
              onValueChange={day => this.props.groupUpdate({ prop: 'shift', value: day })}
            >
            <Picker.Item label="Monday" value="Monday" />
            <Picker.Item label="Tuesday" value="Tuesday" />
            <Picker.Item label="Wednesday" value="Wednesday" />
            <Picker.Item label="Thursday" value="Thursday" />
            <Picker.Item label="Friday" value="Friday" />
          </Picker>
        </CardSection>

      </View>
    );

  }
}

const mapStateToProps = (state) => {
  const { name, course, shift } = state.groupForm;

  return { name, course, shift };
};

export default connect(mapStateToProps, { groupUpdate })(GroupForm);
