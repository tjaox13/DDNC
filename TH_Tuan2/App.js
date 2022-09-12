import React from 'react';
import { StyleSheet, Button, View, SafeAreaView, Text, Alert,TextInput } from 'react-native';
const Separator = () => (
  <View style={styles.separator} />
);


const App = () => (
  <SafeAreaView style={styles.container}>
    <TextInput
        style={styles.input}
        placeholder="Hạo"
        keyboardType="numeric"
      />
    <View>
      <Button
        title="Show"
        onPress={() => Alert.alert('Simple Button pressed')}
      />
    </View>
    
    <View>
      <Text style={styles.title}>
        Hello: Hạo
      </Text>
      
    </View>
  </SafeAreaView>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    marginHorizontal: 16,
  },
  title: {
    textAlign: 'center',
    marginVertical: 8,
  },
  separator: {
    marginVertical: 8,
    borderBottomColor: '#737373',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  input: {
    height: 40,
    width: 100,
    margin: 12,
    marginLeft: 50,
    borderWidth: 1,
    padding: 10,
  },
});

export default App;