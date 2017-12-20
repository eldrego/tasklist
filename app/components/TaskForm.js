import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Text, View, TextInput, TouchableHighlight } from 'react-native';
import styles from '../css/styles';

export default class TaskForm extends Component {
  static navigationOptions = {
    title: 'Add Task',
  };

  constructor(props) {
    super(props);

    this.state = {
      task: '',
    };

    this.onTextChange = this.onTextChange.bind(this);
  }

  onTextChange(text) {
    this.setState({
      task: text,
    });
  }

  render() {
    const { goBack, state } = this.props.navigation;
    const onCancel = () => {
      goBack();
    };

    return (
      <View style={styles.taskForm}>
        <TextInput
          onChangeText={this.onTextChange}
          style={styles.taskInput}
        />

        <TouchableHighlight
          style={styles.formButton}
          onPress={() => {
            state.params.onAddNew(this.state.task);
          }}
        >
          <Text style={styles.buttonText}>Add</Text>
        </TouchableHighlight>

        <TouchableHighlight
          style={[styles.formButton, styles.cancelButton]}
          onPress={onCancel}
        >
          <Text style={styles.buttonText}>Cancel</Text>
        </TouchableHighlight>
      </View>
    );
  }
}

TaskForm.propTypes = {
  navigation: PropTypes.object.isRequired,
};
