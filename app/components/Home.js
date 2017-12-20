import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, Text, TouchableHighlight } from 'react-native';
import styles from '../css/styles';

export default class Task extends Component {
  static navigationOptions = {
    title: 'Welcome',
  };

  render() {
    const { navigate } = this.props.navigation;
    const onPress = () => {
      navigate('Task');
    };

    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Welcome to Tasklist</Text>

        <TouchableHighlight
          style={styles.viewButton}
          onPress={onPress}
        >
          <Text style={styles.addTaskText}>View Tasks</Text>
        </TouchableHighlight>
      </View>
    );
  }
}

Task.propTypes = {
  navigation: PropTypes.object.isRequired,
};
