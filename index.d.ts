/**
 * eslint-disable no-unused-vars
 *
 * @format
 */

/** @format */

// NOTE: This is fix ts error ".toHaveTextContent" that missing on "expect" function

import { AccessibilityState, ImageStyle, StyleProp, TextStyle, ViewStyle } from 'react-native';

import { AccessibilityValueMatcher } from '@testing-library/react-native/build/helpers/matchers/accessibilityValue';
import { ReactTestInstance } from 'react-test-renderer';

interface JestNativeMatchers<R extends void | Promise<void>> {
  toBeDisabled(): R;
  toBeEmptyElement(): R;
  toBeEnabled(): R;
  toBeVisible(): R;
  toContainElement(element: ReactTestInstance | null): R;
  toHaveTextContent(text: string | RegExp, options?: { normalizeWhitespace: boolean }): R;
  toHaveProp(attr: string, value?: unknown): R;
  toHaveStyle(style: StyleProp<ViewStyle | TextStyle | ImageStyle>): R;
  toHaveAccessibilityState(state: AccessibilityState): R;
  toHaveAccessibilityValue(state: AccessibilityValueMatcher): R;

  /** @deprecated This function has been renamed to `toBeEmptyElement`. */
  toBeEmpty(): R;
}

// implicit jest globals, types coming from `@types/jest`
declare global {
  namespace jest {
    interface Matchers<R, T> extends JestNativeMatchers<R> {}
  }
}

// explicit jest globals, types coming from `@jest/globals`
declare module '@jest/expect' {
  interface Matchers<R extends void | Promise<void>> extends JestNativeMatchers<R> {}
}
