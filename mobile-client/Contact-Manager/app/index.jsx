import { View, Text } from 'react-native';
import Sidebar from '../components/Sidebar';
import Dashboard from './Dashboard';
import BurgerMenu from '../components/BurgerMenu';
import Contacts from './Contacts'
export default function Index() {
  return (
    <BurgerMenu>
      <View style={{ padding: 20 }}>
        <Dashboard />
      </View>
    </BurgerMenu>
  );
}
