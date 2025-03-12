import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import FormScreen from './src/FormScreen';


const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <FormScreen />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

export default App;
