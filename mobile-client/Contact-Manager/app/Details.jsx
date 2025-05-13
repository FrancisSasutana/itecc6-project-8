import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { useLocalSearchParams } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import Database from '../database/contacts.json';
import ReturnButton from '../components/ReturnButton';

export default function Details() {
  const { id } = useLocalSearchParams();
  const contact = Database.find((item) => item.id === parseInt(id));

  if (!contact) {
    return (
      <View style={styles.container}>
        <Text>Contact not found.</Text>
      </View>
    );
  }

  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <ReturnButton />
      <Ionicons name="person-circle-outline" size={100} color="#4CAF50" style={styles.mainIcon} />
      <Text style={styles.name}>{contact.name}</Text>

      <View style={styles.centerGroup}>
        <Ionicons name="call-outline" size={24} color="#4CAF50" />
        <Text style={styles.detail}>{contact.phone}</Text>
      </View>

      <View style={styles.centerGroup}>
        <Ionicons name="mail-outline" size={24} color="#4CAF50" />
        <Text style={styles.detail}>{contact.email}</Text>
      </View>

      <View style={styles.centerGroup}>
        <Ionicons name="location-outline" size={24} color="#4CAF50" />
        <Text style={styles.detail}>{contact.address}</Text>
      </View>

      <View style={styles.centerGroup}>
        <Ionicons name="people-outline" size={24} color="#4CAF50" />
        <Text style={styles.detail}>{contact.relationship}</Text>
      </View>

      <View style={styles.centerGroup}>
        <Ionicons name="document-text-outline" size={24} color="#4CAF50" />
        <Text style={styles.notes}>{contact.notes}</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollContainer: {
    padding: 20,
    backgroundColor: '#fff',
    alignItems: 'center',
    paddingBottom: 40,
  },
  mainIcon: {
    marginTop: 20,
    marginBottom: 10,
  },
  name: {
    fontSize: 26,
    fontWeight: 'bold',
    marginBottom: 25,
    color: '#333',
    textAlign: 'center',
  },
  centerGroup: {
    alignItems: 'center',
    marginBottom: 15,
    maxWidth: '90%',
  },
  detail: {
    fontSize: 18,
    marginTop: 5,
    color: '#333',
    textAlign: 'center',
  },
  notes: {
    fontSize: 16,
    fontStyle: 'italic',
    marginTop: 5,
    color: '#777',
    textAlign: 'center',
  },
});
