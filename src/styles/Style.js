import React from 'react';
import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  container: {
    flex: 1,
  },

  result: {
    flex: 2,
    backgroundColor: 'grey',
    alignItems: 'flex-end',
    justifyContent: 'center',
  },

  calculation: {
    flex: 1,
    backgroundColor: '#d6d6c2',
    alignItems: 'flex-end',
    justifyContent: 'center',
  },

  buttons: {
    flex: 7,
    flexDirection: 'row',
  },

  numbers: {
    flex: 3,
    backgroundColor: '#434343',
  },
  operations: {
    flex: 1,
    backgroundColor: '#636363',
    justifyContent: 'space-around',
    alignItems: 'center',
  },

  resultText: {
    fontSize: 30,
    fontWeight: 'bold',
    color: 'white',
  },
  calculationText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
  },

  row: {
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
  },

  number: {
    fontSize: 30,
    color: 'white',
  },

  operationButtons: {
    fontSize: 30,
    color: 'white',
  },
});
