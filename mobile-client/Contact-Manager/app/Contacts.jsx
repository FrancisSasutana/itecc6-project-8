import { View, Text, ScrollView } from 'react-native';
import BurgerMenu from '../components/BurgerMenu';
import SearchBar from '../components/SearchBar'
import Database from '../database/contacts.json'
import ContactsCard from '../components/ContactsCard';
export default function Contacts() {
  return (
    <BurgerMenu>
      <ScrollView contentContainerStyle={{ paddingHorizontal: 10, paddingBottom: 20 }}>
      <View style={{ alignItems: 'center', marginTop: 10 }}>
        <Text style={{ fontSize: 24, color:'green', fontWeight: 'bold' }}>Contacts</Text>
      </View>
      <View>
        <SearchBar />
      </View>
        <View
          style={{
            flexDirection: 'row',
            flexWrap: 'wrap',
            justifyContent: 'center'           
          }}
        >
          {Database.map((contact) => (
            <ContactsCard key={contact.id} contact={contact} />
          ))}
        </View>
      </ScrollView>

    </BurgerMenu>
  );
}
