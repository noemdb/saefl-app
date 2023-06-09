import * as React from 'react';
import { WebView } from 'react-native-webview';
import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';

export default function App() {
  return (
    <WebView
      style={styles.container}
      source={{ uri: 'https://uefrayluisamigosf.com/saefl/movile/android/welcome' }}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Constants.statusBarHeight,
  },
});
