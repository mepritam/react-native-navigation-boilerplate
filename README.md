
## REACT NATIVE NAVIGATION BOILERPLATE
**Introduction:**
Well, this is a react native ready to use template structure. It comes with :

 - React Native v.0.59.4
 - React Native Navigation v2.15.0
 - Redux 4.0.1
 - Redux Saga 1.0.2
 - Redux Immutable 4.0.0
 - Reselect 4.0.0
 - React Redux Tool compatibility
 - Axios 0.18.0
 - Immutable 4.0.0-rc.12
 - React Native Animatable 1.3.2

**Is it for beginner ?**
Yes a beginner and professional both can start with this boilerplate. But it is recommended to use default CLI to getting started with React Native.

**How to start  (Basic Setup)**

 -  Clone repo first `git clone git@github.com:mepritam/react-native-navigation-boilerplate.git`
 - run `npm install` inside this repo folder.
 - Definitely you want to change the default project name. So don't worry  you can use [react-native-rename](https://github.com/junedomingo/react-native-rename#readme)
 - Inside screen folder you can create your screen (example Home is there)
 - To use this screen in this application you need to first register that with react-native-navigation. To do so open `navigation/screens.js` and import add your screen like this `Navigation.registerComponent('About', () => require('../screens/About').default);`. If you want to use redux with this screen then you need some little bit modification. Instead of registerComponent you have to use registerComponentWithRedux. `Navigation.registerComponentWithRedux('About', () => require('../screens/About').default, Provider, store);`If above steps are done then you are good to go in the next steps.
 - This boilerplate like other RN app also initially hit `index.js` first. You can change you initial screen here under `Navigation.events().registerAppLaunchedListener(() => {}).` Make sure you have little bit understanding of react-native-navigation or you can user this [docs](https://wix.github.io/react-native-navigation/#/).
 
 **How to start (Advanced setup)**
 

 - If you want to use redux, saga, reselect with your application then you must follow this guide else you can skip this part.
 - In this boilerplate you can use screen wise **action**,**reducer**, **saga**, **reselect** (Strongly recommended to have a look inside `screens/Home/`). For example; If you need to create a screen named **Gallery** then you have to create a folder  `screens/Gallery` and inside this you can create separate files **index.js**, **saga.js**,**reducer.js** etc (It's totally up to you) . If you have followed above steps then don't forget to include **saga.js** and **reducer.js** inside `store/sagas.js` and `store/reducers.js` otherwise your reducer and saga will not work. Go through the **screens/Home** folder example for better understanding.
![Spinch](https://i.ibb.co/cvS1PQv/Screenshot-20190417-185350-1.jpg)

**Contribute**
This is open source project. Any idea from you guys are always welcome. You are free to fork this repo and create a PR if you have done good changes or have added new packages.