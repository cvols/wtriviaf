/**
 * @flow
 *
 * This file sets up our Logged In screens.
 *
 * We use `react-navigation` for all navigation as it is the current standard JS navigation library
 * for react-native
 */
import React from 'react';
import { StyleSheet } from 'react-native';
import { StackNavigator, TabBarBottom, TabNavigator } from 'react-navigation';

import Icon from '../../ui/components/Icon';
import * as Theme from '../../theme';

// Load all our logged in screens
import ChangeEmail from '../../auth/email/screens/ChangeEmail';
import ChangePassword from '../../auth/email/screens/ChangePassword';
import LinkEmail from '../../auth/email/screens/LinkEmail';
import LinkPhone from '../../auth/phone/screens/LinkPhone';
import LoggedInHome from './LoggedInHome';
import Profile from './Profile';
import ReAuthScreen from '../../auth/core/screens/ReAuthScreen';
import Lobby from './Lobby';
import CreateLeague from './CreateLeague';
import InviteFriends from './InviteFriends';
import FindLeague from './FindLeague';
import PlayNow from './PlayNow';


type TabBarIcon = {
  tintColor: string,
};

const styles = StyleSheet.create({
  icon: {
    fontSize: 30,
  },
});

/*
 * We use a StackNavigator for the Home tab. This allows screens to stack on top of each
 * other and to navigate backwards and forwards between them.
 *
 * Find out more: https://reactnavigation.org/docs/navigators/stack
 */
const HomeStack = StackNavigator({
  LoggedInHome: { screen: LoggedInHome },
  CreateLeague: {
    screen: CreateLeague,
    navigationOptions: ({ navigation }) => ({
      tabBarVisible: false,
      title: 'Create a League',
    }),
  },
  InviteFriends: {
    screen: InviteFriends,
    navigationOptions: ({ navigation }) => ({
      tabBarVisible: false,
      title: 'Invite Friends',
    }),
  },
  FindLeague: {
    screen: FindLeague,
    navigationOptions: ({ navigation }) => ({
      tabBarVisible: false,
      title: 'Find a League',
    }),
  },
  PlayNow: {
    screen: PlayNow,
    navigationOptions: ({ navigation }) => ({
      tabBarVisible: false,
      title: 'Play Now',
    }),
  },
}, {
  // Explicitly set the default screen to use
  initialRouteName: 'LoggedInHome',
  navigationOptions: {
    title: 'Home',
  },
});

/*
 * We use a StackNavigator for the Profile tab. This allows screens to stack on top of each
 * other and to navigate backwards and forwards between them.
 *
 * Find out more: https://reactnavigation.org/docs/navigators/stack
 */
const ProfileStack = StackNavigator({
  ChangeEmail: { screen: ChangeEmail },
  ChangePassword: { screen: ChangePassword },
  LinkEmail: { screen: LinkEmail },
  LinkPhone: { screen: LinkPhone },
  Profile: { screen: Profile },
}, {
  // Explicitly set the default screen to use
  initialRouteName: 'Profile',
});

/*
 * We use a StackNavigator for the Profile tab. This allows screens to stack on top of each
 * other and to navigate backwards and forwards between them.
 *
 * Find out more: https://reactnavigation.org/docs/navigators/stack
 */
const LobbyStack = StackNavigator({
  Lobby: { screen: Lobby },
}, {
  initialRouteName: 'Lobby',
}); 

/*
 * We use a TabNavigator for the main logged in screens. Each tab consists of its own set
 * of screens.
 *
 * Find out more: https://reactnavigation.org/docs/navigators/tab
 */
const Tabs = TabNavigator({
  Home: {
    navigationOptions: {
      tabBarIcon: ({ tintColor }: TabBarIcon) => <Icon name="md-home" style={[styles.icon, { color: tintColor }]} />,
      tabBarLabel: 'Home',
    },
    screen: HomeStack,
  },
  Lobby: {
    navigationOptions: {
      tabBarIcon: ({ tintColor }: TabBarIcon) => <Icon name="md-list" style={[styles.icon, { color: tintColor }]} />,
      tabBarLabel: 'Lobby',
    },
    screen: LobbyStack,
  },
  Profile: {
    navigationOptions: {
      tabBarIcon: ({ tintColor }: TabBarIcon) => <Icon name="md-person" style={[styles.icon, { color: tintColor }]} />,
      tabBarLabel: 'Profile',
    },
    screen: ProfileStack,
  },
}, {
  initialRouteName: 'Home',
  tabBarOptions: {
    activeTintColor: Theme.PRIMARY,
  },
  tabBarComponent: TabBarBottom,
  tabBarPosition: 'bottom',
});

/*
 * We use a StackNavigator as the basis for the logged in screens. This allows us to present the
 * re-authentication screen over the top of any other screen.
 *
 * Find out more: https://reactnavigation.org/docs/navigators/stack
 */
export default StackNavigator({
  Tabs: { screen: Tabs },
  ReAuth: { screen: ReAuthScreen },
}, {
  cardStyle: {
    backgroundColor: 'transparent',
    opacity: 1,
  },
  headerMode: 'none',
  initialRouteName: 'Tabs',
  mode: 'modal',
});
