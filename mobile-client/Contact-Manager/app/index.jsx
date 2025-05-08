// app/index.js
import { View, Text } from 'react-native';
import Sidebar from '../components/Sidebar';
import Dashboard from './Dashboard';
export default function Index() {
  return (
    <View style={{ flex: 1, flexDirection: 'row' }}>
      <Sidebar />
      <View style={{ padding: 20 }}>
        <Dashboard />
      </View>
    </View>
  );
}
