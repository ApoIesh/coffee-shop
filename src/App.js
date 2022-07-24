import React, {Component} from 'react';
import {StatusBar} from 'react-native';
import RouterNavigator from './RouterNavigator';
import {NavigationContainer} from '@react-navigation/native';
import {navigationRef, isReadyRef} from './NavigationActions';
import {black_color} from './components/Assets/style/styles';
import {LogBox} from 'react-native';

LogBox.ignoreLogs([
  'ViewPropTypes will be removed',
  'ColorPropType will be removed',
  'VirtualizedLists should never',
]);

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <NavigationContainer
        ref={navigationRef}
        onReady={() => {
          isReadyRef.current = true;
        }}>
        <StatusBar barStyle="light-content" backgroundColor={black_color} />
        <RouterNavigator />
      </NavigationContainer>
    );
  }
}

export default App;
