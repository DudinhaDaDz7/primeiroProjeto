import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Title from './src/components/';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Nomes: ET Bilu e Dudinha</Text>
      <Text>Nomes: ET Bilu e Dudinha</Text>
      <Text>Nomes: ET Bilu e Dudinha</Text>
      <Title/>

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
