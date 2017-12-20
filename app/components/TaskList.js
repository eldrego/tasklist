import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  View,
  Text,
  ListView,
  TouchableHighlight,
} from 'react-native';
import styles from '../css/styles';
import TaskRow from '../TaskRow';

export default class TaskList extends Component {
  constructor(props, context) {
    super(props, context);

    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2,
    });

    this.state = {
      dataSource: ds.cloneWithRows(props.todos),
    };

    this.renderRow = this.renderRow.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    const dataSource = this.state.dataSource.cloneWithRows(nextProps.todos);
    this.setState({ dataSource });
  }

  renderRow(todo) {
    return (
      <TaskRow
        onDone={this.props.onDone}
        todo={todo}
      />
    );
  }

  render() {
    return (
      <View style={styles.container}>
        <ListView
          dataSource={this.state.dataSource}
          key={this.props.todos}
          renderRow={this.renderRow}
        />

        <TouchableHighlight
          style={styles.addTaskButton}
          onPress={this.props.addTask}
        >
          <Text style={styles.addTaskText}>Add Task</Text>
        </TouchableHighlight>
      </View>);
  }
}

TaskList.propTypes = {
  addTask: PropTypes.func.isRequired,
  onDone: PropTypes.func.isRequired,
  todos: PropTypes.arrayOf(PropTypes.object).isRequired,
};
