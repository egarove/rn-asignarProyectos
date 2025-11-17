
import { StyleSheet, Text, View } from 'react-native';
import { AppProvider } from './context/Context';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import AlumnoScreen from './screens/AlumnoScreen';
import ProyectoScreen from './screens/ProyectoScreen';
import RandomScreen from './screens/RandomScreen';



export default function App() {
const Tab = createBottomTabNavigator();
  return (
<AppProvider>
      <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen name="Alumnos" component={AlumnoScreen} />
          <Tab.Screen name="Proyectos" component={ProyectoScreen} />
          <Tab.Screen name="Reparto" component={RandomScreen} />
        </Tab.Navigator>
      </NavigationContainer>
    </AppProvider>  
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
