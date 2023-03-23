/** @format */

import React, { useState } from 'react';

import { Button, Text, TextInput, View } from 'react-native';

export const Example = () => {
  const [name, setUser] = useState('');
  const [show, setShow] = useState(false);

  return (
    <View>
      <TextInput value={name} onChangeText={setUser} testID="input" />
      <Button
        title="Print Username"
        onPress={() => {
          setTimeout(() => {
            setShow(true);
          }, Math.floor(Math.random() * 200));
        }}
      />
      {show && <Text testID="printed-username">{name}</Text>}
    </View>
  );
};
