import { StyleSheet, Dimensions } from 'react-native';

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    paddingTop: 1,
    backgroundColor: '#F5FCFF',
    width: Dimensions.get('window').width,
  },
  container: {
    flex: 1,
    marginLeft: 10,
    marginRight: 10,
    marginTop: 20,
  },
  welcome: {
    fontSize: 25,
    textAlign: 'center',
    margin: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  content: {
    justifyContent: 'center',
    alignItems: 'center',
    color: 'white',
  },
  taskRow: {
    justifyContent: 'space-between',
    padding: 20,
    backgroundColor: '#fff',
    flex: 1,
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: '#e7e7e7',
  },
  taskItem: {
    fontWeight: '300',
  },
  addTaskButton: {
    height: 50,
    marginBottom: 30,
    borderColor: '#3399cc',
    backgroundColor: '#3399cc',
    justifyContent: 'center',
    alignItems: 'center',
  },
  addTaskText: {
    color: '#fff',
    fontWeight: '600',
  },
  viewButton: {
    height: 50,
    margin: 100,
    borderColor: '#3399cc',
    backgroundColor: '#3399cc',
    justifyContent: 'center',
    alignItems: 'center',
  },
  taskForm: {
    flex: 1,
    justifyContent: 'flex-start',
    paddingTop: 80,
    backgroundColor: '#F5FCFF',
  },
  taskInput: {
    borderColor: '#e3e3e3',
    backgroundColor: '#ffffff',
    borderWidth: 1,
    borderRadius: 3,
    height: 50,
    marginLeft: 10,
    marginRight: 10,
    marginBottom: 30,
    padding: 15,
  },
  formButton: {
    height: 45,
    alignSelf: 'stretch',
    margin: 10,
    backgroundColor: '#3399cc',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 18,
    fontWeight: '600',
    color: '#ffffff',
  },
  cancelButton: {
    backgroundColor: '#333333',
  },
  doneButton: {
    borderColor: '#e3e3e3',
    backgroundColor: '#eaeaea',
    borderWidth: 1,
    borderRadius: 6,
    padding: 5,
  },
  doneButtonText: {
    fontSize: 11,
  },
  toggleRow: {
    flexDirection: 'row',
    padding: 10,
  },
  toggleText: {
    fontSize: 15,
    paddingLeft: 10,
    paddingTop: 5,
  },
});

export default styles;
