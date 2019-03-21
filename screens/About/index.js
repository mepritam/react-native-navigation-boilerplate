import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Button} from 'react-native';
import { Navigation } from 'react-native-navigation';


export default class About extends Component{

gotoScreen(screenName){
    Navigation.push(this.props.componentId,{
        component:{
            name: screenName
        }
    })

}  
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Welcome to Boilerplate AboutScreen</Text>
        <Text style={styles.instructions}>To get started, edit App.js</Text>
        <Button title={'Click'} onPress={()=>{Navigation.pop(this.props.componentId)}} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
