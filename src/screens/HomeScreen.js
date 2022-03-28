import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, } from 'react-native';

import { Header, Stories, Post } from '../components';

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <Header />
      <Stories />
      <Post />
      <StatusBar style="auto" />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignContent: "center",
    justifyContent: "flex-start",
  },

});
