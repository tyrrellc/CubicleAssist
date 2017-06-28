import React, { Component } from 'react';
import { Text, View, Modal } from 'react-native';
import { CardSection } from './CardSection';
import { Button } from './Button';
import { connect } from 'react-redux';
import { groupUpdate } from '.../actions';

const EditForm = ({ children, visible, onAccept, onDecline }) => {
  const { containerStyle, textStyle, cardSectionStyle } = styles;

  return (
    <Modal
      animationType="slide"
      onRequestClose={() => {}}
      transparent
      visible={visible}
    >
      <View style={containerStyle}>
        <CardSection style={cardSectionStyle}>
          <Text style={textStyle}>{children}</Text>
        </CardSection>
        <CardSection>
          <Input
            label="Name"
            placeholder="Awesome Group"
            value={this.props.name}
            onChangeText={text => this.props.groupUpdate({ prop: 'name', value: text })}
          />
        </CardSection>
        <CardSection>
          <Button onPress={onAccept}>
            Create
          </Button>
          <Button onPress={onDecline}>
            Cancel
          </Button>
        </CardSection>
      </View>
    </Modal>
  );
};

const styles = {
  cardSectionStyle: {
    justifyContent: 'center'
  },
  textStyle: {
    flex: 1,
    fontSize: 16,
    textAlign: 'center',
    lineHeight: 40
  },
  containerStyle: {
    backgroundColor: 'rgba(0, 0, 0, 0.75)',
    position: 'relative',
    flex: 1,
    justifyContent: 'center'
  }
};


const mapStateToProps = (state) => {
  const { name } = state.editForm;

  return { name, course, shift };
};

export default connect(mapStateToProps, { groupUpdate })(EditForm);
