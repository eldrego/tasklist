import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Text, View, TouchableHighlight } from 'react-native';
import styles from '../css/styles';

import Render from './Render';

export default class TaskRow extends Component {
  constructor(props) {
    super(props);

    this.onDonePressed = this.onDonePressed.bind(this);
  }

  onDonePressed() {
    this.props.onDone(this.props.todo);
  }

  render() {
    return Render.bind(this)(styles);
  }
}

TaskRow.propTypes = {
  onDone: PropTypes.func.isRequired,
  todo: PropTypes.shape({
    task: PropTypes.string.isRequired,
  }).isRequired,
};
