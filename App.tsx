import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import AppNavigator from './src/Navigation/AppNavigator';


export default function App() {
  return (
    <>
      <AppNavigator/>
      <StatusBar style="auto" />
    </>
  );
}
