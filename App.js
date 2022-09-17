import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';
import { Provider } from 'react-redux';
import { store } from './Redux/store';

import MainNavigator from "./Routes/MainNavigator";

export default function App() {
  return (
    <Provider store={store}>
        <SafeAreaProvider>
        <SafeAreaView style={{ flex: 0, backgroundColor: '#7978B8'}}></SafeAreaView>
        <NavigationContainer>
          <MainNavigator/>
        </NavigationContainer>
      </SafeAreaProvider>
    </Provider>
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
