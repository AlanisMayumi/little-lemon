// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import "@testing-library/jest-dom";
// reference: https://stackoverflow.com/questions/79332161/referenceerror-textencoder-is-not-defined-after-react-router-dom-upgrade-to-7
import { TextEncoder, TextDecoder } from "node:util";

if (!global.TextEncoder) {
  global.TextEncoder = TextEncoder;
}

if (!global.TextDecoder) {
  global.TextDecoder = TextDecoder;
}
