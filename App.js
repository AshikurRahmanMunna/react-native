import React, { useState } from 'react';
import {
  Text,
  View,
  StyleSheet,
  Button,
  ScrollView,
  Linking,
} from 'react-native';

const App = () => {
  return (
    <View style={styles.body}>
      
    </View>
  );
};

const styles = StyleSheet.create({
  body: {
    flexDirection: 'column',
    flex: 1,
    backgroundColor: '#ffffff',
    alignItems: 'center',
    justifyContent: 'center'
  },
  text: {
    fontSize: 40,
    color: 'black',
    fontStyle: 'italic'
  }
});

export default App;
