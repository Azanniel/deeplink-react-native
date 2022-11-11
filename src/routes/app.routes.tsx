import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Home } from '../screens/Home';
import { Product } from '../screens/Product';

const { Navigator, Screen } = createNativeStackNavigator();

export function AppRoutes() {
  return (
    <Navigator
      initialRouteName='home'
    >
      <Screen 
        name="home" 
        component={Home}
        options={{
          title: 'Início'
        }}
      />

      <Screen 
        name="product" 
        component={Product}
        options={{
          title: 'Produtos'
        }}
      />
    </Navigator>
  )
}