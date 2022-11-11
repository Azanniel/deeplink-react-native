import { createURL, useURL } from 'expo-linking';

import { Routes } from './src/routes';

export default function App() {
  const redirectUrl = useURL()

  const url = createURL('deeplinkapp/product', {});

  console.log(url);

  return (
    <Routes />
  );
}