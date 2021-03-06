/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @emails react-core
 */

'use strict';

var React;
var ReactNativeCS;

describe('ReactNativeCS', () => {
  beforeEach(() => {
    jest.resetModules();

    React = require('react');
    ReactNativeCS = require('ReactNativeCSFiberEntry');
  });

  it('should be able to create and render a native component', () => {
    const RCTView = 'View';
    ReactNativeCS.render(<RCTView foo="test" />, 1);
  });
});
