// The SignUp screen allows the user to sign up.  It is made up of two tabs:
// 1) Email Sign Up
// 2) Phone Sign Up
// And a third block handling Social Sign Up.
import React from 'react';
import PropTypes from 'prop-types';

import EmailSignUp from '../../email/components/EmailSignUp';
import PhoneSignUp from '../../phone/components/PhoneSignUp';
import Screen from '../../../ui/components/Screen';
import SocialLogin from '../../social/components/SocialLogin';
import Tabs from '../../../ui/components/tab/Tabs';
import Tab from '../../../ui/components/tab/Tab';

export default class SignUp extends React.Component {
  // Set the navigation options for `react-navigation`
  static navigationOptions = {
    headerTitle: 'Sign up',
  };

  constructor(props) {
    super(props);
    // selected can be email or phone only
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
        {selected === 'email' && <EmailSignUp />}
        {selected === 'phone' && <PhoneSignUp />}
        <SocialLogin title="Sign up with your social account" />
      </Screen>
    );
  }

  selectEmail = () => {
    this.setState({ selected: 'email' });
  }

  selectPhone = () => {
    this.setState({ selected: 'phone' });
  }
}
