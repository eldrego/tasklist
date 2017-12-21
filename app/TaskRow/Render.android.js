import React from 'react';
import {
  View,
  Text,
  TouchableHighlight,
  Image,
  StyleSheet,
} from 'react-native';

const localStyle = StyleSheet.create({
  doneButton: {
    borderRadius: 5,
  },
  taskItem: {
    fontWeight: '300',
  },
  rowContainer: {
    marginBottom: 3,
  },
});

export default function render(styles) {
  return (
    <View style={[styles.taskRow, localStyle.doneButton]}>
      <Text>{this.props.todo.task}</Text>

      <TouchableHighlight
        style={localStyle.doneButton}
        onPress={this.onDonePressed}
        underlayColor="#dddddd"
      >
        <Image
          source={require('../images/checked.png')}
        />
      </TouchableHighlight>
    </View>
  );
}
