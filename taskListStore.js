import { createStore } from 'redux';

const defaultState = {
  todos: [
    {
      task: 'Initial todo in store',
    },
  ],
  nagivate: '',
};

function taskListStore(state = defaultState, action) {
  switch (action.type) {
    case 'ADD_TASK':
      return Object.assign({}, state, {
        todos: state.todos.concat([{
          task: action.task,
        }]),
      });
    default:
      return state;
  }
}

export default createStore(taskListStore);
