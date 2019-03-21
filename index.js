/**
 * @format
 */

import { Navigation } from "react-native-navigation";
import App from './App';

// register component
Navigation.registerComponent(`App`, () => App);

// set up component naviagtion 
Navigation.events().registerAppLaunchedListener(() => {
  Navigation.setRoot({
    root: {
      component: {
        name: "App"
      }
    }
  });
});
