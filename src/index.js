import React from 'react';
import {AppRegistry, StyleSheet, Text, View} from 'react-native';

class App extends React.Component {
  render() {
    return (
      <View style={styles.outer}>
        <View style={styles.inner} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  outer: {
    height: 2048,
    backgroundColor: 'red',
    padding: 44
  },
  inner: {
    flex: 1,
    backgroundColor: 'green'
  }
});

AppRegistry.registerComponent('App', () => App);
AppRegistry.runApplication('App', {
  rootTag: document.getElementById('root')
});
