import { View, Text } from 'react-native';
import BurgerMenu from '../components/BurgerMenu';
import SearchBar from '../components/SearchBar'

export default function Contacts() {
  return (
    <BurgerMenu>
      <View style={{ alignItems: 'center', marginTop: 10 }}>
        <Text style={{ fontSize: 24 }}>Contacts Page</Text>
      </View>
      <View style={{ flex: 1, padding: 20}}>
        <SearchBar />
      </View>
    </BurgerMenu>
  );
}
