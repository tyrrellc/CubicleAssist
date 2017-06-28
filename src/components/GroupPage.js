import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import GroupForm from './GroupForm';
import { groupUpdate, groupSave, groupDelete, cancelUpdate } from '../actions';
import { Card, CardSection, Button, Confirm } from './common';
import { Text } from 'react-native';

class GroupPage extends Component {
  state = { showModal: false };

  componentWillMount(){
    _.each(this.props.group, (value, prop) => {
      this.props.groupUpdate({ prop, value });
    });
  } //this uses lodash, ect to pull data from employeeUpdate pg
  //this is a bit 'hackish' i might want to creat a new action creater tat accepts entire employee model and update reducer


  onButtonPress() {
        console.log("HERE_HERE_HERE", this.props.group)
    //const { name, course, shift } = this.props;

    //this.props.groupSave({ name, course, shift , uid: this.props.group.uid }); //only way to get to this page and list item passes in group as a prop when you clicked it
  }



  render() {
    return (
      <Card>
        <CardSection>
          <Text>Group Page</Text>
          <Text>{this.props.group.name}</Text>
        </CardSection>
      </Card>
    );
  }
}

const mapStateToProps = (state) => {
  const { name, course, shift } = state.groupForm;
  return { name, course, shift };
};

export default connect(mapStateToProps, { groupUpdate, groupSave, groupDelete, cancelUpdate })(GroupPage);
