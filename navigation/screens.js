import { Navigation } from 'react-native-navigation';
import { Provider } from "react-redux";
import configureStore from "../store/configStore";

const store = configureStore()


export function registerScreens() {
    Navigation.registerComponentWithRedux('Home', () => require('../screens/Home').default, Provider, store);
    Navigation.registerComponent('About', () => require('../screens/About').default);
}