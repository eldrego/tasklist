import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  View,
  Text,
  ListView,
  TouchableHighlight,
  Switch,
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
        <View
          style={styles.toggleRow}
        >
          <Switch
            onValueChange={this.props.onToggle}
            value={this.props.filter !== 'pending'}
          />
          <Text
            style={styles.toggleText}
          >
            Showing {this.props.todos.length} {this.props.filter} todos(s)
          </Text>
        </View>

        <ListView
          enableEmptySections
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
  filter: PropTypes.string.isRequired,
  onDone: PropTypes.func.isRequired,
  onToggle: PropTypes.func.isRequired,
  todos: PropTypes.arrayOf(PropTypes.object).isRequired,
};
