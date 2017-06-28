import React, { Component } from 'react';
import { connect } from 'react-redux';
import { infoPull, infoPush, infoUpdate } from '../actions';
import { Card, CardSection, Button, Confirm, Input } from './common';
import { Text } from 'react-native';

class FeedbackInput extends Component {



  onButtonPress() {
    const { info } = this.props;

    //this.props.infoPush({ information });
    console.log("HERE_HERE_HERE_HERE_HERE", info, "BREAK_BREAK")
  }

  render() {
    return (
      <Card>
        <CardSection>
          <Input
            label="Name"
            placeholder="Awesome Group"
            value={this.props.info}
            onChangeText={text => this.props.infoUpdate({ prop: 'info', value: text })}
          />
        </CardSection>
        <CardSection>
          <Button onPress={this.onButtonPress.bind(this)}>
            Send Info
          </Button>
        </CardSection>
      </Card>
    );
  }
}



const mapStateToProps = (state) => {
  const { info } = state;
  return { info };
};

export default connect(mapStateToProps, { infoPull, infoPush, infoUpdate })(FeedbackInput);
