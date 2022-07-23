import React, { useState } from 'react';
import {
  Text,
  View,
  StyleSheet,
  ScrollView,
  RefreshControl,
  FlatList,
} from 'react-native';

const App = () => {
  const [items, setItems] = useState([
    { name: 'item 1' },
    { name: 'item 2' },
    { name: 'item 3' },
    { name: 'item 4' },
    { name: 'item 5' },
    { name: 'item 6' },
    { name: 'item 8' },
    { name: 'item 9' },
    { name: 'item 10' },
    { name: 'item 11' },
    { name: 'item 12' },
    { name: 'item 13' },
    { name: 'item 14' },
    { name: 'item 15' },
    { name: 'item 16' },
    { name: 'item 17' },
    { name: 'item 18' },
    { name: 'item 19' },
    { name: 'item 20' },
    { name: 'item 21' },
    { name: 'item 22' },
  ]);
  const [refreshing, setRefreshing] = useState(false);
  const onRefresh = () => {
    setRefreshing(true);
    setItems([...items, { name: `item ${items.length + 2}` }])
    setRefreshing(false);
  }
  return (
    <FlatList
      data={items}
      keyExtractor={(item, index) => index}
      renderItem={({ item }) => <View style={styles.item}>
        <Text style={styles.text}>{item.name}</Text>
      </View>}
      refreshControl={
        <RefreshControl
          refreshing={refreshing}
          onRefresh={onRefresh}
          colors={['#ff00ff']}
        />
      }
    />
    // <ScrollView style={styles.body} refreshControl={
    //   <RefreshControl
    //     refreshing={refreshing}
    //     onRefresh={onRefresh}
    //     colors={['#ff00ff']}
    //   />
    // }>
    //   {
    //     items.map(i => <View key={i.key} style={styles.item}>
    //       <Text style={styles.text}>{i.item}</Text>
    //     </View>)
    //   }
    // </ScrollView>
  );
};

const styles = StyleSheet.create({
  body: {
    flexDirection: 'column',
    flex: 1,
    backgroundColor: '#ffffff',
  },
  item: {
    backgroundColor: '#4ae1fe',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10
  },
  text: {
    fontSize: 35,
    color: 'black',
    fontStyle: 'italic',
    margin: 10
  }
});

export default App;
