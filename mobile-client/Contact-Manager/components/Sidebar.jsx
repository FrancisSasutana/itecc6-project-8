import { View, Text, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

export default function Sidebar({ collapsed }) {
  const router = useRouter();

  return (
    <View style={{
      paddingTop: 40,
      paddingHorizontal: collapsed ? 10 : 20,
      backgroundColor: 'green',
      height: '100%',
      width: collapsed ? 50 : 220,
      alignItems: collapsed ? 'center' : 'flex-start'
    }}>
      <View style={{ alignItems: 'center', marginBottom: 40 }}>
        <Ionicons name="person-circle-outline" size={collapsed ? 40 : 80} color="white" />
        {!collapsed && (
          <Text style={{ fontSize: 20, color: 'white', fontWeight: 'bold', marginTop: 10 }}>
            Contact Manager
          </Text>
        )}
      </View>

      <TouchableOpacity onPress={() => router.push('/')} style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 20 }}>
        <Ionicons name="home-outline" size={20} color="white" />
        {!collapsed && <Text style={{ color: 'white', marginLeft: 10 }}>Dashboard</Text>}
      </TouchableOpacity>

      <TouchableOpacity onPress={() => router.push('/Contacts')} style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 20 }}>
        <Ionicons name="people-outline" size={20} color="white" />
        {!collapsed && <Text style={{ color: 'white', marginLeft: 10 }}>Contacts</Text>}
      </TouchableOpacity>

      <TouchableOpacity onPress={() => router.push('/AddContact')} style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 20 }}>
        <Ionicons name="person-add-outline" size={20} color="white" />
        {!collapsed && <Text style={{ color: 'white', marginLeft: 10 }}>Add Contact</Text>}
      </TouchableOpacity>

      <TouchableOpacity onPress={() => router.push('/Exports')} style={{ flexDirection: 'row', alignItems: 'center' }}>
        <Ionicons name="cloud-download-outline" size={20} color="white" />
        {!collapsed && <Text style={{ color: 'white', marginLeft: 10 }}>Exports</Text>}
      </TouchableOpacity>
    </View>
  );
}
