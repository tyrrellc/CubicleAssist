import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import GroupForm from './GroupForm';
import { groupUpdate, groupSave, groupDelete, cancelUpdate } from '../actions';
import { Card, CardSection, Button, Confirm } from './common';

class GroupEdit extends Component {
  state = { showModal: false };

  componentWillMount(){
    _.each(this.props.group, (value, prop) => {
      this.props.groupUpdate({ prop, value });
    });
  } //this uses lodash, ect to pull data from employeeUpdate pg
  //this is a bit 'hackish' i might want to creat a new action creater tat accepts entire employee model and update reducer


  componentWillUnmount() {
    const { name, course, shift } = this.props;
    this.props.cancelUpdate({ name, course, shift });
  }
// this clears data

  onButtonPress() {
    const { name, course, shift } = this.props;

    this.props.groupSave({ name, course, shift , uid: this.props.group.uid }); //only way to get to this page and list item passes in group as a prop when you clicked it
  }

  onAccept() {
    const { uid } = this.props.group;
    this.props.groupDelete({ uid });
  }

  onDecline() {
    this.setState({ showModal: false });
  }

  render() {
    return (
      <Card>
        <GroupForm />
        <CardSection>
          <Button onPress={this.onButtonPress.bind(this)}>
            Save Changes
          </Button>
        </CardSection>
        <CardSection>
          <Button onPress={() => this.setState({ showModal: !this.state.showModal })}>
            Delete Group
          </Button>
        </CardSection>

        <Confirm
          visible={this.state.showModal}
          onAccept={this.onAccept.bind(this)}
          onDecline={this.onDecline.bind(this)}
        >
          Are you sure you want to delete this group?
        </Confirm>
      </Card>
    );
  }
}

const mapStateToProps = (state) => {
  const { name, course, shift } = state.groupForm;
  return { name, course, shift };
};

export default connect(mapStateToProps, { groupUpdate, groupSave, groupDelete, cancelUpdate })(GroupEdit);
