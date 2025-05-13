import { useState } from 'react';
import { View, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Sidebar from '../components/Sidebar';

export default function BurgerMenu({ children }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <View style={{ flex: 1, flexDirection: 'row' }}>
      
      {/* Sidebar with collapsed prop */}
      <Sidebar collapsed={!isSidebarOpen} />

      <View style={{ flex: 1 }}>

        {/* Toggle button with either 'menu-outline' or 'close-outline' */}
        <TouchableOpacity onPress={toggleSidebar} style={{ padding: 15 }}>
          <Ionicons
            name={isSidebarOpen ? 'close-outline' : 'menu-outline'}
            size={30}
            color="black"
          />
        </TouchableOpacity>

        {children}
      </View>
    </View>
  );
}
