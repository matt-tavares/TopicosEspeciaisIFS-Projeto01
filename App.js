import React from 'react';
import type {Node} from 'react';
import {SafeAreaView, StyleSheet, Text} from 'react-native';

const App: () => Node = () => {

  return (
    <SafeAreaView style={styles.sectionContainer}>
      <Text style={styles.sectionTitle}>Primeiro projeto</Text>
      <Text style={styles.sectionDescription}>Tótipos Especiais | 2021.1</Text>
      <Text style={styles.sectionDescription}>Aluno: Matheus Tavares</Text>
      <Text style={styles.sectionDescription}>Professor: Paulo Amaral</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#B880FA',
  },
  sectionTitle: {
    fontSize: 34,
    fontWeight: '600',
    color: '#fff',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: '#fff',
  },
});

export default App;
