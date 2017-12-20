import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Alert } from 'react-native';
import { NavigationActions } from 'react-navigation';
import TaskList from '../components/TaskList';

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
    this.state = {
      todos: [
        {
          task: 'Navy Seals Green Team',
        },
        {
          task: 'Shooter - Being Jack Ryan',
        },
      ],
      navigate,
    };

    this.onAddNew = this.onAddNew.bind(this);
    this.onDone = this.onDone.bind(this);
  }

  onAddNew(task) {
    this.state.todos.push({ task });
    this.setState({ todos: this.state.todos });
    this.props.navigation.dispatch(backAction);
  }

  onDone(todo) {
    const filteredTodos = this.state.todos.filter((filterTodo) => {
      return filterTodo !== todo;
    });
    this.setState({ todos: filteredTodos });
  }

  render() {
    const addTask = () => {
      this.state.navigate('TaskForm', {
        onAddNew: this.onAddNew,
      });
    };

    return (
      <TaskList
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
