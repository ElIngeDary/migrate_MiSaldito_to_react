import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Movimiento } from '../types/movimiento';

interface Props {
  item: Movimiento;
}

export const MovimientoItem: React.FC<Props> = ({ item }) => {
  return (
    <View style={styles.container}>
      <View style={styles.infoContainer}>
        <Text style={styles.comercio}>{item.comercio}</Text>
        <Text style={styles.fecha}>{item.fecha}</Text>
      </View>
      <Text style={styles.monto}>${item.monto.toFixed(2)}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#E0E0E0',
    backgroundColor: '#FFFFFF',
  },
  infoContainer: {
    flex: 1,
  },
  comercio: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333333',
  },
  fecha: {
    fontSize: 12,
    color: '#777777',
    marginTop: 2,
  },
  monto: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#003366',
  },
});