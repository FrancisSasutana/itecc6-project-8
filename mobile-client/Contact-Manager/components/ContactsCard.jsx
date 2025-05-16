import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';

export default function ContactsCard({ contact }) {
  const router = useRouter();

  return (
    <TouchableOpacity
      style={styles.card}
      onPress={() => router.push({ pathname: '/Details', params: { id: contact.id } })}
    >
      <Ionicons name="person-circle-outline" size={30} color="#fff" style={{ marginRight: 10 }} />
      <Text style={styles.name}>{contact.name}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#4CAF50',
    borderRadius: 10,
    padding: 10, 
    marginVertical: 8, 
    marginHorizontal: 8, 
    flexBasis: '50%',
  },
  name: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff',
  },
});
