'use strict';

import {expect} from 'code';
import Utilities from '../src/utilities';
import Strings from '../src/utilities/strings'

describe(`Folders`, () => {

  describe(`Utilities`, () => {

    it(`exposes lowercase via the index.js file`, () => {
      expect(Utilities.lowercase).to.be.a.function();
      expect(Utilities.uppercase).to.not.be.a.function();
    });

    it(`can access the strings utility`, () => {
      expect(Strings.lowercase).to.be.a.function();
      expect(Strings.uppercase).to.be.a.function();
      expect(Strings.trim).to.be.a.function();
    });
  });
});