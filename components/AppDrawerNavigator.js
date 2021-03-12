import * as React from 'react';
import { AppTabNavigator } from './AppTabNavigator';
import { createDrawerNavigator } from 'react-navigation-drawer';
import  CustomSideBarMenu  from './CustomSideBarMenu';
import SettingsScreen from '../screens/SettingsScreen';
import MyDonationScreen from '../screens/MyDonationsScreen';
import NotificationsScreen from '../screens/NotificationsScreen';

export const AppDrawerNavigator = createDrawerNavigator({
    Home: {screen: AppTabNavigator},
    MyDonations: {screen: MyDonationScreen},
    Settings: {screen: SettingsScreen},
    Notifications: {screen: NotificationsScreen},
},
  {
    contentComponent: CustomSideBarMenu
  },
  {
      initialRouteName: 'Home',
  }
)