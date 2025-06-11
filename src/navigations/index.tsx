import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import App from '../screens/App';

export default function Navigation() {
  return (
    <NavigationContainer>
      <App />
    </NavigationContainer>
  );
}
