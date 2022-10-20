import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Card from './card';

export default function App() {
  return (
    <View style={styles.container}>
     <Card stamps={6} company={"Starbuck"}/>
     <Card stamps={6} company={"GG"}/>
     <Card stamps={6} company={"no ideia"}/>
      <StatusBar style="auto" />
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