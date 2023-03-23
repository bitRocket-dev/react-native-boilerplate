/** @format */

import React, { ReactNode } from 'react';

import { Text, useColorScheme, View } from 'react-native';

import { Colors } from 'react-native/Libraries/NewAppScreen';

import { styles } from './styles';

interface Props {
  children: ReactNode;
  title: string;
}

export const Section = ({ children, title }: Props) => {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <View style={styles.sectionContainer}>
      <Text style={[styles.sectionTitle, { color: isDarkMode ? Colors.white : Colors.black }]}>{title}</Text>
      <Text style={[styles.sectionDescription, { color: isDarkMode ? Colors.light : Colors.dark }]}>{children}</Text>
    </View>
  );
};
