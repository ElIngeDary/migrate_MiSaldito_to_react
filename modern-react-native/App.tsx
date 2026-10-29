import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, FlatList, SafeAreaView, StatusBar } from 'react-native';
import { Movimiento } from './src/types/movimiento';
import { MovimientoItem } from './src/components/MovimientoItem';

export default function App() {
  const [saldo, setSaldo] = useState<number>(0);
  const [movimientos, setMovimientos] = useState<Movimiento[]>([]);

  useEffect(() => {
    // Simulando consulta de saldo y transacciones a la API REST
    setSaldo(150.75);
    setMovimientos([
      { id: '1', comercio: 'Recarga Claro', fecha: '24/10/2026 10:15', monto: 5.00, tipo: 'RECARGA' },
      { id: '2', comercio: 'Supermaxi', fecha: '23/10/2026 18:30', monto: 32.50, tipo: 'PAGO' },
      { id: '3', comercio: 'Recarga CNT', fecha: '22/10/2026 14:00', monto: 10.00, tipo: 'RECARGA' },
      { id: '4', comercio: 'Pago de Luz CNEL', fecha: '20/10/2026 09:45', monto: 28.10, tipo: 'PAGO' },
    ]);
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#003366" />

      {/* Tarjeta de Saldo */}
      <View style={styles.cardSaldo}>
        <Text style={styles.tituloBanco}>MiSaldito - Banco del Pacífico</Text>
        <Text style={styles.montoSaldo}>${saldo.toFixed(2)}</Text>
        <Text style={styles.subtituloSaldo}>Saldo disponible para recargas/pagos</Text>
      </View>

      {/* Lista de Movimientos */}
      <View style={styles.listaContainer}>
        <Text style={styles.tituloLista}>Últimos Movimientos y Recargas</Text>
        <FlatList
          data={movimientos}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => <MovimientoItem item={item} />}
          showsVerticalScrollIndicator={false}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F4F6F8',
  },
  cardSaldo: {
    backgroundColor: '#003366',
    padding: 20,
    margin: 16,
    borderRadius: 8,
    elevation: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
  },
  tituloBanco: {
    color: '#FFFFFF',
    fontSize: 14,
  },
  montoSaldo: {
    color: '#FFFFFF',
    fontSize: 32,
    fontWeight: 'bold',
    marginTop: 8,
  },
  subtituloSaldo: {
    color: '#D0E1F9',
    fontSize: 12,
    marginTop: 4,
  },
  listaContainer: {
    flex: 1,
    paddingHorizontal: 16,
  },
  tituloLista: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333333',
    marginBottom: 10,
  },
});