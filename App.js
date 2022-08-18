import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDfDt8Z1aNiS_GvfKcKt6JRkEh6_yHWlH0",
  authDomain: "aula1-c0b6e.firebaseapp.com",
  databaseURL: "https://aula1-c0b6e-default-rtdb.firebaseio.com",
  projectId: "aula1-c0b6e",
  storageBucket: "aula1-c0b6e.appspot.com",
  messagingSenderId: "819448509725",
  appId: "1:819448509725:web:9be4bcc655b015fec41df4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
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
