import { NavigationContainer } from '@react-navigation/native';
import * as Linking from 'expo-linking';

import { AppRoutes } from './app.routes';

const linking = {
  prefixes: [Linking.createURL('/deeplinkapp')],
  config: {
    screens: {
      home: {
        path: 'home'
      },
      product: {
        path: 'product/:id',
        parse: {
          id: (id: string) => id
        }
      }
    }
  }
}

export function Routes() {
  return (
    <NavigationContainer linking={linking}>
      <AppRoutes />
    </NavigationContainer>
  )
}