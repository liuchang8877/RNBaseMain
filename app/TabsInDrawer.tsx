import React from 'react';
import { Platform, ScrollView } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { createDrawerNavigator } from 'react-navigation';
import SimpleTabs from './SimpleTabs';
import StacksOverTabs from './StacksOverTabs';
import {
  createAppContainer,
  createStackNavigator,
  SafeAreaView,
} from 'react-navigation';

const TabsInDrawer = createDrawerNavigator({
  SimpleTabs: {
    navigationOptions: {
      drawerIcon: ({ tintColor }: { tintColor: string }) => (
        <MaterialIcons name="filter-1" size={24} style={{ color: tintColor }} />
      ),
      drawerLabel: 'Simple tabs',
    },
    screen: SimpleTabs,
  },
  StacksOverTabs: {
    navigationOptions: {
      drawerIcon: ({ tintColor }: { tintColor: string }) => (
        <MaterialIcons name="filter-2" size={24} style={{ color: tintColor }} />
      ),
      drawerLabel: 'Stacks Over Tabs',
    },
    screen: StacksOverTabs,
  },
});

const AppNavigator = createAppContainer(TabsInDrawer);

export default AppNavigator;
