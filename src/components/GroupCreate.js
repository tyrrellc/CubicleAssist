import React, { Component } from 'react';
import { connect } from 'react-redux';
import { groupUpdate, groupCreate } from '../actions';
import { View } from 'react-native';
import { Card, CardSection, Button } from './common';
import GroupForm from './GroupForm';

class GroupCreate extends Component {
  onButtonPress() {
    const { name, course, shift } = this.props;

    this.props.groupCreate({ name, course, shift });
  }

  render() {
    return (
      <Card>
        <GroupForm {...this.props} />

        <CardSection>
          <Button onPress={this.onButtonPress.bind(this)}>
            Create Group
          </Button>
        </CardSection>
      </Card>
    );
  }
}

const mapStateToProps = (state) => {
  const { name, course, shift } = state.groupForm;

  return { name, course, shift };
};

export default connect(mapStateToProps, { groupUpdate, groupCreate })(GroupCreate);
