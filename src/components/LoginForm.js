import React, { Component } from 'react';
import { Text, Image } from 'react-native';
import { connect } from 'react-redux';
import { emailChanged, passwordChanged, loginUser, createUser } from '../actions';
import { LoginSection, Input, LoginButton, Spinner, FadeInView } from './common';

class LoginForm extends Component {

  onEmailChange(text) {
    this.props.emailChanged(text);
  }

  onPasswordChange(text) {
    this.props.passwordChanged(text);
  }

  onButtonEnterPress() {
    const { email, password } = this.props;

    this.props.loginUser({ email, password });
  }

  onButtonJoinPress() {
    const { email, password } = this.props;

    this.props.createUser({ email, password });
  }

  renderButtonEnter() {
    if (this.props.loading) {
      return;
    }

    return (
      <LoginButton onPress={this.onButtonEnterPress.bind(this)}>
        Enter
      </LoginButton>
    );
  }

  renderButtonJoin() {
    if (this.props.loading) {
      return;
    }

    return (
      <LoginButton onPress={this.onButtonJoinPress.bind(this)}>
        Join
      </LoginButton>
    );
  }

  renderSpinner() {
    if (this.props.loading) {
      return <Spinner/>;
    }
  }

  render() {
    return (
      <Image
        source={require('./images/CubicleLogin.png')}
        style={styles.containerStyle}>

      <FadeInView>
        <LoginSection style={{paddingTop: 40}} />
        <Text style={{ fontSize: 22, alignSelf: 'center', color: '#00274C'}}>
          Welcome To Cubicle
        </Text>
        <LoginSection style={{paddingTop: 50}} />
        <LoginSection>
          <Input
            label="Email"
            placeholder="uniquename@umich.edu"
            onChangeText={this.onEmailChange.bind(this)}
            value={this.props.email} //prop from reducer
            //call state.props.email at any time to get value (email)
          />
        </LoginSection>

        <LoginSection>
          <Input
            secureTextEntry
            label="Password"
            placeholder="not umich password"
            onChangeText={this.onPasswordChange.bind(this)}
            value={this.props.password}
          />
        </LoginSection>

        <LoginSection style={{paddingTop: 260}} />
        <Text style={styles.errorTextStyle}>
          {this.props.error}
        </Text>

        <LoginSection>
          {this.renderButtonEnter()}
          {this.renderButtonJoin()}
          {this.renderSpinner()}
        </LoginSection>
      </FadeInView>

    </Image>
    );
  }
}

const styles = {
  errorTextStyle: {
    fontSize: 16,
    alignSelf: 'center',
    color: 'red'
  },
  containerStyle: {
    flex: 1,
    width: undefined,
    height: undefined,
    backgroundColor:'transparent'
  }
};

const mapStateToProps = state => {
  return {
    email: 'test@test.com', //replace after dev
    password: 'password', //same
    error: state.auth.error,
    loading: state.auth.loading
  };
};

export default connect(mapStateToProps, {
  emailChanged, passwordChanged, loginUser, createUser
})(LoginForm);
