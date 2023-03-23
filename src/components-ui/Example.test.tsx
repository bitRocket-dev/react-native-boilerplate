/** @format */

import React from 'react';

import { render, screen, fireEvent } from '@testing-library/react-native';

import { Example } from './Example';

test('examples of some things', async () => {
  const expectedUsername = 'Ada Lovelace';

  render(<Example />);

  fireEvent.changeText(screen.getByTestId('input'), expectedUsername);
  fireEvent.press(screen.getByText('Print Username'));

  const usernameOutput = await screen.findByTestId('printed-username');

  expect(usernameOutput).toHaveTextContent(expectedUsername);

  expect(screen.toJSON()).toMatchSnapshot();
});
