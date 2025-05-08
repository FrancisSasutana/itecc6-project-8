// app/contacts.js
import { View, Text } from 'react-native';
import Sidebar from '../components/Sidebar';

export default function Contacts() {
  return (
    <View style={{ flex: 1, flexDirection: 'row' }}>
      <Sidebar />
      <View style={{ padding: 20 }}>
        <Text style={{ fontSize: 24 }}>Contacts Page</Text>
      </View>
    </View>
  );
}
