import BurgerMenu from '../components/BurgerMenu';
import { ScrollView } from 'react-native';
import AddForms from '../components/AddForms';

export default function AddContact() {
  return (
    <BurgerMenu>
      <ScrollView contentContainerStyle={{ paddingBottom: 40 }}>
        <AddForms />
      </ScrollView>
    </BurgerMenu>
  );
}
