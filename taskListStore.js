import { createStore } from 'redux';

const defaultTasks = [
  {
    task: 'Initial todo in store',
    status: 'pending',
  },
];
const defaultState = {
  todos: defaultTasks,
  allTasks: defaultTasks,
  filter: 'pending',
  navigate: '',
};

function taskListStore(state = defaultState, action) {
  switch (action.type) {
    case 'ADD_TASK':
      const allTasks = state.allTasks.concat([{
        task: action.task,
        status: 'pending',
      }]);

      const tasks = Object.assign({}, state, {
        allTasks,
        todos: allTasks.filter(todo => todo.status === state.filter),
      });
      return tasks;

    case 'DONE_TASK':
      const doneTask = Object.assign({}, action.task, {
        status: 'done',
      });

      const updateallTasks = state.allTasks.map((task) => {
        return task === action.task ? doneTask : task;
      });

      return Object.assign({}, state, {
        allTasks: updateallTasks,
        todos: updateallTasks.filter(todo => todo.status === state.filter),
      });

    case 'TOGGLE_STATE':
      return Object.assign({}, state, {
        filter: action.filter,
        todos: state.allTasks.filter(todo => todo.status === action.filter),
      });

    default:
      return state;
  }
}

export default createStore(taskListStore);
