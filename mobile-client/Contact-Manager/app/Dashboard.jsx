import { View, Text, StyleSheet, Dimensions } from 'react-native';
import Database from '../database/contacts.json';

export default function Dashboard() {
  const totalContacts = Database.length;
  const uniqueRelationships = [...new Set(Database.map(c => c.relationship))].length;

  const screenWidth = Dimensions.get('window').width;
  const isSmallScreen = screenWidth <= 400;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Dashboard</Text>

      <View style={styles.cardsContainer}>
        <View style={[styles.card, { width: isSmallScreen ? '100%' : '48%' }]}>
          <Text style={styles.cardTitle}>Total Contacts</Text>
          <Text style={styles.cardValue}>{totalContacts}</Text>
        </View>

        <View style={[styles.card, { width: isSmallScreen ? '100%' : '48%' }]}>
          <Text style={styles.cardTitle}>Unique Relationships</Text>
          <Text style={styles.cardValue}>{uniqueRelationships}</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#2e7d32',
    marginBottom: 20,
    textAlign: 'center',
  },
  cardsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    gap: 10,
  },
  card: {
    backgroundColor: '#e8f5e9',
    borderRadius: 10,
    padding: 16,
    marginBottom: 15,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  cardTitle: {
    fontSize: 14,
    color: '#388e3c',
    marginBottom: 6,
    fontWeight: '600',
    textAlign: 'center',
  },
  cardValue: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#1b5e20',
    textAlign: 'center',
  },
});
