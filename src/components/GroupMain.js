import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Text, ListView, Image } from 'react-native';
import { groupsFetch } from '../actions';
import ListItem from './ListItem';
import { MainButton, LoginSection } from './common';
import { Actions } from 'react-native-router-flux';

class GroupMain extends Component {
  componentWillMount() {
    this.props.groupsFetch();
    console.log("HERE_HERE_HERE", this.props.groups)

    this.createDataSource(this.props);
  }

  componentWillReceiveProps(nextProps) {
    //nextProps are next set of props component is rendered with and this.props is still old props

    this.createDataSource(nextProps);
  }

  createDataSource({ groups }) {
    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    });

    this.dataSource = ds.cloneWithRows(groups);
  }

  renderRow(group) {
    return <ListItem group={group} />;
  }

  onNewButtonPress() {
    Actions.groupCreate({ type: 'reset' });
  }

  renderNewButton() {
    return (
      <MainButton onPress={this.onNewButtonPress.bind(this)}>
        Create Group
      </MainButton>
    );
  }

  onOldButtonPress() {

  }

  renderOldButton() {
    return (
      <MainButton onPress={this.onOldButtonPress.bind(this)}>
        Old Groups
      </MainButton>
    );
  }

  render() {
    return (
      <Image
        source={require('./images/mainBG.png')}
        style={styles.containerStyle}>
        <LoginSection style={{paddingTop: 8}} />
        <ListView
          enableEmptySections
          dataSource={this.dataSource}
          renderRow={this.renderRow}
        />
        <LoginSection style={{paddingTop: 80}} >
          {this.renderNewButton()}
        </LoginSection>
        <LoginSection style={{paddingTop: 15, paddingBottom: 20 }} >
          {this.renderOldButton()}
        </LoginSection>
      </Image>
    );
  }
}

const styles = {
  containerStyle: {
    flex: 1,
    width: undefined,
    height: undefined,
    backgroundColor:'transparent'
  }
};

const mapStateToProps = state => {
  const groups = _.map(state.groups, (val, uid) => {
    return { ...val, uid };
  });
  return { groups };
};  //this is lodash   .map iterates over key value pairs and run function which assigns data to employees array

export default connect(mapStateToProps, { groupsFetch })(GroupMain);
