/** @format */

// we always make sure 'react-native' gets included first
import * as ReactNative from 'react-native';

import mockAsyncStorage from '@react-native-async-storage/async-storage/jest/async-storage-mock';

// libraries to mock
jest.doMock('react-native', () =>
  // Extend ReactNative
  Object.setPrototypeOf(
    {
      Image: {
        ...ReactNative.Image,
        resolveAssetSource: jest.fn(_source => {}),
        getSize: jest.fn(
          (uri: string, success: (width: number, height: number) => void, _failure?: (_error: unknown) => void) =>
            success(100, 100),
        ),
      },
    },
    ReactNative,
  ),
);

jest.mock('@react-native-async-storage/async-storage', () => mockAsyncStorage);

jest.mock('i18n-js', () => ({
  currentLocale: (): string => 'en',
  t: (key: string, params: Record<string, string>): string => `${key} ${JSON.stringify(params)}`,
}));

declare const tron; // eslint-disable-line @typescript-eslint/no-unused-vars

jest.useFakeTimers();
