import React, { Component } from 'react';
import {
  View,
} from 'react-native';
import { StackNavigator } from 'react-navigation';
import Task from './app/components/Task';
import Home from './app/components/Home';
import TaskForm from './app/components/TaskForm';
import styles from './app/css/styles';

const Navigator = StackNavigator({
  // Home: { screen: Home },
  Task: { screen: Task },
  TaskForm: { screen: TaskForm },
});

export default class App extends Component {
  render() {
    return (
      <View style={styles.mainContainer}>
        <Navigator />
      </View>
    );
  }
}
