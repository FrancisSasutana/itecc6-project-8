import { View, TextInput, StyleSheet, Text, TouchableOpacity } from 'react-native';

export default function AddForms() {
  return (
    <View style={styles.form}>
      <View style={styles.header}>
        <Text style={styles.title}>Add Contact</Text>
      </View>

      <Text style={styles.label}>Name</Text>
      <TextInput style={styles.input} placeholder="Enter name..." placeholderTextColor="#888" />

      <Text style={styles.label}>Phone</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter phone..."
        keyboardType="phone-pad"
        placeholderTextColor="#888"
      />

      <Text style={styles.label}>Email</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter email..."
        keyboardType="email-address"
        placeholderTextColor="#888"
      />

      <Text style={styles.label}>Address</Text>
      <TextInput style={styles.input} placeholder="Enter address..." placeholderTextColor="#888" />

      <Text style={styles.label}>Relationship</Text>
      <TextInput style={styles.input} placeholder="Enter relationship..." placeholderTextColor="#888" />

      <Text style={styles.label}>Notes</Text>
      <TextInput
        style={[styles.input, styles.notesInput]}
        placeholder="Add notes..."
        multiline
        placeholderTextColor="#888"
      />

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Add Contact</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  form: {
    borderRadius: 1,
    margin: 20,
    elevation: 4,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
  },
  header: {
    alignItems: 'center',
    marginBottom: 20,
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    color: 'green',
  },
  label: {
    fontWeight: '600',
    marginTop: 12,
    marginBottom: 6,
    color: '#2e7d32',
    fontSize: 15,
  },
  input: {
    borderWidth: 1,
    borderColor: '#c8e6c9',
    borderRadius: 8,
    padding: 12,
    backgroundColor: '#f1f8e9',
    color: '#000',
  },
  notesInput: {
    height: 100,
    textAlignVertical: 'top',
  },
  button: {
    backgroundColor: '#4CAF50',
    paddingVertical: 14,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 25,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
});
