
import { View, Text, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';

export default function Sidebar() {
  const router = useRouter();

  return (
    <View style={{ padding: 20, backgroundColor: '#eee', height: '100%' }}>
      <Text style={{ fontSize: 20, marginBottom: 20 }}>Menu</Text>
      <TouchableOpacity onPress={() => router.push('/')}>
        <Text>Dashboard</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => router.push('/Contacts')} style={{ marginTop: 10 }}>
        <Text>Contacts</Text>
      </TouchableOpacity>
    </View>
  );
}
