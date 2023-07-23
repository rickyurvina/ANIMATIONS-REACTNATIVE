
import React from 'react';
import {
  StyleSheet,
  View,
} from 'react-native';
import Animation2 from './components/Animation2';


function App(): JSX.Element {
  
  return (
    <View style={styles.content}>
      <Animation2 />
     
    </View>
  );
}

const styles = StyleSheet.create({
  content:{
    marginTop: 50,
  }
  
});

export default App;
