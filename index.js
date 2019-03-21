/**
 * @format
 */

import { Navigation } from "react-native-navigation";

import { registerScreens } from "./navigation/screens";

// register screens
registerScreens();

// set up component naviagtion 
Navigation.events().registerAppLaunchedListener(() => {
  Navigation.setRoot({
    root: {
      stack: {
        id: 'App',
        children: [
          {
            component: {
              name: 'Home',
              options: {
                topBar: {
                  visible: false,
                  drawBehind: true
                },
                statusBar: {
                  drawBehind: false,
                  backgroundColor: 'white'
                }
              }
            }
          },
        ],
      }
    },
  });
});
