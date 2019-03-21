/**
 * @format
 */

import {AppRegistry} from 'react-native';
//import App from './App2';
//import App from './app/App';
import {name as appName} from './app.json';
import TabsInDrawer from './app/TabsInDrawer';
AppRegistry.registerComponent(appName, () => TabsInDrawer);
