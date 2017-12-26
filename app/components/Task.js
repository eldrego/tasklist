import React, { Component } from 'react';
import PropTypes from 'prop-types';
// import { Alert } from 'react-native';
import { NavigationActions } from 'react-navigation';
import TaskList from '../components/TaskList';
import store from '../../taskListStore';

const backAction = NavigationActions.back({
  // key: 'TaskForm',
});

export default class Task extends Component {
  static navigationOptions = {
    title: 'Tasks',
  };

  constructor(props) {
    super(props);
    const { navigate } = this.props.navigation;

    this.state = store.getState();
    this.state.navigate = navigate;

    store.subscribe(() => {
      this.setState(store.getState());
    });

    this.onAddNew = this.onAddNew.bind(this);
    this.onDone = this.onDone.bind(this);
    this.onToggle = this.onToggle.bind(this);
  }

  onAddNew(task) {
    store.dispatch({
      type: 'ADD_TASK',
      task,
    });
    this.props.navigation.dispatch(backAction);
  }

  onDone(task) {
    store.dispatch({
      type: 'DONE_TASK',
      task,
    });
  }

  onToggle() {
    const filter = this.state.filter === 'pending' ? 'done' : 'pending';
    store.dispatch({
      type: 'TOGGLE_STATE',
      filter,
    });
  }

  render() {
    const addTask = () => {
      this.state.navigate('TaskForm', {
        onAddNew: this.onAddNew,
      });
    };

    return (
      <TaskList
        filter={this.state.filter}
        onToggle={this.onToggle}
        addTask={addTask}
        onDone={this.onDone}
        todos={this.state.todos}
      />
    );
  }
}

Task.propTypes = {
  navigation: PropTypes.object.isRequired,
};
