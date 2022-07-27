import React, { useState } from 'react';
import { View, StyleSheet, Text, TextInput } from 'react-native';

const App = () => {
  const [name, setName] = useState('');
  return (
    <View style={styles.body}>
      <Text style={styles.text}>
        Please Write Your Name
      </Text>
      <TextInput
        style={styles.input}
        value={name}
        onChangeText={(t) => setName(t)}
        placeholder="Your Name"
        placeholderTextColor="#c3c3c3"
        secureTextEntry={true}
      />
      <Text style={styles.text}>Your name is: {name}</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  body: {
    flexDirection: 'column',
    flex: 1,
    backgroundColor: '#ffffff',
    alignItems: 'center'
  },
  text: {
    color: '#000000',
    fontSize: 20,
    margin: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: '#555',
    width: 200,
    borderRadius: 5,
    paddingLeft: 10,
    textAlign: 'center',
    fontSize: 20,
    color: 'black'
  }
});

export default App;
