import { Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export function Product({ route }) {
  return (
    <SafeAreaView style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text style={{ fontSize: 32 }}>
        ID do Produto: {route.params?.id}
      </Text>
    </SafeAreaView>
  )
}