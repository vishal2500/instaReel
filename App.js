import 'react-native-url-polyfill/auto';
// import React from 'react';
import { Provider } from 'react-redux';
import { store } from './store';
import ReelsScreen from './screens/ReelsScreen';
import { NativeWindStyleSheet } from 'nativewind';
import { AppRegistry } from 'react-native'; // ✅ You forgot to import this

NativeWindStyleSheet.setOutput({
  default: 'native',
});

function App() {
  return (
    <Provider store={store}>
      <ReelsScreen />
    </Provider>
  );
}

AppRegistry.registerComponent('main', () => App); // ✅ App is defined now

export default App;
