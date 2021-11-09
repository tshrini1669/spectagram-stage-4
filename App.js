import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import CreatePost from './screens/CreatePost';
import Feed from './screens/Feed';
import Profile from './screens/Profile';
export default function App() {
  return (
    <View style={styles.container}>
    <CreatePost/>
    <Feed/>
    <Profile/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
