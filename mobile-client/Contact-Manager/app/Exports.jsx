import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Dimensions, ScrollView } from 'react-native';
import BurgerMenu from '../components/BurgerMenu';

const exportOptions = ['CSV', 'PDF', 'Excel', 'JSON', 'XML'];
const cardColor = '#4CAF50';

export default function Exports() {
  return (
    <BurgerMenu>
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.header}>Exports</Text>
        <View style={styles.cardContainer}>
          {exportOptions.map((type) => (
            <TouchableOpacity key={type} style={[styles.card, { backgroundColor: cardColor }]}>
              <Text style={styles.cardText}>Export as {type}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
    </BurgerMenu>
  );
}
const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    alignItems: 'center',
  },
  header: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#2E7D32',
    marginBottom: 20,
  },
  cardContainer: {
    width: '90%',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: 16,
  },
  card: {
    width: Dimensions.get('window').width > 400 ? '40%' : '80%',
    paddingVertical: 20,
    paddingHorizontal: 10,
    borderRadius: 12,
    marginVertical: 10,
    alignItems: 'center',
  },
  cardText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#FFFFFF',
    textAlign: 'center'
  },
});
