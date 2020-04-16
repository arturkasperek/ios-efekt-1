/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useState } from 'react';
import {
  SafeAreaView,
  Text,
  StatusBar,
  Button,
} from 'react-native';

const App: () => React$Node = () => {
  const [text, setText] = useState('Hello World');
  const changeText = () => {
    setText('Changed');
  };

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <Button title={'Action'} onPress={changeText}/>
        <Text style={{textAlign: 'center'}}>
          {text}
        </Text>
      </SafeAreaView>
    </>
  );
};

export default App;
