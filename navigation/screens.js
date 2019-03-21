import { Navigation } from 'react-native-navigation';



export function registerScreens() {
    Navigation.registerComponent('Home', () => require('../screens/Home').default);
    Navigation.registerComponent('About', () => require('../screens/About').default);
}