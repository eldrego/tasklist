import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Swipeout from 'react-native-swipeout';

const localStyle = StyleSheet.create({
  rowContainer: {
    marginBottom: 3,
  },
});

export default function render(baseStyle) {
  const buttons = [
    {
      text: 'Done',
      backgroundColor: '#4EB433',
      underlayColor: '#dddddd',
      onPress: this.onDonePressed.bind(this),
    },
  ];

  return (
    <View style={localStyle.rowContainer}>
      <Swipeout
        backgroundColor="#fff"
        right={buttons}
      >
        <View style={baseStyle.taskRow}>
          <Text>{this.props.todo.task}</Text>
        </View>
      </Swipeout>
    </View>
  );
}
