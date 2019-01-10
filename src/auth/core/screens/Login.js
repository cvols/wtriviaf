// The Login screen allows the user to login.  It is made up of two tabs:

// 1) Email Login
// 2) Phone Login

// And a third block handling Social Login.

import React from 'react';
import PropTypes from 'prop-types';

import EmailLogin from '../../email/components/EmailLogin';
import PhoneLogin from '../../phone/components/PhoneLogin';
import SocialLogin from '../../social/components/SocialLogin';
import Screen from '../../../ui/components/Screen';
import Tabs from '../../../ui/components/tab/Tabs';
import Tab from '../../../ui/components/tab/Tab';

export default class Login extends React.Component {
  // Set the navigation options for `react-navigation`
  static navigationOptions = {
    headerTitle: 'Log in',
  };

  constructor(props) {
    super(props);
    // Set the default state email or phone
    this.state = {
      selected: 'email',
    };
  }

  render() {
    const { selected } = this.state;
    return (
      <Screen>
        <Tabs>
          <Tab
            active={selected === 'email'}
            heading="Email"
            icon="md-mail"
            onPress={this.selectEmail}
          />
          <Tab
            active={selected === 'phone'}
            heading="Phone"
            icon="md-call"
            onPress={this.selectPhone}
          />
        </Tabs>
        {selected === 'email' && <EmailLogin />}
        {selected === 'phone' && <PhoneLogin />}
        <SocialLogin title="Login with your social account" />
      </Screen>
    );
  }

  selectEmail = () => this.setState({ selected: 'email' });

  selectPhone = () => this.setState({ selected: 'phone' });
}
