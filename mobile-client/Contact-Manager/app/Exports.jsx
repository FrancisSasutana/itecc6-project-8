import BurgerMenu from '../components/BurgerMenu';
import { View, Text } from 'react-native';

export default function Exports() {
  return (
    <BurgerMenu>
      <View style={{ flex: 1, flexDirection: 'row' }}>
        <View style={{ padding: 20 }}>
          <Text style={{ fontSize: 24 }}>Exports Page</Text>
        </View>
      </View>
    </BurgerMenu>
  );
}
